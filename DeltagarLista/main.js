
const url = "https://majazocom.github.io/Data/attendees.json";
const participantsContainer = document.getElementById("participants");

function fetchEventParticipants() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((participant) => {
                if (participant.attending) {
                    const participantDiv = document.createElement("div");
                    participantDiv.classList.add("participant");
                    participantDiv.innerHTML = `
                        <h2>${participant.name}</h2>
                        <p>Allergies: ${participant.allergies.join(", ")}</p>`
                    participantsContainer.appendChild(participantDiv);
                }
            });

            logAllParticipants(data);
        })
        .catch((error) => {
            console.error("Ett fel inträffade vid hämtning av deltagare:", error);
        });
}

fetchEventParticipants();

function logAllParticipants(participants) {
    console.log("Alla deltagare:");
    participants.forEach((participant) => {
        console.log(`Namn: ${participant.name}`);
        console.log(`Allergier: ${participant.allergies.join(", ")}`);
        console.log("------------------------");
        console.log(participant)
    });
}
