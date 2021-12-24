// 1. 템플릿 리터럴의 기본
const userName = "Kim mintae";
const bolder = (text) => `<b>${text}</b>`;

console.log(`HI~ ${userName}`);
// 이렇게 함수(값으로 수렴된다면)를 넣을 수도 있음.
console.log(`HI~ ${bolder(userName)}`);

// 2. 템플릿 리터럴 고급기능
function div(strings, ...fns) {
  const flat = (s) => s.split("\n").join("");

  return function (props) {
    return `<div style="${
      flat(strings[0]) + (fns[0] && fns[0](props)) + flat(strings[1])
    }"</div>`;
  };
}

// 함수를 이렇게 쓸 수 있음 ㄷㄷ
const Div = div`
    font-size: 20px;
    color: ${(props) => (props.active ? "white" : "gray")};
    border: none;
`;
// font-weight: ${(props) => (props.bold ? "600" : "300")};

console.log(Div({ active: false }));
