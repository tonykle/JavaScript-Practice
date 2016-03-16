'use strict';

// === My awesome car class ===
class Car {
  constructor(args) {
    this.args = args;
  }

  // returns value of class property
  get(prop) {
    return this.args[prop];
  }

  // sets property of class
  set(prop, val) {
    this.args[prop] = val;
  }

  // checks if property of class has a value
  has(prop) {
    return (this.args[prop] != null && this.args[prop] != undefined);
  }

  // sets property of class to null
  unset(prop) {
    this.args[prop] = null;
  }

  // prints KEY : VAL pairs of Object
  printDetails() {
    for (let i in this.args) {
      console.log(i + " = " + this.args[i]);
    }
  }
}

var Acura = new Car({brand : 'Acura', year : 1999, color : 'white'});
console.log(Acura.get('brand')); // should log Acura
Acura.set('wheels', 20);
console.log(Acura.get('wheels')); // should log 20

if (Acura.has('color')) {
  console.log('Acura has a set color'); // should log
}

Acura.unset('year');
console.log(Acura.year); // should be undefined
Acura.printDetails(); // should log: brand = Acura, year = null, color = white, wheels = 20
