// 깊은복사 함수
function deepCopyObject(obj) {
  const clone = {};
  for (const key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      clone[key] = deepCopyObject(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

// store에서 config.lastLoginDate 속성만 바꾸면서 복사
const store = {
  user: null,
  cart: [],
  config: {
    multiDevice: false,
    lastLoginDate: "Wed Jun 09 2021 20:49:55 GMT+0900",
  },
};

const newStore = {
  ...deepCopyObject(store),
  config: {
    ...store.config,
    lastLoginDate: new Date(),
  },
};
console.log(newStore);
console.log(store);

// 디폴트 값을 설정하는 테크닉

const DefaultStyle = {
  color: "#fff",
  fontColor: "#999",
  fontSize: 14,
  fontWeight: 200,
};

function createParagraph(config) {
  config = { ...DefaultStyle, ...config };
  console.log(config);
}

createParagraph({ fontSize: 12 });
