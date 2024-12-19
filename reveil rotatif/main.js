// Acces aux éléments html
let sonner = document.getElementById("sonner");
let stopper = document.getElementById("stopper");
let wakeup = document.getElementById("réveil");
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// cercle externe du reveil
context.beginPath();
context.lineWidth = "5";
context.fillStyle = "black";
context.arc(200, 200, 110, 0, 2 * Math.PI);
context.fill();

// cercle blanc
context.beginPath();
context.lineWidth = "5";
context.fillStyle = "white";
context.arc(200, 200, 90, 0, 2 * Math.PI);
context.fill();

//indicateur 12 
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = "black";
context.moveTo(200, 110);
context.lineTo(200, 120);
context.stroke();
//indicateur 9
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = "black";
context.moveTo(110, 200);
context.lineTo(120, 200);
context.stroke();
//indicateur 6
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = "black";
context.moveTo(200, 280);
context.lineTo(200, 290);
context.stroke();
//indicateur 3
context.beginPath();
context.lineWidth = "4";
context.strokeStyle = "black";
context.moveTo(280, 200);
context.lineTo(290, 200);
context.stroke();

// pied gauche
context.beginPath();
context.lineWidth = "10";
context.strokeStyle = "black";
context.moveTo(128, 283);
context.lineTo(115, 302);
context.stroke();

//pied droit
context.beginPath();
context.lineWidth = "10";
context.strokeStyle = "black";
context.moveTo(271, 283);
context.lineTo(285, 302);
context.stroke();

//barette bouton stop
context.beginPath();
context.lineWidth = "10";
context.strokeStyle = "black";
context.moveTo(200, 90);
context.lineTo(200, 75);
context.stroke();

// bouton stop
context.beginPath();
context.fillStyle = "black";
context.fillRect(187, 70, 25, 10);


//les oreilles du reveil resp gauche et droite
context.beginPath();
context.lineWidth = "10";
context.strokeStyle = "black";
context.moveTo(134, 112);
context.lineTo(129, 104);
context.stroke();

context.beginPath();
context.lineWidth = "10";
context.strokeStyle = "black";
context.moveTo(270, 115);
context.lineTo(275, 108);
context.stroke();

context.beginPath();
context.lineWidth = "10";
context.rotate(-Math.PI / 5);
context.fillStyle = "black";
context.arc(42, 165, 45, Math.PI, 0);
context.fill();

context.beginPath();
context.lineWidth = "10";
context.rotate(Math.PI / 2.5);
context.fillStyle = "black";
context.arc(285, -70, 45, Math.PI, 0);
context.fill();

// fonction sonner et stop
sonner.addEventListener("click", go);
function go() {
  setTimeout(letgo, 500);
  function letgo() {
    let jouer = document.getElementById("jouer");
    document.getElementById("container").classList.add("declencheur");
  }
  setTimeout(jouer.play(), 0);
}

stopper.addEventListener("click", arret);
function arret() {
  document.getElementById("container").classList.remove("declencheur");
  jouer.pause();
}

// fonction alarm 1
wakeup.addEventListener("click", up);
function up(){
    setAlarm(wake, 500);
    function wake(){
      let wake = document.getElementById("Léve toi !!! ");
      DocumentFragment.getElementById("container").classList.add("declencheur")
    }
    setAlarm(jouer.play(),0);
};

// fonction indique l'heure
function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12; // convertie en format 12h
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const hourHand = document.getElementById('hourHand');
  const minuteHand = document.getElementById('minuteHand');
  const secondHand = document.getElementById('secondHand');

  const hourRotation = 360 / 12 * hours + 360 / 12 * (minutes / 60);
  const minuteRotation = 360 / 60 * minutes + 360 / 60 * (seconds / 60);
  const secondRotation = 360 / 60 * seconds;

  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

setInterval(updateClock, 1000); // Mise à jour de l'horloge chaque seconde
updateClock(); // Appel initial pour éviter un délai d'une seconde avant la première mise à jour


//fonction alarme 2
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