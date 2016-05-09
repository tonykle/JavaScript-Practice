'use strict';

var person = {
  firstName: "Penelope",
  lastName: "Barrymore",
  fullName: function () {
    console.log(this.firstName + " " + this.lastName); // ouputs the same value as below
    var self = this; // save the current context of 'this'

    (function() {
      console.log("person from the inner function: " + this.firstName); // this.firstName is undefined because it refers to the current context of 'this'
      console.log("first name from outer function: " + self.firstName); // we access the firstName property of the outer function by referencing the variable created earlier
    })();
  }
};

person.fullName();
