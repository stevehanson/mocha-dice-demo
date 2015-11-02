'use strict';

var Die = function() {
  this.lastRoll = null;
  this.numRolls = 0;
}

function randomNum(low, high) {
  return Math.floor(Math.random() * high) + low;
}


Die.prototype.roll = function() {
  this.lastRoll = randomNum(1,6);
  this.numRolls++;
  return this.lastRoll;
}

module.exports = Die;