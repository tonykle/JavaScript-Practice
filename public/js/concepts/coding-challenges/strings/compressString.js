'use strict';

/**
* Takes a string as input and returns it in compressed form
* If the compressed form is longer, the function should just retun the original string
* Ex: aabcccccaaa => a2b1c5a3
*
* @param {String} data
* @return {String}
*/
function compressor(data) {
  if (data.length <= 0) {
    return data;
  }
  let compressedString = ''; // eventual compressed string
  let counter = 1;
  let lastChar = data.charAt(0);
  compressedString += lastChar;

  for (let i = 1; i < data.length; i++) {
    let currChar = data.charAt(i);
    if (currChar === lastChar) {
      counter++;
    } else { // different character
      compressedString = compressedString + counter + currChar; // add to the final string
      lastChar = currChar;
      counter = 1; // reset the counter for the new character
    }
  }
  
  compressedString += counter;
  if (compressedString.length > data.length) {
    return data;
  } else {
    return compressedString;
  }
}
