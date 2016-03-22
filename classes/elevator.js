
'use strict';

class Elevator {
  constructor(floors, currentFloor, floorList, emergencyStatus) {
    this.floors = floors;
    this.currentFloor = currentFloor;
    this.floorList = floorList; // list of floors the elevator must visit
    this.emergencyStatus = emergencyStatus; // true if emergency is occuring, false otherwise
  }

  /**
  * adds floor number to list
  *
  * @param {Integer} floorNumber
  */
  addToQueue(floorNumber) {
    // check to see if button for button had already been pressed
    if ((this.floorList.indexOf(floorNumber) === -1) && (floorNumber <= this.floors)) {
      this.floorList.push(floorNumber);
    }
  }

  /**
  * the elevator to the input floor
  *
  * @param {Integer} floorNumber
  */
  goToFloor(floorNumber) {
    if (floorNumber <= this.floors) {
      this.currentFloor = floorNumber;
      var index = this.floorList.indexOf(this.currentFloor);
      this.floorList.splice(index, 1);
    }
  }

  /**
  * returns current list of floors queued
  */
  queue() {
    return this.floorList;
  }

  /**
  * emergency button was pressed
  */
  emergencyButton() {
    this.floorList = [];
    this.emergencyStatus = true;
    this.currentFloor = 1;
  }

  /**
  * emergency is no longer occuring
  */
  emergencyOff() {
    this.emergencyStatus = false;
  }
}

var elevatorCurr = new Elevator(40, 0, [], false); // elevator with 40 floors
elevatorCurr.addToQueue(4);
elevatorCurr.addToQueue(9);
elevatorCurr.addToQueue(41);
elevatorCurr.addToQueue(5);
elevatorCurr.addToQueue(8);
console.log(elevatorCurr.queue());
elevatorCurr.goToFloor(4);
console.log(elevatorCurr.queue());
elevatorCurr.emergencyButton();
console.log(elevatorCurr.queue());
