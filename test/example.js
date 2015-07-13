/**
 * Example test script
 */
var example = require('../lib/example');
var should = require('should');

describe('Example', function() {
	describe('#calculations', function() {
		it('should calculate the sum of two values', function(done) {
			example.sum(2, 2).should.eql(4);
			done();
		});
		it('should calculate the multiplication of two values', function(done) {
			example.multiply(4, 2).should.eql(8);
			done();
		});
		it('should calculate the subtraction of two values', function(done) {
			example.subtract(4, 3).then(function(result) {
				result.should.eql(1);
				done();
			});
		});
		it('should calculate the subtraction of two values', function(done) {
			example.subtract(8, 4).then(function(result) {
				result.should.eql(4);
				done();
			});
		});
		it('should calculate the subtraction of two values', function(done) {
			example.subtract(8, 2).then(function(result) {
				result.should.eql(6);
				done();
			});
		});
		it('should have ValueTooHigh error when subtracting', function(done) {
			example.subtract(11, 3)
				.then(function(result) {
					should.not.exist(result);
					done();
				})
				.catch(function(err) {
					should.exist(err);
					err.message.should.equal('ValueTooHigh');
					done();
				});
		});
		it('should have ValueTooLarge error when subtracting', function(done) {
			example.subtract(-5, 3)
				.then(function(result) {
					should.not.exist(result);
					done();
				})
				.catch(function(err) {
					should.exist(err);
					err.message.should.equal('ValueTooLow');
					done();
				});
		});
	});
});
