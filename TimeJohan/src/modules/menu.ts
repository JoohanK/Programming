const setTimerSection: HTMLElement | any = document.querySelector('.set-timer');
// let setTimerVisible: boolean = false;
const visualTimerSection: HTMLElement | any = document.getElementById('visual-timer');
// let visualTimerVisible: boolean = false;
const digitalTimerSection: HTMLElement | any = document.getElementById('digital-timer');
// let digitalTimerVisible: boolean = false;
const analogTimerSection: HTMLElement | any = document.getElementById('analogTimerSection');
// let analogTimerVisible: boolean = false;
let menuHidden: HTMLDivElement | any = document.querySelector('.menu-hidden');
const dropdownMenu: HTMLDivElement | any = document.querySelector('.dropdown-menu');
const dropdownButton: HTMLDivElement | any = document.querySelector('.dropdown-button');
const abortButton: HTMLButtonElement | any = document.querySelector('.stop-button');





function timerMenu(){
	menuHidden.classList.toggle('show');
	dropdownMenu.style.display = 'flex';
	setTimerSection.style.display = 'none';
	digitalTimerSection.style.display = "none";
	analogTimerSection.style.display = "none";
	visualTimerSection.style.display = "none";
	
};

function showSetTimer(){
	
	// setTimerVisible = !setTimerVisible;
	
	if(setTimerSection){
		setTimerSection.style.display = 'block';
		digitalTimerSection.style.display = "none";
		analogTimerSection.style.display = "none";
		visualTimerSection.style.display = "none";
		dropdownMenu.style.display = 'none';

		setTimerSection.prepend(dropdownButton);	
		menuHidden.classList.toggle('show');
		
	}};
	
	
	function showDigitalTimer() {
		// Invertera värdet på variabeln
		// digitalTimerVisible = !digitalTimerVisible;
		
		// Sätt display-egenskapen baserat på variabelns värde
		if (digitalTimerSection) {
			digitalTimerSection.style.display = "flex";
			analogTimerSection.style.display = "none";
			visualTimerSection.style.display = "none";
			setTimerSection.style.display = 'none';
			dropdownMenu.style.display = 'none';

			digitalTimerSection.prepend(dropdownButton);	
			digitalTimerSection.append(abortButton);		
			menuHidden.classList.toggle('show');


	}
}

function showVisualTimer() {
	// Invertera värdet på variabeln
		// visualTimerVisible = !visualTimerVisible;
		 
		// Sätt display-egenskapen baserat på variabelns värde
		if (visualTimerSection) {
			visualTimerSection.style.display = "flex";
			analogTimerSection.style.display = "none";
			digitalTimerSection.style.display = "none";
			setTimerSection.style.display = 'none';
			dropdownMenu.style.display = 'none';

			visualTimerSection.prepend(dropdownButton);	
			visualTimerSection.append(abortButton);		
			menuHidden.classList.toggle('show');



		}}

	function toggleAnalogTimer() {
		// Invertera värdet på variabeln
		// analogTimerVisible = !analogTimerVisible;
		 
		// Sätt display-egenskapen baserat på variabelns värde
		if (analogTimerSection) {
			analogTimerSection.style.display = "flex";
			digitalTimerSection.style.display = "none"
			visualTimerSection.style.display = "none";
			setTimerSection.style.display = 'none';
			dropdownMenu.style.display = 'none';
			analogTimerSection.append(abortButton);		
			analogTimerSection.prepend(dropdownButton);	
			menuHidden.classList.toggle('show');

		}}
	

	
	
export {timerMenu, toggleAnalogTimer, showDigitalTimer, showVisualTimer, showSetTimer};