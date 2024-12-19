// variables
var secHand = document.querySelector(".sec-hand");
var minsHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setDate() {
  var now = new Date();
  
  // Seconds
  var seconds = now.getSeconds();
  var secToDeg = ( ( seconds / 60 ) * 360 ) + 90;
  secHand.style.transform = "rotate(" + secToDeg + "deg)";
  
  // Minutes
  var mins = now.getMinutes();
  var minsToDeg = ( ( mins / 60 ) * 360 ) + ( (seconds / 60) * 6 ) + 90;
  minsHand.style.transform = "rotate(" + minsToDeg + "deg)";
  
  // Hours
  var hours = now.getHours();
  var hourToDeg = ( ( hours / 12 ) * 360) + ( ( mins / 60 ) * 30 ) + 90;
  hourHand.style.transform = "rotate(" + hourToDeg + "deg)";
}


setInterval(setDate, 1000);