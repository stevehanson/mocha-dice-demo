'use strict';

var Die = require('./Die.js'),
    Dice = require('./Dice.js');

var StandardDice = function(numDie) {
  numDie = (typeof numDie === 'undefined') ? 6 : numDie;
  var dice = [];
  for(var i=0; i<numDie; i++) {
    dice.push(new Die());
  }
  Dice.call(this, dice);

}

StandardDice.prototype = Object.create( Dice.prototype );

module.exports = StandardDice;