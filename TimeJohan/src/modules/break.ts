import moment from "moment";
import {startTimer, stopTimer} from './counter';

const timerBreak = document.getElementById('timer-display-break') as HTMLDivElement;

let breakTimerInterval: number | null = null;
let breakEndTime: moment.Moment | null = null;


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
  }

  function stopBreakTimer() {
    if (breakTimerInterval) {
      clearInterval(breakTimerInterval);
      breakTimerInterval = null;
      breakEndTime = null;
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

  export { startBreakTimer, stopBreakTimer, updateBreakTimer}