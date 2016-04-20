'use strict';

function preloadName(fName) {
  var opener = 'My name is ';
  function sayName(lName) {
    console.log(opener + fName + " " + lName);
  }
  return sayName;
}

var myOwnName = preloadName("Tony"); // outter function has been called (preloadName)
myOwnName("Le");
