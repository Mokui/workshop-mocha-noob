var expect = require('chai').expect;
const getPrices = require('../src/shop-tools').getPrices;

describe('GIVEN a list of prices for each fruit', function() {
  var fruits = [ 'tomato', 'salad', 'cucumber', 'potato', 'banana', 'apple'];
  it('WHEN the client request the list THEN 6 items are returned', function() {
    expect(fruits.length).to.equal(6);
  });
  it('WHEN the client request the list', function() {
    expect(getPrices()).to.eql({
      banana: 1,
      potato: 2,
      tomato: 3,
      cucumber: 4,
      salad: 5,
      apple: 6
    });
  });
});
