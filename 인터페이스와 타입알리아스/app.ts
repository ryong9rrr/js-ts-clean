import * as allTypes from "./type";

// 이렇게 함수자체의 타입도 정의 할 수 있음.
const foo: allTypes.FooFunction = function () {
  return "아무 쓸모 없는 함수";
};

const iUsers: allTypes.IUser = {
  // id:'1', (문자열로 바꾸면 빨간줄)
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
};

const iUserProfile: allTypes.TUserProfile = {
  id: 1,
  name: "빌 게이츠",
  email: "bill@ms.com",
  receiveInfo: false,
  active: "Y",
  profileImage: "https://...",
  github: "okay",
};

const IUserProfiles: allTypes.TUserProfile[] = [];

const iStyle: allTypes.IOnlyNumberValueObject = {
  borderWidth: 5,
  width: 300,
  height: 100,
};

const TStyle: allTypes.TOnlyBooleanValueObject = {
  border: true,
  visible: false,
  display: true,
};

// 함수 규격을 작성할 때는 함수선언문이 아닌 함수표현식(arrow fn)으로!
const getApi: allTypes.TGetApi2 = (url, search = "") => {
  return new Promise((resolve) => resolve("OK"));
};

getApi("./api/users").then((data) => console.log(data));

class Rect implements allTypes.IRect {
  //private id: number; 타입에 정의한 속성은 모두 public인 것임.
  id: number; // private가 될 수 없음.
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.id = Math.random() * 100000;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

function createDefaultRect(cstor: allTypes.IRectConstruct) {
  return new cstor(0, 0, 100, 100);
}

const rect1 = new Rect(0, 0, 100, 20);
const rect2 = createDefaultRect(Rect);
