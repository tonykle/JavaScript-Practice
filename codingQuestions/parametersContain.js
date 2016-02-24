// Write a simple function to tell whether 2 is passed as parameter or not

function checkParams() {
  for (var x of arguments) {
    if (x === 2) {
      console.log('2 IS IN HERE');
      return;
    }
  }
  console.log('2 is not in here');
}

checkParams(1, 2, 2, 4); // should log that 2 exists as a parameter
checkParams(5, 6, 4); // should log that 2 does not exist as a parameter
