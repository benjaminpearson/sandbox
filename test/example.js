/**
 * Example test script
 */
var example = require('../lib/example');
var should = require('should');

describe('Example', function() {
	describe('#sum', function() {
		it('should calculate the sum of two values', function(done) {
			example.sum(2, 2).should.eql(4);
			done();
		});
		it('should calculate the multiplication of two values', function(done) {
			example.multiply(4, 2).should.eql(8);
			done();
		});
	});
});
