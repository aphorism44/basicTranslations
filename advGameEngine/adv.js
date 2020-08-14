"use strict";

import { Location, Exit, Item } from './advUtilities.js';

//setup game
var roomObjects = [], itemObjects = [], squareSide = 8;

var roomRow = 0, roomRowArray = [];
for (var i = 0; i < gameRooms.length; i++) {
  var newLoc = new Location(gameRooms[i]);
  roomRowArray[newLoc.col] = newLoc;
  if (newLoc.col === squareSide - 1) {
    roomObjects[roomRow] = roomRowArray;
    roomRow++;
    roomRowArray = [];
  }
}

for (var j = 0; j < gameItems.length; j++) {
  itemObjects.push(new Item(gameItems[j]));
}

//console.log(roomObjects[2][1]); //back of hallway
//console.log(roomObjects[7][0]); //twisted railings
//console.log(roomObjects[3][6]); //cellar

//simulate movement
var playing = true;
var currentRow = 0, currentCol = 0;

while (playing) {
  var currentRoom = roomObjects[currentRow][currentCol];
  showLocation(currentRoom);
  showExits(currentRoom);
  showRoomItems(currentRoom);
  break;
}

function showLocation(room) {
  document.getElementById("locationDesc").innerHTML = room.name;
}

function showExits(room) {
  var exitHTML = "";
  for (var i = 0; i < room.exits.length; i++)
    exitHTML += currentRoom.exits[i].displayDirection + "</br>";
  document.getElementById("exitDesc").innerHTML = exitHTML;
}

function showRoomItems(room) {
  var itemHTML = "";
  for (var j = 0; j < itemObjects.length; j++)
    if (itemObjects[j].currentLocation === room.name)
      itemHTML += itemObjects[j].name + "</br>";
  if (itemHTML.length == 0)
    itemHTML = "NOTHING</br>";
  document.getElementById("itemDesc").innerHTML = itemHTML;
}
