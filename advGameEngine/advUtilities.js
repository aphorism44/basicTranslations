"use strict";


class Location {
  constructor(jsonObj) {
    this.name = jsonObj.name;
    this.row = jsonObj.row;
    this.col = jsonObj.col;
    this.exits = [];
    for (var i = 0; i < jsonObj.exits.length; i++) {
      var newExit = new Exit(jsonObj.exits[i]);
      this.exits.push(newExit);
    }
  }

}

class Exit {
  constructor(jsonString) {
    if (jsonString.includes("/")) {
      this.gridDirection = jsonString.split("/")[0];
      this.displayDirection = jsonString.split("/")[1];
    } else {
      this.gridDirection = jsonString;
      this.displayDirection = jsonString;
    }
  }
}

class Item {
  constructor(jsonObj) {
    this.name = jsonObj.name;
    this.startLocation = jsonObj.location;
    this.currentLocation = this.startLocation;
    this.type = jsonObj.type;
    this.flag = jsonObj.flag;
  }

  changeLocation(loc) {
    this.currentLocation = loc;
  }

  toggleFlag() {
    this.flag = this.flag === 0 ? this.flag = 1 : this.flag = 0;
  }

}

export { Location, Exit, Item };
