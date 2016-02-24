'use strict';

var book = {
  numbOfPages : 199,
  color : 'red',
  name : 'Harry Potter'
}

function printContents() {
  console.log('Pages info: ' + this.numbOfPages);
  console.log('Color info: ' + this.color);
  console.log('Name info: ' + this.name);

  console.log(arguments);
}

// first argument: required (what you want the function to be in the context of)
// second argument: optional, array-like object used to pass in parameters
var data = ['hi', 'my', 'name', 'is', 'Tony'];
printContents.apply(book, data);
