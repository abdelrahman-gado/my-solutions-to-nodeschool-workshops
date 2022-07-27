var balance = 0;

module.exports = {

  canAfford: function (amount) {
    return amount <= balance;
  },

  decreaseBalance: function (amount) {
    if (!canAfford(amount)) {
      throw new Error("Insufficient balance");
    }

    balance -= amount;
  },

  increaseBalance: function (amount) {
    balance += amount;
  },
  

  getBalance: function () {
    return balance;
  },
};