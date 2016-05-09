// How could you make this work [1,2,3,4,5].duplicator(); // [1,2,3,4,5,1,2,3,4,5] ?

Array.prototype.duplicator = function() {
  return this.concat(this);
}

var duplicated = [1,2,3,4,5].duplicator();
