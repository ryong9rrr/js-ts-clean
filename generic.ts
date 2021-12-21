/*
<제네릭>
종종 '이 타입은 어떻게 작성해야하지?' 라는 상황이 생길 수 있다.
이 때 제네릭 기법을 사용할 수 있는데, 고급기법이고 어렵다...
리액트나 뷰와 같은 프레임워크에서 거의 필수적으로 사용된다.

*/

// 아래 타입알리아스로 정의한 타입 2가지가 있다.
type User = {
  id: number;
  name: string;
};

type Address = {
  zipcode: string;
  address: string;
};

/*
이 함수는 넣은대로 나오는 함수임.
그런데 만약에 원하지 않은 규격이 들어갔으면 걸러낼 수 없음
*/
function pipeOne(value: any): any {
  return value;
}

// 제네릭을 이용해서 그때그때 원하는 타입을 규정시킨다.
// 보통 T라고 하고(컨벤션) 아직 확정되지 않은 타입을 의미한다.
// 타입은 "호출되는 순간"에 결정된다.
function pipeTwo<T>(value: T): T {
  return value;
}

let p1 = pipeOne(10);
// 문자열을 넣었기 때문에 p2는 문자열로 확정됨.
let p2 = pipeTwo("10");
// 불리언을 넣었기 때문에 p3는 불리언타입으로 확정됨.
let p3 = pipeTwo(true);

/*
하지만 위와 같이 그냥 원시값을 넣었을 때는 딱히 의미가 없고,
객체를 넣을 때 위력이 발휘된다.
*/
// 애로우 함수로 작성할 때는 아래와 같음.
const pipeObjectOne = <T>(obj: T): T => {
  return obj;
};

/*
아래는 타입을 명시하지 않았을 때.
(그냥 뭐 딱히 의미없음, 이렇게 쓰는 거 아니다 라는 예제)
*/
let po1 = pipeObjectOne({ id: 1, name: "김", zipcode: 50213 });

// 제네릭은 이렇게 쓰는 것. <User> 타입에 맞지 않은 데이터를 걸러낸다.
let po2 = pipeObjectOne<User>({ id: 1, name: "김", zipcode: 50213 });

// 클래스에도 제네릭을 사용할 수 있음.
class State<S, Config = {}> {
  private _state: S;
  config: Config;

  constructor(state: S, config: Config) {
    this._state = state;
    this.config = config;
  }

  getState(): S {
    return this._state;
  }
}

// 인스턴스 객체를 생성할 때 타입을 제네릭에 맞춰서 생성.
let s1 = new State<Address, { active: boolean }>(
  {
    zipcode: 50213, // string이어야 하는데 number라서 error !
    address: "서울시",
  },
  {
    active: true,
  }
);

const s1Data = s1.getState();

console.log(s1Data.zipcode, s1Data.address, s1.config.active);

/*
고급기법.
*/
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
getProperty(x, "m"); // key 중에 'm'은 없어!

// 인터페이스에도 제네릭을 사용할 수 있다.
interface KeyPair<T, U> {
  key: T;
  value: U;
}

// 제네릭으로 그때그때 유동적으로 타입선언을 한다.
let kv1: KeyPair<number, string> = { key: 1, value: "Kim" };
let kv2: KeyPair<number, number> = { key: 2, value: 12345 };
