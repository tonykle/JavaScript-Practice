/* jshint node: true */
/* jshint esversion: 6 */
'use strict';

class House {
  constructor(color, rooms, people, location) {
    this.color = color;
    this.rooms = rooms;
    this.people = people;
    this.location = location;
  }

  computeRatio() {
    let ratio = this.rooms / this.people;
    console.log(`The ratio of rooms to people for this household is ${ratio}.`);
  }

  getLocation() {
    console.log(`The location of this household is in ${this.location}.`);
  }
}

var myHouse = new House('yellow', 3, 4, 'Redmond');
myHouse.computeRatio();
myHouse.getLocation();
console.log(myHouse.color);
