// CURRY EXAMPLE
function animal(species) {
  return function gender(gType) {
    console.log('species : ' + species + ' / gender: ' + gType);
  }
}

var aInstance = animal('dogs'); // this returns the inner function with the outer parameter still available
var inn = aInstance('female'); // this calls the inner function which makes use of both the parameters 'species' and 'gType'
