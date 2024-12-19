function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;

    document.getElementById('time').textContent = timeString;
}

function setAlarm() {
    const alarmTime = prompt("À quelle heure dois je sonner? (HH:mm):");
    const [alarmHour, alarmMinute] = alarmTime.split(':');

    setInterval(() => {
        const now = new Date();
        const currentHour = now.getHours().toString().padStart(2, '0');
        const currentMinute = now.getMinutes().toString().padStart(2, '0');

        if (currentHour == alarmHour && currentMinute == alarmMinute) {
            document.getElementById('alarmSound').play();
            alert("Lève toi!!!!");
        }
    }, 1000);
}

setInterval(updateClock, 1000);
updateClock();