
function callEncap() {
  var person = {
    name : 'Tony',
    weight : 155
  }

  var sayStats = function(numb) {
    console.log('Name is : ' + this.name + ' / Weight is : ' + this.weight); // should log 'Tony' and 155
    console.log('Numb : ' + numb); // logs 1
  }

  // call runs the function sayStats in the context of the first argument, and each additional parameter
  // is passed directly into the sayStats function
  sayStats.call(person, 1);
}
callEncap();
