// 문자열을 카멜케이스로 변환하는 예제

// 1. 명령형
function convertCamelName(name) {
  let camelName = "";

  for (let i = 0, newSpace = false; i < name.length; i++) {
    if (name[i] == " ") {
      newSpace = true;
      continue;
    }

    if (newSpace) {
      camelName = camelName + name[i].toUpperCase();
      newSpace = false;
    } else {
      camelName = camelName + name[i].toLowerCase();
    }
  }

  return camelName;
}

// 2. 함수형
const simpleCamel = (text, splitter = " ") =>
  text
    .split(splitter)
    .map((word, wi) =>
      word
        .split("")
        .map((c, ci) =>
          wi > 0 && ci === 0 ? c.toUpperCase() : c.toLowerCase()
        )
        .join("")
    )
    .join("");

const camelName1 = convertCamelName("Kim min tae");
const camelName2 = simpleCamel("KIM MIN TAE");

console.log(camelName1);
console.log(camelName2);
