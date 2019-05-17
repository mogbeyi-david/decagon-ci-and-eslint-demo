const add = require('./../../src/add');


describe('ADD', () => {
  it('should add two numbers', () => {
    expect(add(10, 10)).toEqual(20);
  })
});