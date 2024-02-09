import axios from "axios";
import { ApiResponse, Note } from "./interface&type";
import { baseURL } from "../main";
import { deleteNoteById } from "./delete";
import { showUpdateForm } from "./popUp";

export const getNotes = async (): Promise<void> => {
    const username: string = (document.getElementById("usernameInput") as HTMLInputElement).value;
    
    try {
        const response = await axios.get(`${baseURL}/api/notes/${username}`);
        const responseData: ApiResponse = response.data;
        
        const notes: Note[] = responseData.notes;
        
        // Sortera anteckningarna efter skapad datum i fallande ordning
        const sortedNotes: Note[] = notes.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        
        console.log("Hämtade anteckningar:", sortedNotes);

        displayRecentNotes(sortedNotes);
      
    } catch (error) {
        console.error("Error fetching notes:", error);
    }
};


export const displayRecentNotes = (notes: Note[]): void => {
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