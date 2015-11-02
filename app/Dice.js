'use strict';

var Dice = function(diceList) {
  this.numDie = diceList.length;
  this.dice = diceList;
  this.numRolls = 0;
}

Dice.prototype.roll = function() {
  var res = [];
  this.dice.forEach(function(die) {
    res.push(die.roll());
  });
  this.numRolls++;
  this.lastRoll = res;
  return res;
}

module.exports = Dice;