"use strict";

var slider = document.getElementById("speed");
var sliderOutput = document.getElementById("speedOutput");
sliderOutput.innerHTML = slider.value / 1000;

slider.oninput = function() {
  sliderOutput.innerHTML = this.value / 1000;
}

var yrsNeeded = getRandomIntInclusive(25, 124);
var instructions = "<h1>Trip into the Future</h1></br>";
instructions += "(translated from from <em>Computer Spacegames</em> in BASIC, 1982)</br>";
instructions += "</br>";
instructions += "You wish to return " + yrsNeeded + " years in the future.</br>";
instructions += "You can travel in speeds almost up to <strong>c</strong> (the speed of light).</br>";
document.getElementById("instructions").innerHTML = instructions;


function getSpeed() {
  var speed, distance, result = "";
  speed = document.getElementById("speed").value / 1000;
  distance = document.getElementById("distance").value;

  if (isNaN(distance) || distance < 1) {
    result = "That's not a valid distance.";
  } else {
    distance = Math.round(distance);
    var timeInsideShip = distance / speed;
    var timeOutsideShip = timeInsideShip / Math.sqrt(1 - (speed * speed));
    result = "You took " + Math.round(timeInsideShip) + " years to travel " + distance + " light years.</br>"
    result += "You arrived " + Math.round(timeOutsideShip) + " years in the future.</br>"
    if (timeInsideShip > 50)
      result += "You died on the way."
    else if (Math.abs(yrsNeeded - timeOutsideShip) <= 5.0)
      result += "You arrived close to your planned year! Congratulations!";
    else
      result += "You didn't arrive close enough to your planned year..."
  }

  document.getElementById("output").innerHTML = result;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
