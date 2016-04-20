'use strict';

/**
* Given an analog clock w/ 2 hands, one for the hour and one for the minute, given the
* time of the day, what is the angle between the two hands
*
* @param {Array} time [hour, time]
* @return {Integer}
*/
function findAngle(time) {
  let hour = time[0];
  let minutes = time[1];
  minutes = (minutes > 30) ? (minutes - ((minutes - 30) * 2)) : minutes;
  let angleOne = (hour === 12) ? 0 : hour * 30;
  let angleTwo = minutes * 6;
  return Math.abs(angleOne - angleTwo);
}

var angOne = findAngle([9, 15]);
var angTwo = findAngle([12, 15]);
var angThree = findAngle([12, 30]);
var angFour = findAngle([12, 45]);
console.log(angOne); // should print 180
console.log(angTwo); // should print 90
console.log(angThree); // should print 180
console.log(angFour); // should print 90
