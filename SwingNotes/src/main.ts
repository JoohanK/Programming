const baseURL: string = "https://o6wl0z7avc.execute-api.eu-north-1.amazonaws.com";



interface Note {
    id: string;
    username: string;
    title: string;
    note: string;
    createdAt: Date;
}

async function getNotes(): Promise<void> {
    const username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
    const response: Response = await fetch(`${baseURL}/api/notes/${username}`);
    const responseData: any = await response.json();
  
    if (!responseData || !Array.isArray(responseData.notes)) {
      console.error("Invalid data format:", responseData);
      return;
    }
  
    const notes: Note[] = responseData.notes;
  
    // Sortera anteckningarna efter skapad datum i fallande ordning
    const sortedNotes: Note[] = notes.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  
    console.log("Hämtade anteckningar:", sortedNotes);


    displayRecentNotes(sortedNotes);
    // Implementera kod för att visa anteckningarna på sidan
}


function displayRecentNotes(notes: Note[]): void {
    

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
        updateButton.innerText = "Update";
        updateButton.onclick = () => showUpdateForm(note.id);
        noteCard.appendChild(updateButton);
        updateButton.classList.add("action-button-update");

        const deleteButton: HTMLButtonElement = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleteNoteById(note.id);
        noteCard.appendChild(deleteButton);
        deleteButton.classList.add("action-button-delete");

        recentNotesContainer.appendChild(noteCard);
    }
}



async function createNote(): Promise<void> {
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
        // Skicka en POST-förfrågan för att skapa anteckningen
        const response: Response = await fetch(`${baseURL}/api/notes`, {
            method: "POST",
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data: Note = await response.json();
        console.log("Skapade anteckning:", data);

        // Nollställ inputfälten efter att anteckningen har skapats
        titleInput.value = "";
        noteInput.value = "";

        // Hämta och visa de uppdaterade anteckningarna
        await getNotes();
    } catch (error) {
        console.error("Error creating note:", error);
    }
}


async function updateNote(): Promise<void> {
    const noteId: string = (document.getElementById("updateNoteId") as HTMLInputElement).value;
    const updatedNoteText: string = (document.getElementById("updatedNote") as HTMLInputElement).value;

    const updatedNote: Partial<Note> = {
        note: updatedNoteText
    };

    const response: Response = await fetch(`${baseURL}/api/notes/${noteId}`, {
        method: "PUT",
        body: JSON.stringify(updatedNote),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: Note = await response.json();
    getNotes();
    console.log("Uppdaterade anteckning:", data);
    hidePopup();
}



async function showUpdateForm(noteId: string): Promise<void> {
    showPopup();
    try {
        // Hämta den befintliga anteckningen för det givna noteId
        const response: Response = await fetch(`${baseURL}/api/notes/${noteId}`);
        
        if (!response.ok) {
            console.error("Error fetching note:", response.statusText);
            return;
        }

        const note: Note = await response.json();
        console.log("Fetched note:", note);

        // Fyll i formuläret med de befintliga värdena
        const updateNoteIdInput = document.getElementById("updateNoteId") as HTMLInputElement;
        const updatedNoteInput = document.getElementById("updatedNote") as HTMLInputElement;

        if (updateNoteIdInput && updatedNoteInput) {
            updateNoteIdInput.value = noteId;
            updatedNoteInput.value = "Update note here";
        }
        
    } catch (error) {
        console.error("Error in showUpdateForm:", error);
    }
}

async function deleteNoteById(noteId: string): Promise<void> {
    // Skicka en förfrågan för att ta bort anteckningen med det givna noteId
    const response: Response = await fetch(`${baseURL}/api/notes/${noteId}`, {
        method: "DELETE"
    });

    if (response.ok) {
        console.log("Anteckning borttagen");
        await getNotes();
        // Uppdatera sidan eller gör vad som är nödvändigt efter borttagning
    } else {
        console.error("Kunde inte ta bort anteckning");
    }
}

async function createAndFetchNotes(): Promise<void> {
    await createNote();
    await getNotes();
}

function showPopup(): void {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const abortButton = document.getElementById("abortButton")!;
  
    if (overlay && popup) {
      overlay.classList.remove("hidden");
      popup.classList.remove("hidden");
      abortButton.classList.remove("hidden");
    }
  }
  
  // Funktion för att dölja popup
  function hidePopup(): void {
    const overlay = document.getElementById("overlay");
    const popup = document.getElementById("popup");
    const abortButton = document.getElementById("abortButton")!;
  
    if (overlay && popup) {
      overlay.classList.add("hidden");
      popup.classList.add("hidden");
      abortButton.classList.add("hidden");
    }
  }
  