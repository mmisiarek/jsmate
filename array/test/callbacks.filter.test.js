/* global describe,it */
const assert = require('assert');
const filter = require('../callbacks').filter;
describe('Array filter callback', function(){
  it('should be able to leave only unique values', function(){
    const input1 = [1,2,3,4,5,6];
    const input2 = [2,2,4,4,6,6];
    const input3 = [];
    const input4 = ['1', 1, 'test', 'test'];

    assert.deepEqual(input1.filter(filter.unique), [1,2,3,4,5,6]);
    assert.deepEqual(input2.filter(filter.unique), [2,4,6]);
    assert.deepEqual(input3.filter(filter.unique), []);
    assert.deepEqual(input4.filter(filter.unique), ['1',1, 'test']);
  });
});
