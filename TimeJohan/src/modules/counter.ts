// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }
import moment from "moment";
import { startBreakTimer, stopBreakTimer, updateBreakTimer } from "./break";
import { startAnalogClock, stopAnalogClock, updateAnalogClock, toggleAnalogTimer} from "./analog";

const checkboxIntervals = document.getElementById('checkbox-intervals') as HTMLInputElement;
const checkboxBreak = document.getElementById('checkbox-break') as HTMLInputElement;
const timerInput = document.getElementById('timer-input') as HTMLInputElement;
const timerDisplay = document.getElementById('timer-display') as HTMLDivElement;

  let timerInterval: number | null = null;
  let endTime: moment.Moment | null = null;
  let shouldRepeat = checkboxIntervals.checked;
  let shouldRepeatWithPaus = checkboxIntervals.checked && checkboxBreak.checked;

   // Lyssna på ändringar i checkboxarna
   checkboxIntervals.addEventListener('change', updateCheckboxValues);
   checkboxBreak.addEventListener('change', function () {
     // Klicka i checkboxIntervals om checkboxBreak är markerad
     if (checkboxBreak.checked) {
         checkboxIntervals.checked = true;
     }
     updateCheckboxValues();
 });

   // Funktion för att uppdatera checkbox-värden
   function updateCheckboxValues() {
    shouldRepeat = checkboxIntervals.checked;
    shouldRepeatWithPaus = checkboxIntervals.checked && checkboxBreak.checked;

    if (!shouldRepeat) {
      checkboxBreak.checked= false;
    }
    console.log("shouldRepeat:", shouldRepeat);
    console.log("shouldRepeatWithPaus:", shouldRepeatWithPaus);
  }

  function startTimer() {
    const minutes: number = parseInt(timerInput.value, 10);
    if (isNaN(minutes) || minutes <= 0) {
      alert("Please enter a valid positive number of minutes.");
      return;
    }
    console.log("hej")
    endTime = moment().add(minutes, 'minutes');
    startAnalogClock(endTime);
    timerInterval = setInterval(() => {
      updateTimerDisplay();
     
      const now = moment();
      const duration = moment.duration(endTime!.diff(now));
      const minutes = Math.max(0, Math.floor(duration.asMinutes())); // Kontrollera att minuterna inte är negativa
      const seconds = Math.floor(duration.seconds());
  
      if (minutes === 0 && seconds === 0) {
        stopTimer();
        stopAnalogClock();
  
        if (shouldRepeat && !shouldRepeatWithPaus) {
          startTimer();
          
        } else if (shouldRepeatWithPaus) {
          startBreakTimer();
        } else {
          updateTimerDisplay();  // Uppdatera displayen när timern är klar
          stopTimer();
          stopAnalogClock();
        }
      }
    }, 1000);
    updateBreakTimer();
    updateTimerDisplay();
    stopBreakTimer();
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      endTime = null;
      updateBreakTimer();
      updateTimerDisplay();
      stopBreakTimer();

    }
  }

  function updateTimerDisplay() {
    if (endTime) {
      const duration = moment.duration(endTime.diff(moment()));
      const minutes = Math.floor(duration.asMinutes());
      const seconds = Math.floor(duration.seconds());
      timerDisplay.innerText = `${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
  }

  export {startTimer, stopTimer, updateTimerDisplay, updateCheckboxValues};