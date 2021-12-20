function makeInfiniteEnergyGenerator() {
  let energy = 0;
  return function (booster = 0) {
    if (booster) {
      energy += booster;
    } else {
      energy++;
    }

    return energy;
  };
}

/*
무한루프에다가 리턴값이 없는 함수지만 실행과 중단을 마음대로 할 수 있음.
상태를 그대로 유지하고 있기 때문에 클로저 공간에 값을 가둬두지 않아도 됨(함수가 종료되지 않기 때문에).
*/
function* infiniteEnergyGenerator() {
  let energy = 1;
  while (true) {
    // next() 에 값이 넘어오면 여기로 들어감
    const booster = yield energy;

    if (booster) {
      energy += booster;
    } else {
      energy++;
    }
  }
}

// 클로저
const energy = makeInfiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energy());
}

console.log(energy(5));

// 제너레이터
const energyGenerator = infiniteEnergyGenerator();

for (let i = 0; i < 5; i++) {
  console.log(energyGenerator.next());
}
// next에 5를 넘겨준 값이 yield로 들어간다.
console.log(energyGenerator.next(5));
