//Variables
const days = document.querySelectorAll("#days");
const hours = document.querySelectorAll("#hours");
const minutes = document.querySelectorAll("#minutes");
const seconds = document.querySelectorAll("#seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`);

//Update Date
function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const daysUp = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursUp = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesUp = Math.floor(diff / 1000 / 60) % 60;
    const secondsUp = Math.floor(diff / 1000) % 60;


    document.getElementById("days").innerHTML = daysUp;
    document.getElementById("hours").innerHTML = hoursUp;
    document.getElementById("minutes").innerHTML = minutesUp;
    document.getElementById("seconds").innerHTML = secondsUp;

}

setInterval(updateCountdown, 1000);