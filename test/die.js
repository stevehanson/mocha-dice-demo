'use strict';

var expect = require('expect.js'),
    Die = require('../app/Die.js');

describe('Die', function() {

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

    it('should be fairly distributed between 1 and 6', function() {
      var numRuns = 1000000; // 1 million
      var sum = 0;
      var delta = 0.01;
      for(var i = 0; i < numRuns; i++) {
        sum += die.roll()
      }
      var ave = sum/numRuns;

      expect(ave).to.be.within(3.5 - delta, 3.5 + delta)
    })
  })

  describe('last roll', function() {
    it('should be value of last roll', function() {
      expect(die.lastRoll).to.equal(roll)
    })
  })

  describe('num rolls', function() {
    it('should start at 0', function() {
      expect(new Die().numRolls).to.be(0)
    })

    it('should increment after rolling', function() {
      expect(die.numRolls).to.be(1)
    })

  })

});