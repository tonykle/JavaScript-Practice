'use strict';

class Car {
  constructor(color, year, wheels) {
    this.color = color,
    this.year = year,
    this.wheels = wheels
  }

  getInfo() {
    console.log(`Color: ${this.color}, and Year: ${this.year}`);
  }

  getColor() {
    console.log(`The color is: ${this.color}`)
  }
}

class Honda extends Car{
  constructor(color, year, model) {
    super(color, year),
    this.model = model
  }

  getMyColor() {
    super.getColor();
  }
}

var newCar = new Car('orange', 1999, 20);
var civic = new Honda('red', 1990, 'civic');

var newCarInfo = newCar.getInfo(); // calling getInfo() with default context
var civicUseCar = newCar.getInfo.bind(civic); // calling getInfo() with the context of the Honda instance (civic)
civicUseCar(); // uses Car's getInfo() function with the context of the Honda instance
