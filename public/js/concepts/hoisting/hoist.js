var myvar = 'global value';

(function() {
  myvar = 'local value';
  console.log(myvar);
  var myvar; // hoisted to the top of the function
})();
