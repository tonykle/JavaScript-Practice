function names(name) {
  var uniqueID = 100;
  for (var i = 0; i < name.length; i++) {
    name[i]["id"] = function(x) {
      return uniqueID + x;
    }(i);
  }
  return name;
}

var nameList = [{ name : "Tony", id : 0}, { name : "Anthony", id : 0}, { name : "Antwon", id : 0}];
var nameInstance = names(nameList);
console.log(nameInstance);
