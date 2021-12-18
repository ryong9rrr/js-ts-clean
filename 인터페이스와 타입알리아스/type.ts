export type YesOrNo = "Y" | "N";
export type DayOfWeek = "월" | "화" | "수" | "목" | "금" | "토" | "일";
export enum DayOfTheWeek {
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
  "일",
}

export type Name = string;
export type Email = string;
export type FooFunction = () => string;

export interface IUser {
  readonly id: number;
  readonly name: Name;
  email: string;
  receiveInfo: boolean;
  active: YesOrNo;
}

export interface IUser {
  address?: string;
}

export type TUser = {
  readonly id: number;
  readonly name: string;
  email: Email;
  receiveInfo: boolean;
  active: YesOrNo;
};

/*
타입 알리아스는 중복 불가
export type TUser = {
  address?: string;
};
*/

/*********** 상속 및 확장 **************/
export interface IUserProfile extends IUser {
  profileImage: string;
  github?: string;
  twitter?: string;
}

// IUser 는 인터페이스로 기술 되었는데 타입 알리아스 방식으로 이렇게 막 섞어써도 상관없음.
export type TUserProfile = IUser & {
  profileImage: string;
  github?: string;
  twitter?: string;
};

export interface Color {
  fontColor: string;
  strokeColor: string;
  borderColor: string;
  backgroundColor: string;
}

export type Display = {
  display: "none" | "block";
  visibility: boolean;
  opacity: number;
};

export type Geometry = {
  width: number;
  height: number;
  padding: number;
  margin: number;
};

// 타입 알리아스든 인터페이스든 막 섞어쓰기 가능.
export interface IStyle extends Color, Display, Geometry {
  tagName: string;
}

export type TStyle = Color &
  Display &
  Geometry & {
    tagName: string;
  };

// 정확히 어떤 데이터가 올지는 모르지만, key-value 타입규격만 정의한다고 하면
export interface IOnlyNumberValueObject {
  [key: string]: number;
}

export type TOnlyBooleanValueObject = {
  [prop: string]: boolean;
};

// 함수의 인자와 규격도 정의가 가능하다.
export interface IGetApi {
  (url: string, search?: string): Promise<string>;
}

export type TGetApi = {
  (url: string, search?: string): Promise<string>;
};

export type TGetApi2 = (url: string, search?: string) => Promise<string>;

export interface IRect {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

// 클래스인 경우 인스턴스를 만들기 위해 생성자가 호출이 되는데, 클래스의 규격과 생성자의 규격이 미묘하게 다를 수 있다.
// 인터페이스를 이용해서 생성자의 규격을 기술 할 수 있음.
export interface IRectConstruct {
  new (x: number, y: number, width: number, height: number): IRect;
}
