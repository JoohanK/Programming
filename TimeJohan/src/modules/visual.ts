import moment from "moment";

const visualTimerElement: HTMLElement | null = document.getElementById('visual-timer');

let timerEndTime: moment.Moment | null = null;
let timerInterval: number | null = null;

function updateVisualTimer() {
  if (timerEndTime) {
    const now = moment();
    const duration = moment.duration(timerEndTime.diff(now));
    const minutes = Math.ceil(Math.max(0, duration.asMinutes()));
    const seconds = Math.floor(duration.seconds());
	
    const visualTimer = document.querySelector('#visual-timer') as HTMLElement;
    visualTimer.style.animation = `expandHeight ${minutes * 60}s linear`;


  }
}

function startVisualTimer(endTime: moment.Moment) {
  timerEndTime = endTime;

  // Uppdatera klockan varje sekund
  timerInterval = setInterval(updateVisualTimer, 1000);
}

function stopVisualTimer() {
  // Stoppa uppdateringen av klockan
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    timerEndTime = null;
  }
}

// function toggleAnalogTimer() {
//   // Invertera värdet på variabeln
//   analogTimerVisible = !analogTimerVisible;

//   // Sätt display-egenskapen baserat på variabelns värde
//   if (analogTimerSection) {
//       analogTimerSection.style.display = "flex";
//   }}




setInterval(updateVisualTimer, 1000);

export { startVisualTimer, stopVisualTimer, updateVisualTimer};