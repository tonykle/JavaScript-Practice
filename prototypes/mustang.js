var Mustang = function(nameOfCar) {
  this.name = nameOfCar;
  this.speed = function() {
    return 'This ' + this.name + ' can go ' + Mustang.prototype.speed + ' mph';
  }
}

Mustang.prototype.type = 'convertible';
Mustang.prototype.speed = 100;

var carInst = new Mustang('Mustang');
console.log(carInst.name);
console.log(carInst.speed());
console.log('This instance type is ' + carInst.type);

var Mustang2008 = {};

Mustang2008.prototype = new Mustang('Mustang GT 2008');
Mustang2008.prototype = {
  speed : function() {
    return 50 + Mustang.prototype.speed;
  }
};

console.log('Mustang 2008s top speed is: ' + Mustang2008.prototype.speed());
// console.log(Mustang2008.name + ' type is also ' + Mustang2008.type);
