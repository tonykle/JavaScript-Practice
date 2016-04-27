// TASK: fix so that user.Showdata accesses user's date field, and not global

// This data variable is a global variable​
var data = [{name:"Samantha", age:12},{name:"Alexis", age:14}];

var user = {
  data :[{name: "T. Woods", age:37},{name:"P. Mickelson", age:43}],
  showData:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1​
    // This line is adding a random person from the data array to the text field​
    var d = this.data;
    console.log(d[randomNum].name + " " + d[randomNum].age);
  }
}

// Assign the user.showData to a variable​
var showUserData = user.showData;

// When we execute the showUserData function, the values printed to the console are from the global data array, not from the data array in the user object​
showUserData(); // Samantha 12 (from the global data array)​