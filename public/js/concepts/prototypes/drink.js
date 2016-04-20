// Prototype w/ inheritance

// Drink object / function
function Drink(size, caffContent) {
  this.oz = size;
  this.caffeine = caffContent;
}

// prototype function for Drink
Drink.prototype.printDetails = function() {
  console.log('Number of oz: ' + this.oz + ' / Caffeine content: ' + this.caffeine);
}

// Monster object / function
function Monster(taurineContent) {
  this.taurine = taurineContent;
  this.oz = 130;
  this.caffeine = 150;
}


Monster.prototype = new Drink(); // replacing Monster's prototype w/ Drink's
var monsterKind = new Monster(180); // creatiing instance of Monster object
monsterKind.printDetails(); // calling the Monster instance's prototype function


// idea: is that the Drink object has a prototype function that the Monster
// object inherits. the Monster object inherits the Drink object's prototype
// in full.
