
var mine = new Map();
mine.set(1, 'lmao');
mine.set(2, 'lol');
mine.set(3, 'haha');
console.log(mine);
if (mine.has(1)) {
  console.log('has one');
}
mine.delete(1);
if (!mine.has(1)) {
  console.log('removed one');
}
console.log(mine.get(2));

var mineIter = mine.keys();
console.log(mineIter.next().value);
console.log(mine.size);
mine.clear();
console.log(mine);
