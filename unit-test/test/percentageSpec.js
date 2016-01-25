var Percentage = require('../lib/percentage');

// Choose only 1 between each
require('chai').should();
var assert = require('chai').assert;
var expect = require('chai').expect;

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

			// Test avec chai et should
			Percentage.evolution(100, 200).should.be.equal(100);
			
			// Test avec chai et expect
			expect(Percentage.evolution(100, 200)).be.equal(100);
			expect(Percentage.evolution(100, 150)).be.equal(50);
			expect(Percentage.evolution(100, 50)).be.equal(-50);
		});

		// Handle division by 0
		it("should handle 0 evolution", function() {
			assert.equal(Percentage.evolution(0, 100), Infinity);
			// Test avec chai et expect
			expect(Percentage.evolution(0, 100)).to.be.equal(Infinity);
		}); 

		// Have to be rounded (.00)
		it("should round values", function() {
			assert.equal(Percentage.evolution(30, 100), 233.33);
		}); 

	});

	describe("#wait", function() {

		it("should exist", function() {
			assert.notEqual(Percentage.wait, undefined);
			// Test avec chai et expect
			expect(Percentage.wait).to.be.a('function');
			// ou
			expect(Percentage.wait).a('function');
		});

		// Async test
		it("should wait", function(done) {
			Percentage.wait(50, function(test) {
				assert.equal(test, 18);
				// Test avec chai et expect
				expect(test).to.equal(18);

				done(); // Test is finished
			});
		});

	});

})