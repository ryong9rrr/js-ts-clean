/*
<타입 가드>
타입스크립트 내에서 어떤 변수가 2개 이상의 타입을 갖게되는
경우가 있을 때, 코드 상에서 a라는 타입이 들어왔을 때
작동될 수 없는 코드에 대해서 경고해주거나
그것을 원천적으로 막을 수 있는 기법
*/

function doubleTypeFunction(a: number | string) {
  if (typeof a === "string") {
    return a.replace("x", "X");
  }
  /*
  빨간줄이 뜨는 이유는 number가 들어올 경우가 있다는 것을
  타입스크립트가 코드 흐름까지 파악해서 알려주는 것
  */
  return a.replace("Y", "y");
}

// 이렇게 숫자가 들어와버리면 에러가 나버리는 거지
doubleTypeFunction(10);

function foo(a?: number | null) {
  // 이 코드가 타입가드 코드라고 할 수 있다.
  if (a === null) return;

  console.log("display before");
  /*
  ?로 a가 null이면 그냥 undefined를 출력할 수도 있지만
  좋은 기능이 아닐 수도 있다.
  (에러가 나면 그냥 프로그램이 종료되는 것도 필요하다.)
  */
  // 타입가드 코드가 없고 ?를 지우면 빨간줄이 날 것임
  console.log(a?.valueOf());
  console.log("display after");
}

foo();

// 인터페이스를 가지고 타입유형을 검사하는 패턴
interface Foo {
  foo: string;
  common: string;
}

// is는 타입스크립트의 타입가드용 문법
// 이런 타입가드를 체크하는 함수를 헬퍼함수라고 하는데 이런류의 헬퍼 함수를 많이 만들어놓는것이 유용하다.
function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

// foo 속성이 있고 Foo 규격과 맞으므로 true를 리턴한다.
console.log(isFoo({ foo: "ok", common: "wow" }));

// 하지만 이렇게 규격이 맞지 않는데도 true를 리턴하는 한계를 가지고 있음.
console.log(isFoo({ foo: "ok", common: "wow", active: false }));
