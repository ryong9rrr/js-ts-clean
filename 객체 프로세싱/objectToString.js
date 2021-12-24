/*
객체를
문자열 포맷: id,item,price,discount
으로 변환
*/

// 1. 전통적인 방식 - 명령형 프로그래밍
const cartItems = [
  { id: 1, item: "핸드밀", price: 40000, discount: 0 },
  { id: 2, item: "A4용지", price: 4000, discount: 0 },
  { id: 3, item: "수영복", price: 120000, discount: 0 },
  { id: 4, item: "색연필72색", price: 150000, discount: 0 },
];

const cartItemsArray = [];
for (const item of cartItems) {
  const row = [];

  // ['id', 1], 구조분해할당
  for (const [, value] of Object.entries(item)) {
    row.push(value);
  }
  cartItemsArray.push(row.join());
}

console.log(cartItemsArray.join("==="));

// 2. 함수 메소드 - 함수형 프로그래밍
const extractValueInObject = (obj) =>
  Object.entries(obj).map(([, value]) => String(value));

// 이런식으로 함수만 넣어서 할 수도 있음.
const cartItemString = cartItems.map(extractValueInObject).join("===");

console.log(cartItemString);
