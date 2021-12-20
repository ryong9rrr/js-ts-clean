// tuple은 js에서 지원하지 않는다, ts는 지원함.
// tuple이란 타입과 크기가 제한된 배열형태의 자료형

// 이런식으로 원소 수를 제한시키거나 그 원소의 타입을 넣어서 규격을 정한다. 이것이 tuple
const address: [number, string, string] = [14023, "서울시,", "송파구"];

let [zipcode, address1] = address;

// 데이터 타입이 number가 아니므로 빨간줄이 떴음.
zipcode = "12345";

type BookInfo = [string, string, number];

const BookData: BookInfo[] = [
  ["헨리 8세", "세익스피어", 1884],
  ["헨리 8세", "세익스피어", 1884],
];

BookData.push(["a", "b", 23]);
// 이것 역시 타입이 맞지 않으므로 빨간줄
BookData.push([1, "b", 23]);

// 튜플의 응용
function getArrayOne(): any[] {
  return [14023, "서울시", "송파구"];
}

type Address = [number, string, string];

// 이런식으로 리턴타입을 튜플로 확실하게 명시해놓으면
function getArrayTwo(): Address {
  return [14023, "서울시", "송파구"];
}

let address2 = getArrayTwo()[2];

// 이렇게 타입체킹을 할 수 있다는 것.
address2 = 12;
