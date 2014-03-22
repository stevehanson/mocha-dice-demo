'use strict';

var Dice = function() {
  this.lastRoll = null;
  this.numRolls = 0;
}

function randomNum(low, high) {
  return Math.floor(Math.random() * high) + low;
}


Dice.prototype.roll = function() {
  this.lastRoll = randomNum(1,6);
  this.numRolls++;
  return this.lastRoll;
}

module.exports = Dice;