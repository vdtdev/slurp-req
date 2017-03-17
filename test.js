/**
 * Tests for slurp
 */

// dependencies
var slurprq = require('./main.js');
var expect = require('expect.js');

describe('slurp', function(){
    describe('using a basic requirment object', function(){
        it('should load dependencies using return value', function(){
            var reqs = {
                slurp: './main.js',
                expect: 'expect.js'
            };

            reqs = slurprq(reqs);

            expect(typeof reqs.slurp == 'function');
            expect((typeof reqs.expect == 'object' || typeof reqs.expect == 'function'));

        });

        it('should load dependencies not using return value', function(){
            var reqs = {
                slurp: './main.js',
                expect: 'expect.js'
            };

            slurprq(reqs);

            expect(typeof reqs.slurp == 'function');
            expect((typeof reqs.expect == 'object' || typeof reqs.expect == 'function'));

        });
    });
});