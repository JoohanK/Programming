import "./style.css";
import "./scss/styles.scss"

import moment from 'moment';

// Hämtar HTML-element
const timerInput: HTMLInputElement | null = document.getElementById("timer-input") as HTMLInputElement;
const startButton: HTMLButtonElement | null = document.getElementById("start-button") as HTMLButtonElement;
const stopButton: HTMLButtonElement | null = document.getElementById("stop-button") as HTMLButtonElement;
const timerDisplay: HTMLDivElement | null = document.getElementById("timer-display") as HTMLDivElement;

// Deklaration av variabel för att lagra identifieraren för timer-intervallet
let timerInterval: number | null = null;

// Deklaration av variabel för att lagra sluttidpunkten för timern med Moment.js
let endTime: moment.Moment | null = null;

// Funktion för att starta timern
function startTimer() {
    // Hämta antalet minuter från användarinput
    const minutes: number = parseInt(timerInput!.value, 10);

    // Kontrollera om inmatningen är giltig
    if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter a valid positive number of minutes.");
        return;
    }

    // Beräkna sluttidpunkten för timern med hjälp av Moment.js
    endTime = moment().add(minutes, 'minutes');

    // Starta ett timer-intervall som uppdaterar displayen varje sekund
    timerInterval = setInterval(() => {
        updateTimerDisplay();

        // Kontrollera om nuvarande tid är efter den beräknade sluttidpunkten
        const now = moment();
        if (now.isAfter(endTime!)) {
            // Stoppa timern om sluttidpunkten har passerats
            stopTimer();
            alert("Timer is done!");
        }
    }, 1000);

    // Uppdatera timer-display och knappar
    updateTimerDisplay();
    toggleButtons(true);
}

// Funktion för att stoppa timern
function stopTimer() {
    // Kontrollera om timerInterval är satt
    if (timerInterval) {
        // Stoppa timer-intervall och återställ variabler
        clearInterval(timerInterval);
        timerInterval = null;
        endTime = null;
        toggleButtons(false);
    }
}

// Funktion för att uppdatera timer-display
function updateTimerDisplay() {
    // Kontrollera om endTime är satt
    if (endTime) {
        // Beräkna och uppdatera återstående tid på timer-display
        const duration = moment.duration(endTime.diff(moment()));
        const minutes = Math.floor(duration.asMinutes());
        const seconds = Math.floor(duration.seconds());
        timerDisplay!.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
}

// Funktion för att aktivera/inaktivera knappar beroende på om timern körs eller inte
function toggleButtons(running: boolean) {
    startButton!.disabled = running;
    stopButton!.disabled = !running;
    timerInput!.disabled = running;
}

// Lägg till händelselyssnare för start- och stopp-knapparna
startButton!.addEventListener("click", startTimer);
stopButton!.addEventListener("click", stopTimer);