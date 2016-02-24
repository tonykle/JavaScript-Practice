'use strict';

function orange() {
  this.color = 'orange';
  this.size = function() {
    return 4 * 4;
  };
}

var tangerine = new orange();
var color = tangerine.color;
console.log(color);


var apple = function() {
  var id = 13;
  this.color = 'red';
  this.size = function() {
    return 5 * 5;
  };
};

apple.prototype.getId = function() {
  console.log('This is the apple size: ' + this.size());
}

var fuji = new apple();
fuji.getId();
