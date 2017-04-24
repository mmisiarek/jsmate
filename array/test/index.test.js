/* global describe,it */
const assert = require('assert');
const utils = require('../index')
describe('Array utils functions', function(){
  it('should calculate cartesian product', function(){
    const cp = utils.cartesianProduct;
    const input1 = [[1,2],['a','b','c'],['g']];
    const input2 = [[6,7,8], []];
    const input3 = [[6,7,8], [], [9]];
    const input4 = [];
    const input5 = [[10,11,12]];

    assert.deepEqual(cp(input1), [
      [1,'a','g'], [1,'b','g'], [1,'c','g'],
      [2,'a','g'], [2,'b','g'], [2,'c','g']
    ]);

    assert.deepEqual(cp(input2), []);
    assert.deepEqual(cp(input3), []);
    assert.deepEqual(cp(input4), []);
    assert.deepEqual(cp(input5), []);

    });
});
