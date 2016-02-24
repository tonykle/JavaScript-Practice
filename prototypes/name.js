// function to declare name of Tony
function name(nameInput) {
  this.name = nameInput;
}

// prototype to create function that prints the name
name.prototype.sayName = function() {
  console.log(this.name);
}

var tonyInstance = new name("Tony"); // create a new instance of Tony object
tonyInstance.sayName(); // calls the prototype function "sayName" of the instance
