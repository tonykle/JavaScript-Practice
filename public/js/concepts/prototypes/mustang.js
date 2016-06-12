var Mustang = function(nameOfCar) {
  this.name = nameOfCar;
  this.speed = function() {
    return 'This ' + this.name + ' can go ' + Mustang.prototype.speed + ' mph';
  }
}

Mustang.prototype.type = 'convertible';
Mustang.prototype.speed = 100;

var carInst = new Mustang('Mustang');
console.log(carInst.name); // Mustang
console.log(carInst.speed()); // This Mustang can go 100 mph
console.log('This instance type is ' + carInst.type); // This instance type is convertible

var Mustang2008 = {};

Mustang2008.prototype = new Mustang('Mustang GT 2008');
Mustang2008.prototype = {
  speed : function() {
    return 50 + Mustang.prototype.speed;
  }
};

console.log('Mustang 2008s top speed is: ' + Mustang2008.prototype.speed());
// Mustang 2008s top speed is: 150
