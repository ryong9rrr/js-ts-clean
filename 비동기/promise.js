/*
1. 비동기적 상황 예시

아래 20번째 라인은 실제로 22번째 라인이 실행된 후 실행된 것이다.
*/
function double(x) {
  return x * 2;
}

function calcValue(a, b, cb) {
  setTimeout(() => {
    cb(a + b);
  }, 100);
}

const x = double(100);
const y = x;

const r = calcValue(10, 20, (result) => {
  console.log(result);
});
const z = r;

// 2. promise 메커니즘
const p = new Promise((resolve, reject) => {
  // resolve('OK');
  setTimeout(() => {
    resolve("OK");
    // reject('실패');
  }, 2000);
});

// p.then(function(ok){
//     console.log(ok);
// }).catch(function(error){
//     console.log(error)
// })

// 아래와 같이 then을 체이닝 시킬 수 있다.
p.then(function (ok) {
  console.log("첫번째 성공"); // 전체 코드 실행 후 2초 후 실행됨
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("두번째 성공");
    }, 3000);
  });
})
  .then(function (ok) {
    console.log(ok); // 전체 코드 실행 후 5초 후 실행됨
  })

  .catch(function (error) {
    console.log(error);
  });
