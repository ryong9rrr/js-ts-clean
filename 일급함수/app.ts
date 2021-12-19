/*
<일급함수>
*/

// 1. 인자로 전달되는 함수

function ul(child: string): string {
  return `<ul>${child}</ul>`;
}

function ol(child: string): string {
  return `<ol>${child}</ol>`;
}

/*
makeLI는 ul태그를 만드는 것인지 ol태그를 만드는 것인지 따위에는 관심이 없다.
어떤 태그를 만들지는 바깥쪽에서 결정을 하고 있고
makeLI는 단순히 <li></li>를 만드는 일만 하고 있음.
이것은 함수를 인자로 넘겨줄수있기 때문(일급함수를 지원하기 때문)
에 가능한 프로그래밍 테크닉
이렇게 역할이 단순한(역할을 분산시키는) 함수 프로그래밍을 해야한다.
*/
function makeLI(
  // 함수는 인자로 전달될 수 있다.
  container: (child: string) => string,
  contents: string[]
): string {
  const liList = [];

  for (const content of contents) {
    liList.push(`<Li>${content}</Li>`);
  }

  return container(liList.join(""));
}

const htmlUL = makeLI(ul, ["월", "화", "수", "목", "금", "토", "일"]);
const htmlOL = makeLI(ol, ["봄", "여름", "가을", "겨울"]);

console.log(htmlUL);
console.log(htmlOL);

/********************************************* */

// 2. 반환 값으로의 함수

function salePrice(discountRate, price) {
  return price - price * (discountRate * 0.01);
}

console.log("여름 세일 -" + salePrice(30, 567000));
console.log("겨울 세일 -" + salePrice(10, 567000));

function discountPrice(discountRate) {
  return function (price) {
    return price - price * (discountRate * 0.01);
  };
}

console.log("여름 세일 -" + discountPrice(30)(567000));
console.log("겨울 세일 -" + discountPrice(10)(567000));

// 함수를 변수에 담음으로 표현력이 극대화되었음.
let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log("여름 세일 -" + summerPrice(567000));
console.log("겨울 세일 -" + winterPrice(567000));
