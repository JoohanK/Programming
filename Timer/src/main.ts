import "./style.css";
import "./scss/styles.scss";
import moment from 'moment';

  // HTML-element
  const dropdownButton = document.querySelector('.dropdown-button') as HTMLButtonElement;
  const menuHidden = document.querySelector('.menu-hidden') as HTMLDivElement;
  const analogButton = document.querySelector('.analog') as HTMLButtonElement;
  const digitalButton = document.querySelector('.digital') as HTMLButtonElement;
  const visualButton = document.querySelector('.visual') as HTMLButtonElement;
  const textButton = document.querySelector('.text') as HTMLButtonElement;
  const circlesButton = document.querySelector('.circles') as HTMLButtonElement;
  const timerDisplay = document.getElementById('timer-display') as HTMLDivElement;
  const timerInput = document.getElementById('timer-input') as HTMLInputElement;
  const reduceTimeButton = document.querySelector('.reduce-time') as HTMLButtonElement;
  const addTimeButton = document.querySelector('.add-time') as HTMLButtonElement;
  const checkboxIntervals = document.getElementById('checkbox-intervals') as HTMLInputElement;
  const checkboxBreak = document.getElementById('checkbox-break') as HTMLInputElement;
  const startButton = document.getElementById('start-button') as HTMLButtonElement;
  const stopButton = document.getElementById('stop-button') as HTMLButtonElement;
  const timerBreak = document.getElementById('timer-display-break') as HTMLDivElement;
  const resetPausButton = document.getElementById('reset-paus-button') as HTMLButtonElement;

  // Timer-variabler
  let timerInterval: number | null = null;
  let endTime: moment.Moment | null = null;
  let breakTimerInterval: number | null = null;
  let breakEndTime: moment.Moment | null = null;

  let shouldRepeat = checkboxIntervals.checked;
  let shouldRepeatWithPaus = checkboxIntervals.checked && checkboxBreak.checked;


  // Lyssna på ändringar i checkboxarna
  checkboxIntervals.addEventListener('change', updateCheckboxValues);
  checkboxBreak.addEventListener('change', updateCheckboxValues);

  //drop down menu
  dropdownButton.addEventListener("click", toggleMenuOptions);
  analogButton.addEventListener("click", showView);
  digitalButton.addEventListener("click", showView);
  visualButton.addEventListener("click", showView);
  textButton.addEventListener("click", showView);
  circlesButton.addEventListener("click", showView);

  //Öka minska tiden
  reduceTimeButton.addEventListener("click", () => adjustTime(-1));
  addTimeButton.addEventListener("click", () => adjustTime(1));

  //start, stop
  startButton.addEventListener("click", startTimer);
  stopButton.addEventListener("click", stopTimer);
  resetPausButton.addEventListener("click", startTimer);
  //Functions
  function toggleMenuOptions() {
    menuHidden.classList.toggle("hidden");
  }

  function showView(event: Event) {
    const button = event.target as HTMLButtonElement;
    // Implementera logik för att visa rätt vy baserat på knappen
    console.log(`Showing ${button.innerText} view`);
  }

  // Funktion för att uppdatera checkbox-värden
  function updateCheckboxValues() {
    shouldRepeat = checkboxIntervals.checked;
    shouldRepeatWithPaus = checkboxIntervals.checked && checkboxBreak.checked;
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
  
    timerInterval = setInterval(() => {
      updateTimerDisplay();
  
      const now = moment();
      const duration = moment.duration(endTime!.diff(now));
      const minutes = Math.max(0, Math.floor(duration.asMinutes())); // Kontrollera att minuterna inte är negativa
      const seconds = Math.floor(duration.seconds());
  
      if (minutes === 0 && seconds === 0) {
        stopTimer();
  
        if (shouldRepeat && !shouldRepeatWithPaus) {
          startTimer();
        } else if (shouldRepeatWithPaus) {
          startBreakTimer();
        } else {
          updateTimerDisplay();  // Uppdatera displayen när timern är klar
          toggleButtons(false);  // Inaktivera knapparna när timern är klar
        }
      }
    }, 1000);
  
    updateTimerDisplay();
    toggleButtons(true);
    stopBreakTimer();
  }

  function stopTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      endTime = null;
      toggleButtons(false);

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

  function startBreakTimer() {
    console.log("Startar paustimern");
  
    const breakMinutes: number = 1;
    breakEndTime = moment().add(breakMinutes, 'minutes');
  
    breakTimerInterval = setInterval(() => {
      updateBreakTimer();
  
      const now = moment();
      const duration = moment.duration(breakEndTime!.diff(now));
      const minutes = Math.floor(duration.asMinutes());
      const seconds = Math.floor(duration.seconds());
  
      if (minutes <= 0 && seconds <= 0) {
        stopBreakTimer();
        startTimer(); // Start the regular timer again after the break
      }
    }, 1000);
    stopTimer();
    updateBreakTimer();
    toggleButtons(true);
  }

  function stopBreakTimer() {
    if (breakTimerInterval) {
      clearInterval(breakTimerInterval);
      breakTimerInterval = null;
      breakEndTime = null;
      toggleButtons(false);
    }
  }

  function updateBreakTimer() {
    if (breakEndTime) {
    const breakDuration = moment.duration(breakEndTime.diff(moment()));
    const breakMinutes = Math.floor(breakDuration.asMinutes());
    const breakSeconds = Math.floor(breakDuration.seconds());
    timerBreak.innerText = `${breakMinutes.toString().padStart(2, '0')}:${breakSeconds
      .toString()
      .padStart(2, '0')}`;
  }
  }


  function toggleButtons(running: boolean) {
    startButton.disabled = running;
    stopButton.disabled = !running;
    timerInput.disabled = running;
    reduceTimeButton.disabled = running;
    addTimeButton.disabled = running;

  };

  function adjustTime(delta: number) {
    const currentValue = parseInt(timerInput.value, 10);
    if (!isNaN(currentValue)) {
      timerInput.value = Math.max(1, currentValue + delta).toString();
    }
  }

