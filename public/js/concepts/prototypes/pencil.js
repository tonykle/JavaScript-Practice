var Pencil = function(colorPencil, length) {
  this.color = colorPencil;
  this.inches = length;
}

var Dixon = function(color) {
  this.eraserType = 'rubber';
  this.color = color;
}
Pencil.prototype.quality = 'good';
Pencil.prototype.dimensions = function() {
  console.log(this.inches + ' ' + this.color);
}

Dixon.prototype = new Pencil('yellow', 12);
var dixonSingle = new Dixon('red');
dixonSingle.dimensions();

/*
The above line of code will call the prototype function inherited from the Pencil object,
the instance of Dixon we created is instantiated with a color property (red). However, the prototype
function is logging the inches property, which is not a property that Dixon has. So what happens is
a search that goes up the prototype chain and it looks for an inches property and value from where
it is defined
*/

Pencil.prototype.quality = 13;
console.log(Dixon.prototype.quality);
console.log(dixonSingle.quality);
Dixon.prototype.issueNumber = 13;
var singlePencil = new Pencil('green', 20);
console.log(singlePencil.issueNumber); // returns 'undefined' b/c we can't go backwards in the prototype chain
console.log(dixonSingle.issueNumber);
