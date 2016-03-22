function User(emailAddress) {
  this.email = emailAddress;
  var password; // private field
}

User.prototype.getEmail = function() {
  console.log(this.email);
};

User.prototype.setPassword = function(pass) {
  password = pass;
  return this; // for chaining
};

User.prototype.authenticate = function(pass) {
  return pass === password;
};

var myUser = new User('tony@tony.com');
var userEmail = myUser.setPassword('myPass').getEmail();

/*
// authenticates email
if (myUser.authenticate('myPass')) {
  console.log("success");
}
*/
