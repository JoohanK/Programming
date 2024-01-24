import "./style.css";
import "./scss/styles.scss";
import "./scss/pages/_analog.scss";
import "./scss/pages/_visual.scss";

import moment from 'moment';
import {startAnalogClock, stopAnalogClock}from './modules/analog';
import {startVisualTimer, stopVisualTimer} from './modules/visual';
import { startBreakTimer, stopBreakTimer, updateBreakTimer } from "./modules/break";
import {timerMenu, toggleAnalogTimer, showDigitalTimer, showVisualTimer, showSetTimer} from './modules/menu';
import { startTimer, stopTimer, updateTimerDisplay } from "./modules/counter";


  // HTML-element
//   const dropdownButton = document.querySelector('.dropdown-button') as HTMLButtonElement;
//   const menuHidden = document.querySelector('.menu-hidden') as HTMLDivElement;
  const setTimerButton = document.querySelector('.setTimerBtn') as HTMLButtonElement;
  const analogButton = document.querySelector('.analogButton') as HTMLButtonElement;
  const digitalButton = document.querySelector('.digital') as HTMLButtonElement;
  const visualButton = document.querySelector('.visual') as HTMLButtonElement;
  const textButton = document.querySelector('.text') as HTMLButtonElement;
  const circlesButton = document.querySelector('.circles') as HTMLButtonElement;
  const timerDisplay = document.getElementById('timer-display') as HTMLDivElement;
  const timerInput = document.getElementById('timer-input') as HTMLInputElement;
  const reduceTimeButton = document.querySelector('.reduce-time') as HTMLButtonElement;
  const addTimeButton = document.querySelector('.add-time') as HTMLButtonElement;
 

  const startButton = document.getElementById('start-button') as HTMLButtonElement;
  const stopButton = document.querySelector('.stop-button') as HTMLButtonElement;
  const resetPausButton = document.getElementById('reset-paus-button') as HTMLButtonElement;
  const analogTimerSection: HTMLElement | null = document.getElementById('analogTimerSection');
  let dropdownBtn: HTMLButtonElement | any = document.querySelector('.dropdown-button');




//drop down menu
//   dropdownButton.addEventListener("click", toggleMenuOptions);
setTimerButton.addEventListener("click", showSetTimer);
analogButton.addEventListener("click", toggleAnalogTimer);
digitalButton.addEventListener("click", showDigitalTimer );
visualButton.addEventListener("click", showVisualTimer);
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


  // Funktion för att uppdatera checkbox-värden


  function adjustTime(delta: number): void {
    const currentValue: number = parseInt(timerInput.value, 10);

    if (!isNaN(currentValue)) {
        timerInput.value = Math.max(1, currentValue + delta).toString();
    }
}
