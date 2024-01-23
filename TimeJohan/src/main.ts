import "./style.css";
import "./scss/styles.scss";
import "./scss/pages/_analog.scss"

import moment from 'moment';
import {startAnalogClock, stopAnalogClock, toggleAnalogTimer}from './modules/analog';

import {timerMenu} from './modules/menu';

import {startBreakTimer, stopBreakTimer, updateBreakTimer} from './modules/break';

import {startTimer, stopTimer, updateTimerDisplay, updateCheckboxValues} from "./modules/counter"



  // HTML-element
//   const dropdownButton = document.querySelector('.dropdown-button') as HTMLButtonElement;
//   const menuHidden = document.querySelector('.menu-hidden') as HTMLDivElement;
const analogButton = document.querySelector('.analogButton') as HTMLButtonElement;
const digitalButton = document.querySelector('.digital') as HTMLButtonElement;
const visualButton = document.querySelector('.visual') as HTMLButtonElement;
const textButton = document.querySelector('.text') as HTMLButtonElement;
const circlesButton = document.querySelector('.circles') as HTMLButtonElement;
const startButton = document.getElementById('start-button') as HTMLButtonElement;
const stopButton = document.querySelector('.stop-button') as HTMLButtonElement;
const timerInput = document.getElementById('timer-input') as HTMLInputElement;
const reduceTimeButton = document.querySelector('.reduce-time') as HTMLButtonElement;
const addTimeButton = document.querySelector('.add-time') as HTMLButtonElement;
const resetPausButton = document.getElementById('reset-paus-button') as HTMLButtonElement;
let dropdownBtn: HTMLButtonElement | any = document.querySelector('.dropdown-button');

//drop down menu
//   dropdownButton.addEventListener("click", toggleMenuOptions);
analogButton.addEventListener("click", toggleAnalogTimer);
digitalButton.addEventListener("click", showView);
visualButton.addEventListener("click", showView);
textButton.addEventListener("click", showView);
circlesButton.addEventListener("click", showView);
dropdownBtn.addEventListener('click', timerMenu);

//Öka minska tiden
reduceTimeButton.addEventListener("click", () => adjustTime(-1));
addTimeButton.addEventListener("click", () => adjustTime(1));

//start, stop
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", function() {
	location.reload();
});

resetPausButton.addEventListener("click", startTimer);
  //Functions
//   function toggleMenuOptions() {
//     menuHidden.classList.toggle("hidden");
//   }

function showView(event: Event) {
    const button = event.target as HTMLButtonElement;
    // Implementera logik för att visa rätt vy baserat på knappen
    console.log(`Showing ${button.innerText} view`);
  }

  //Funktion som göra att vi kan öka och minska tiden med pilarna (i minuter)
  function adjustTime(delta: number): void {
    const currentValue: number = parseInt(timerInput.value, 10);

    if (!isNaN(currentValue)) {
        timerInput.value = Math.max(1, currentValue + delta).toString();
    }
}

