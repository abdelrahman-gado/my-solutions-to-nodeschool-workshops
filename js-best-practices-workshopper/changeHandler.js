const CoinObj = {
  p: 1,
  n: 5,
  d: 10,
  q: 25,
};

var coinsByAmount = ["q", "d", "n", "p"];

module.exports = {
  getAmount: function (coinType) {
    if (!CoinObj.hasOwnProperty(coinType)) {
      throw new Error("Unrecognized coin " + coinType);
    }
    return CoinObj[coinType];
  },

  convertToChange: function (amount) {
    var change = [];
    for (var i of coinsByAmount) {
      var coinValue = CoinObj[i];

      while (amount >= coinValue) {
        change.push(i);
        amount -= coinValue;
      }
    }
    return change;
  },
};
