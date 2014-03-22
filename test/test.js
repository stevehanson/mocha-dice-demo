'use strict';

var expect = require('expect.js'),
    Dice = require('../app/Dice.js');

describe('Dice', function() {
  describe('roll', function() {
    it('should be a number', function() {
      var res = new Dice().roll();
      expect(res).to.be.a('string');
    })

    it('should be between 1 and 6', function() {
      var dice = new Dice();
      var res = dice.roll();
      expect(res).to.be.within(1,6)
    })
  })

  describe('last roll', function() {
    it('should be value of last roll', function() {
      var dice = new Dice();
      var res = dice.roll();
      expect(dice.lastRoll).to.equal(res)
    })
  })

  describe('num rolls', function() {
    it('should start at 0', function() {
      var dice = new Dice();
      expect(dice.numRolls).to.be(0)
    })

    it('should increment after rolling', function() {
      var dice = new Dice();
      dice.roll();
      expect(dice.numRolls).to.be(1)
    })

  })

});