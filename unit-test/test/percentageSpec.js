var Percentage = require('../lib/percentage');
var assert = require('assert');

describe("Percentage", function() {

	describe("#evolution", function() {

		// Before all test, environnenent set up
		before(function() {
			//percentage = null;	
		});

		// Must be the difference between the first and the second number
		it("should give an evolution", function() {
			assert.equal(Percentage.evolution(100, 200), 100);
			assert.equal(Percentage.evolution(100, 150), 50);
			assert.equal(Percentage.evolution(100, 50), -50);
		});

		// Handle division by 0
		it("should handle 0 evolution", function() {
			assert.equal(Percentage.evolution(0, 100), Infinity);
		}); 

		// Have to be rounded (.00)
		it("should round values", function() {
			assert.equal(Percentage.evolution(30, 100), 233.33);
		}); 

	});

	describe("#wait", function() {

		it("should exist", function() {
			assert.notEqual(Percentage.wait, undefined);
		});

		// Async test
		it("should wait", function(done) {
			Percentage.wait(50, function(test) {
				assert.equal(test, 18);
				done(); // Test is finished
			});
		});

	});

})