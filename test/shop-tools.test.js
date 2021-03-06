var expect = require('chai').expect;
const getPrices = require('../src/shop-tools').getPrices;
const countArticles = require('../src/shop-tools').countArticles;
const countProducts = require('../src/shop-tools').countProducts;

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

  it('WHEN the client request an array of fruits THEN 10 items are returned', function() {
    const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
    expect(countArticles(products)).to.equal(10);
  });

  it('WHEN the client request an array of fruits THEN 4 items are returned ', function() {
    const products = [ 'tomato', 'cucumber', 'tomato', 'salad', 'potato', 'cucumber', 'potato', 'potato', 'tomato', 'potato' ];
    expect(countProducts(products)).to.equal(4);
  });
});
