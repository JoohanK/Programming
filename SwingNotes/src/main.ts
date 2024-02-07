const baseURL = "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";

import axios from "axios";


document.addEventListener("DOMContentLoaded", () => {
    // Hämta referenser till knapparna
    const publishButton = document.getElementById('publishButton');
    const historyButton = document.getElementById('historyButton');
    const updateButton = document.getElementById('updateButton');
    const abortButton = document.getElementById('abortButton');

    // Lägg till händelsehanterare för varje knapp
    publishButton?.addEventListener('click', createAndFetchNotes);
    historyButton?.addEventListener('click', getNotes);
    updateButton?.addEventListener('click', updateNote);
    abortButton?.addEventListener('click', hidePopup);
});

interface ApiResponse {
    notes: Note[];
    
}


interface Note {
    id: string;
    username: string;
    title: string;
    note: string;
    createdAt: Date;
}


const getNotes = async (): Promise<void> => {
    const username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
    
    try {
        const response = await axios.get(`${baseURL}/api/notes/${username}`);
        const responseData: ApiResponse = response.data;
        
        const notes: Note[] = responseData.notes;
        
        // Sortera anteckningarna efter skapad datum i fallande ordning
        const sortedNotes: Note[] = notes.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        
        console.log("Hämtade anteckningar:", sortedNotes);

        displayRecentNotes(sortedNotes);
        // Implementera kod för att visa anteckningarna på sidan
    } catch (error) {
        console.error("Error fetching notes:", error);
    }
};


const displayRecentNotes = (notes: Note[]): void => {
    const recentNotesContainer: HTMLElement = document.getElementById("recentNotes")!;

    recentNotesContainer.innerHTML = "";

    // Visa de senaste 4 anteckningarna
    const notesToDisplay: Note[] = notes.slice(0, 4);
    for (const note of notesToDisplay) {
        console.log("Displaying note:", note);
        
        const noteCard: HTMLDivElement = document.createElement("div");
        noteCard.classList.add("note-card");

        const noteInfo: HTMLParagraphElement = document.createElement("p");
        noteInfo.innerText = `Användare: ${note.username}\nTitel: ${note.title}\nAnteckning: ${note.note}\nDate: ${note.createdAt}`;
        noteCard.appendChild(noteInfo);

        const updateButton: HTMLButtonElement = document.createElement("button");
        updateButton.innerText = "Uppdatera";
        updateButton.onclick = () => showUpdateForm(note.id);
        noteCard.appendChild(updateButton);
        updateButton.classList.add("action-button-update");

        const deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.innerText = "Ta bort";
        deleteButton.onclick = () => deleteNoteById(note.id);
        noteCard.appendChild(deleteButton);
        deleteButton.classList.add("action-button-delete");

        recentNotesContainer.appendChild(noteCard);
    }
};

const createNote = async (): Promise<void> => {
    const usernameInput: HTMLInputElement = document.getElementById("usernameInput") as HTMLInputElement;
    const titleInput: HTMLInputElement = document.getElementById("title") as HTMLInputElement;
    const noteInput: HTMLInputElement = document.getElementById("note") as HTMLInputElement;

    const username: string = usernameInput.value;
    const title: string = titleInput.value;
    const noteText: string = noteInput.value;

    const note: Omit<Note, 'id' | 'createdAt'> = {
        username: username,
        title: title,
        note: noteText
    };

    try {
        // Skicka en POST-förfrågan för att skapa anteckningen med Axios
        const response = await axios.post(`${baseURL}/api/notes`, note, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data: Note = response.data;
        console.log("Skapade anteckning:", data);

        // Nollställ inputfälten efter att anteckningen har skapats
        titleInput.value = "";
        noteInput.value = "";

        // Hämta och visa de uppdaterade anteckningarna
        await getNotes();
    } catch (error) {
        console.error("Error creating note:", error);
    }
};

const updateNote = async (): Promise<void> => {
    try {
        const noteId: string = (document.getElementById("updateNoteId") as HTMLInputElement).value;
        const updatedNoteText: string = (document.getElementById("updatedNote") as HTMLInputElement).value;

        const updatedNote: Partial<Note> = {
            note: updatedNoteText
        };

        const response = await axios.put(`${baseURL}/api/notes/${noteId}`, updatedNote, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data: Note = response.data;
        console.log("Uppdaterade anteckning:", data);

        // Hämta de uppdaterade anteckningarna och uppdatera vyn
        await getNotes();
        hidePopup();
    } catch (error) {
        console.error("Error updating note:", error);
    }
};


const showUpdateForm = async (noteId: string): Promise<void> => {
    showPopup();
    try {
      
        const response = await axios.get(`${baseURL}/api/notes/${noteId}`);
        
        const note: Note = response.data;
        console.log("Fetched note:", note);

       
        const updateNoteIdInput = document.getElementById("updateNoteId") as HTMLInputElement;
        const updatedNoteInput = document.getElementById("updatedNote") as HTMLInputElement;

        if (updateNoteIdInput && updatedNoteInput) {
            updateNoteIdInput.value = noteId;
            /* updatedNoteInput.value = note.note; */
        }
        
    } catch (error) {
        console.error("Error in showUpdateForm:", error);
    }
};


const deleteNoteById = async (noteId: string): Promise<void> => {
    try {
        // Skicka en förfrågan för att ta bort anteckningen med det givna noteId med Axios
        const response = await axios.delete(`${baseURL}/api/notes/${noteId}`);

        if (response.status === 200) {
            console.log("Anteckning borttagen");
            await getNotes();
            // Uppdatera sidan eller gör vad som är nödvändigt efter borttagning
        } else {
            console.error("Kunde inte ta bort anteckning");
        }
    } catch (error) {
        console.error("Error deleting note:", error);
    }
};


const createAndFetchNotes = async (): Promise<void> => {
    await createNote();
    await getNotes();
};

const showPopup = (): void => {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const abortButton = document.getElementById("abortButton")!;
  
    if (overlay && popup) {
      overlay.classList.remove("hidden");
      popup.classList.remove("hidden");
      abortButton.classList.remove("hidden");
    }
};

const hidePopup = (): void => {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const abortButton = document.getElementById("abortButton")!;
  
    if (overlay && popup) {
      overlay.classList.add("hidden");
      popup.classList.add("hidden");
      abortButton.classList.add("hidden");
    }
};

