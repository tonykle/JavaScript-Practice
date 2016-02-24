var User = function(currEmail) {
  this.email = currEmail;
  var password; // private field
  this.getEmail = function() {
    console.log(this.email);
    return this;
  };
  this.setPassword = function(e) {
    password = e;
    return this;
  };
  this.authenticate = function(pass) {
    return pass == password;
  };
}

var newUser = new User("tonyl3@uw.edu");
var userEmail = newUser.setPassword("pass").getEmail(); // chaining
console.log(newUser.authenticate("pass"));
