'use strict';

var expect = require('chai').expect,
    Dice = require('../app/StandardDice.js');

describe('Dice', function() {

  var dice;
  var roll;

  beforeEach(function() {
    dice = new Dice();
    roll = dice.roll();
  })

  describe('num die', function() {
    it('should default to 6', function() {
      expect(dice.numDie).to.equal(6)
    })

    it('can be set via constructor', function() {
      expect(new Dice(12).numDie).to.be.equal(12)
    })
  })

  describe('roll', function() {

    it('should have response for each die', function() {
      expect(roll.length).to.equal(6)

      roll = new Dice(20).roll();
      expect(roll.length).to.equal(20)
    })

    it('should return numbers', function() {
      expect(roll[0]).to.be.a('number')
    })

    it('should return values of each of the die', function() {
      for(var i = 0; i<roll.length; i++) {
        expect(roll[i]).to.equal(dice.dice[i].lastRoll)
      }
    })

  })

});