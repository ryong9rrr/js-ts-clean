// Book 이라는 객체 타입 규격
type Book = {
  title: string; // 필수
  copyright?: string; // 선택
  author?: string; // 선택
};

// 배열 생성
const books: string[] = [
  "헨리 6세",
  "리처드 3세",
  "실수 연발",
  "말괄량이 길들이기",
  "헨리 8세",
];

// 1. 배열 순회 (반복문이 아닌 "식"을 이용한 순회)
// 3번째 인자는 배열 원본 전체
books.forEach((book: string, idx: number, books: string[]) => {
  console.log(book, idx);
});

// map은 배열안의 데이터를 코드를 통해 변환하는 용도
// (하나씩 리턴하며 결과적으로 새로운 배열을 생성하므로)
const bookObject: Book[] = books.map((book: string) => {
  return {
    title: book,
    author: undefined,
  };
});

console.log(bookObject);

// 2-1. 메소드 체이닝
const ShakespeareOneBooks: Book[] = books
  .map((book: string) => ({
    title: book,
  }))
  .map((book: Book) => ({
    ...book,
    author: "William Shakespeare",
  }));

console.log(ShakespeareOneBooks);

/*
2-2. 아래 코드는 메소드 체이닝을 사용했을 때와 결과는 같지만
처음 이해하기는 어렵지만 재활용성도 높아지고 가독성도 높아지는(가독성은 상대적인 것)
더 좋은 코드임
*/
const bookTitleToBookObject = (book: string) => ({ title: book });
// 커링 (고차함수 기법, 클로저를 리턴)
const makeAuthor = (name: string) => (book: Book) => ({
  ...book,
  author: name,
});

/*
이런식으로 map 안에 함수자체를 ( () 없이, 함수자체를 값으로 취급하여 )
넣어줄수도 있다. (고차 함수 기법, 커링)
*/
const shakespeareTwoBooks: Book[] = books
  .map(bookTitleToBookObject)
  .map(makeAuthor("William Shakespeare"));

console.log(shakespeareTwoBooks);

// 3. 필터링 (입력이 참인 경우에만 리턴함)
const henry: Book[] = shakespeareTwoBooks.filter((book: Book) =>
  book.title.includes("헨리")
);

console.log(henry);

// 4. reduce((초기값, 원소))
const someNumbers: number[] = [10, 5, 3, 14, 56];

const someNumber = someNumbers.reduce((a: number, b: number) => a + b, 0);

console.log(someNumber);

// reduce를 응용한 예제(각각의 객체를 하나의 객체로 만드는 예제)
type SomeObject = {
  [key: string]: string | number;
};

const someObjects: SomeObject[] = [
  { border: "none" },
  { fontSize: 24 },
  { className: "box sm-box" },
];

const someObject: SomeObject = someObjects.reduce(
  (a: SomeObject, b: SomeObject) => ({ ...a, ...b }),
  {}
);
console.log(someObject);

// 5. Array.from
function sumNumbers(): number {
  /*
    arguments는 유사배열이기 때문에
    앞에 Array.from을 지워주면 reduce 메소드를 갖지 않은
    상태가 되버려서 에러가 남
    */
  return Array.from(arguments).reduce((a: number, b: number) => a + b, 0);
}

// console.log(sumNumbers(10,20,30,40,50))

/*
원래 자바스크립트가 가변인자를 처리하기 위해 사용하도록 한 암묵적 스펙인 arguments를 사용하는 것이 아닌,
ES6에 추가된 전개연산자를 통해서 가변인자를 처리, arguments는 이제 과거의 산물이 되어버렸...!다.
*/
function sumNumbersForTypeScript(...args: number[]): number {
  return args.reduce((a: number, b: number) => a + b, 0);
}

console.log(sumNumbersForTypeScript(10, 20, 30, 40, 50));
