var name = "lmao";
function test(name2) {
  this.name = name2;
  this.printName = function() {
    console.log(this.name); // should print 'Tony'
  }
}

var k = new test("Tony");
k.printName();
