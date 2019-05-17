const subtract = require('./../../src/subtract');


describe('subtract', () => {
  it('should subtract two numbers', () => {
    expect(subtract(10, 10)).toEqual(0);
  })
});