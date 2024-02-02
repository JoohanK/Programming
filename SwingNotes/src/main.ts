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
    const data: Note[] = await response.json();
    console.log("Hämtade anteckningar:", data);

    displayRecentNotes(data);
    // Implementera kod för att visa anteckningarna på sidan
}

function displayRecentNotes(responseData: any): void {
    console.log("Data från API:", responseData);

    if (!responseData || !Array.isArray(responseData.notes)) {
        console.error("Invalid data format:", responseData);
        return;
    }

    const notes = responseData.notes;

    const recentNotesContainer = document.getElementById("recentNotes")!;

    // Töm befintliga anteckningar
    recentNotesContainer.innerHTML = "";

    // Visa de senaste 4 anteckningarna
    const notesToDisplay = notes.slice(0, 4);
    for (const note of notesToDisplay) {
        console.log("Displaying note:", note);
        
        const noteCard = document.createElement("div");
        noteCard.classList.add("note-card");

        const noteInfo = document.createElement("p");
        noteInfo.innerText = `Användare: ${note.username}\nTitel: ${note.title}\nAnteckning: ${note.note}`;
        noteCard.appendChild(noteInfo);

        const updateButton = document.createElement("button");
        updateButton.innerText = "Uppdatera";
        updateButton.onclick = () => showUpdateForm(note.id);
        noteCard.appendChild(updateButton);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Ta bort";
        deleteButton.onclick = () => deleteNoteById(note.id);
        noteCard.appendChild(deleteButton);

        recentNotesContainer.appendChild(noteCard);
    }
}

async function createNote(): Promise<void> {
    const username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
    const title: string = (document.getElementById("title") as HTMLInputElement).value;
    const noteText: string = (document.getElementById("note") as HTMLInputElement).value;

    const note: Omit<Note, 'id' | 'createdAt'> = {
        username: username,
        title: title,
        note: noteText
    };

    const response: Response = await fetch(`${baseURL}/api/notes`, {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const data: Note = await response.json();
    console.log("Skapade anteckning:", data);
    // Implementera kod för att visa den nya anteckningen på sidan
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
    console.log("Uppdaterade anteckning:", data);
    // Implementera kod för att visa den uppdaterade anteckningen på sidan
}

async function deleteNote(): Promise<void> {
    const noteId: string = (document.getElementById("deleteNoteId") as HTMLInputElement).value;

    const response: Response = await fetch(`${baseURL}/api/notes/${noteId}`, {
        method: "DELETE"
    });

    console.log("Anteckning borttagen");
    
    // Implementera kod för att uppdatera sidan efter borttagning
}



async function showUpdateForm(noteId: string): Promise<void> {
    // Hämta den befintliga anteckningen för det givna noteId
    const response: Response = await fetch(`${baseURL}/api/notes/${noteId}`);
    const note: Note = await response.json();

    // Fyll i formuläret med de befintliga värdena
    const updateNoteIdInput = document.getElementById("updateNoteId") as HTMLInputElement;
    const updatedNoteInput = document.getElementById("updatedNote") as HTMLInputElement;

    if (updateNoteIdInput && updatedNoteInput) {
        updateNoteIdInput.value = noteId;
        updatedNoteInput.value = note.note;
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