const notIterable = { 1: 1, 2: 2, 3: 3, 4: 4 };

// notIterable is not iterable
for (const n of notIterable) {
  console.log(n);
}

const myIterable = {};

// 이터러블 프로토콜을 준수하도록 함
myIterable[Symbol.iterator] = function* () {
  let i = 1;
  while (i <= 100) {
    yield i++;
  }
};

// 따라서 for ~ of 문으로 순회할 수 있게됨
for (const n of myIterable) {
  console.log(n);
}
