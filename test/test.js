'use strict';

var expect = require('expect.js'),
    Die = require('../app/Die.js');

describe('Dice', function() {

  var die;
  var roll;

  beforeEach(function() {
    die = new Die();
    roll = die.roll();
  })

  describe('roll', function() {
    it('should be a number', function() {
      expect(roll).to.be.a('number');
    })

    it('should be between 1 and 6', function() {
      expect(roll).to.be.within(1,6)
    })
  })

  describe('last roll', function() {
    it('should be value of last roll', function() {
      expect(die.lastRoll).to.equal(roll)
    })
  })

  describe('num rolls', function() {
    it('should start at 0', function() {
      var die = new Die();
      expect(die.numRolls).to.be(0)
    })

    it('should increment after rolling', function() {
      expect(die.numRolls).to.be(1)
    })

  })

});