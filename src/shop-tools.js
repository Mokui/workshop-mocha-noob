exports.getPrices = () => {
  return {banana: 1, potato: 2, tomato: 3, cucumber: 4, salad: 5, apple: 6};
}

exports.countArticles = (array) => {
  return array.length;
}

exports.countProducts = (array) => {
  var tab = [];
  array.forEach((element) => {
    if(!(tab.includes(element))) {
      tab.push(element);
    }
  });
  return tab.length;
}
