"use strict";

import { Location, Exit, Item } from './advUtilities.js';


//setup games
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

/*
2. Print description of location and exits
3. Print message or additional info from player instruction
4. Ask player for next instruction
5. Check instructions against known list of words and verbs
6a. If instructions don't make sense, reprompt with error message and wait
   for another instruction
6b. If instruction makes sense, use appropriate function to take appropriate action
7. Use function to take action as instructed
8. Goto 2

*/

//console.log(roomObjects[2][1]); //back of hallway
//console.log(roomObjects[7][0]); //twisted railings
//console.log(roomObjects[3][6]); //cellar

//simulate movement
var playing = true;
var currentRow = 0, currentCol = 0;

while (playing) {
  var currentRoom = roomObjects[currentRow][currentCol];
  var currentRoomName = currentRoom.name;
  console.log("\n YOUR LOCATION:\n");
  console.log(currentRoomName + "\n");
  console.log("\nEXITS:\n");
  for (var i = 0; i < currentRoom.exits.length; i++)
    console.log(currentRoom.exits[i].displayDirection + "\n")
  for (var j = 0; j < itemObjects.length; j++) {
    var seeItems = false;
    if (itemObjects[j].currentLocation === currentRoom) {
      if (!seeItems)
        console.log("YOU SEE: \n");
      seeItems = true;
      console.log(itemObjects[j].name);
    }
  }
  console.log("?: ");
  break;
}
