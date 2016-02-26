function anagram(a, b) {
  return a.split('').sort().toString() === b.split('').sort().toString();
};

console.log(anagram('anagram', 'nagaram')); // should log true
console.log(anagram('awesome', 'awesomer')); // should log false
