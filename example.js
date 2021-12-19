function zero(i = 0) {
  return function () {
    return i++;
  };
}

const callZero = zero();

console.log(callZero());
console.log(callZero());
console.log(callZero());

function addNum(num) {
  return function () {
    return num++;
  };
}

const calladdNum = addNum(10);

console.log(calladdNum());
console.log(calladdNum());
console.log(calladdNum());
