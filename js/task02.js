'use strict';

{
  const cart = {
    items: [],
    totalPrice: 0,
    count: 0,
    discount: 0,
    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        this.discount = 15;
      } else if (promocode === 'NEWYEAR') {
        this.discount = 21;
      }
    },
    add(name, price, amount = 1) {
      this.items.push({name, price, amount});

      this.increaseCount(amount);
    },
    increaseCount(num) {
      this.count = this.items.reduce((acc, item) => acc + num, 0);
    },
    calculateItemPrice() {
      let totalSumWithDiscount = this.items.reduce((acc, item) =>
        acc + item.price * item.amount, 0);
      return totalSumWithDiscount -= totalSumWithDiscount * this.discount / 100;
    },
    get totalPrice() {
      return this.calculateItemPrice();
    },
    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
      this.discount = 0;
    },
    print() {
      console.log(JSON.stringify(this.items));
    },
  };

  cart.add('Apples', 40);
  cart.add('Bananas', 100);
  cart.add('Oranges', 50);

  cart.setDiscount = 'NEWYEAR';

  cart.print();
  // cart.clear();
}
