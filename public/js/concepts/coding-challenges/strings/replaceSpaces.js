'use strict';

/**
* replaces all spaces in a string with the characters '%20' and returns the new string
*
* @param {String} data
* @return {String}
*/
function replaceSpaces(data) {
  let spacesReplaced = data;
  while (spacesReplaced.indexOf(' ') > -1) {
    spacesReplaced = spacesReplaced.replace(' ', '%20');
  }
  return spacesReplaced;
}
