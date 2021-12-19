function CartV1() {
  this.cart = [];
  this.currentId = 0;
}

CartV1.prototype.getNewId = function () {
  this.currentId++;
  return this.currentId;
};

CartV1.createItem = function (name, price) {
  return { name, price };
};

CartV1.prototype.addItem = function (item) {
  this.cart.push({
    ...item,
    id: this.getNewId(),
  });
};

CartV1.prototype.clearCart = function (item) {
  this.cart = [];
  this.currentId = 0;
};

const shoppingCartV1 = new CartV1();

shoppingCartV1.addItem(CartV1.createItem("수박", 8000));
shoppingCartV1.addItem(CartV1.createItem("사과", 12000));
shoppingCartV1.addItem(CartV1.createItem("두부", 2000));

console.log(shoppingCartV1.cart);

class CartV2 {
  static createItem = (name, price) => ({
    name,
    price,
  });

  cart;
  currentId;

  constructor() {
    this.currentId = 0;
    this.cart = [];
  }

  getNewId = () => {
    this.currentId++;
    return this.currentId;
  };

  addItem = (item) => {
    this.cart.push({
      ...item,
      id: this.getNewId(),
    });
  };

  clearCart = () => {
    this.currentId = 0;
    this.cart = [];
  };
}

const shoppingCartV2 = new CartV2();

shoppingCartV2.addItem(CartV2.createItem("수박", 8000));
shoppingCartV2.addItem(CartV2.createItem("사과", 12000));
shoppingCartV2.addItem(CartV2.createItem("두부", 2000));

console.log(shoppingCartV2.cart);

/****************************************************** */

const person = {
  name: "Bob",
  age: 28,
};

console.log(person.toString());

const c1 = {
  name: "C1",
  color: "red",
};

const c2 = {
  name: "C2",
  width: 300,
};

const c3 = {
  name: "C3",
  height: 100,
};

console.log(c1);
console.log(c2);
console.log(c3);

// Object;

// c1.__proto__

// console.log(c1.toString());

c1.__proto__ = c2;
console.log(c1.width);

c3.__proto__ = c2;

function Foo(name) {
  this.name = name;
  this.__proto__ = Foo.prototype;
}

Foo.prototype.lastName = "WooWa";

const f = new Foo("Kim min tae");

console.log(f.name);
console.log(f.lastName);
