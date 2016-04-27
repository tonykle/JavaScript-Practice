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
