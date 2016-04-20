// most basic example of closure
function showName(fName, lName) {
  function printName() {
    console.log(fName + " " + lName + " is my name!");
  }
  printName();
}

showName("Tony", "Le");
