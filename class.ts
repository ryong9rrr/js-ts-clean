interface Container {
  tagName: string;
  className: string;
  children?: string[];
  getTagName: () => string;
  getClassName: () => string;
}

/*
추상 클래스, 어떤 것을 명확히 나타내어있지 않고 하위 클래스에 상속하여
구현을 도와주는 그런 목적의... 클래스 (슈퍼 클래스)
*/
abstract class Shape {
  /*
    static: 인스턴스 객체를 생성할 때 필요하지 않은,
    이 Shape이라는 클래스에 기본적으로 포함할 그런 속성 값을 의미함,
    static을 붙여주게 되면 해당 클래스 안에서 this가 아닌 클래스명으로 접근가능하다.
    */
  public static MIN_BORDER_WIDTH = 0;
  public static MAX_BORDER_WIDTH = 30;

  // readonly: 인스턴스 객체가 만들어진 이후 바꿀 수 없는 속성
  public readonly name: string = "Shape";
  /*
  <속성 접근자 public, protected, private>
  1. public은 언제 어디서나~ (외부 공개 O, 상속 O)
  2. protected는 확장된(상속된) 클래스까지는 보임.
  하지만 인스턴스 외부에서는 보이지 않음. (외부 공개 O, 상속 X)
  3. private은 그 클래스 안에서만 통용됨, 상속하거나 상속돼도
  부모, 자식클래스에서 보이지 않음. 물론 인스턴스 외부에도 X (외부 공개 X, 상속 X)
  범위 : private < protected < public
  */
  protected _borderWidth: number;
  // !는 옵셔널(선택사항)이 아니라 값을 세팅하지 않아도 된다는 뜻
  private action!: string;

  constructor(borderWidth: number = 0) {
    this._borderWidth = borderWidth;
  }

  // abstract: 상속된 하위 클래스는 area를 구현해라. (abstract 해놓고 만약 구현안하면 ts 컴파일 에러!)
  // 그래서 타입만 명시되어있음을 알 수 있음.
  abstract area: () => number;

  set borderWidth(width: number) {
    // Shape의 정적 속성을 사용한 예
    if (width >= Shape.MIN_BORDER_WIDTH && width <= Shape.MAX_BORDER_WIDTH) {
      this._borderWidth = width;
    } else {
      throw new Error("borderWidth 허용 범위를 벗어난 동작을 시도했습니다.");
    }
  }

  get borderWidth(): number {
    return this._borderWidth;
  }
}

/*
Circle 과 Rect는 Shape이 가지고 있는 모든 것을 상속받는다.
1. 당연히 필요한 추가적인 속성과 메소드를 추가할 수도 있고
2. 슈퍼클래스와 같은 속성, 메소드로 이름을 지어도 된다.
    (프로토타입 체이닝 메커니즘에 의해 바로 위에 있는 것을 채택하기 때문)
3. 프로토타입 체이닝 메커니즘은 그냥 쉬운건데 이름만 어려움.
가장 내부에서 먼저 찾고 없으면 바깥, 없으면 그 바깥... 계속해서 가다가
끝까지갔는데도 못찾으면 undefined. (스코프와 비슷한 개념) 
*/

class Circle extends Shape {
  // private 속성으로 만들면 인스턴스 바깥 쪽에서는 보이지 않음.
  private _radius: number;
  public name: string = "Circle";

  constructor(radius: number) {
    // super(): Shape의 속성과 메소드를 모두 상속한다 (필수)
    super();
    this._radius = radius;
  }
  // _radius는 private으로 하고 getter/setter 메소드를 제공
  /*
  근데 사실 이 경우처럼 getter 메소드만 존재하는 경우, 즉
  "읽기" 밖에 없는 경우는 사실 의미가 없어서 
  _radius를 private가 아니라 readonly로 둬도 됨.
  하지만 setter 메소드를 추가해서 "읽기, 쓰기"를 모두 하고자한다면,
  또 속성은 외부적으로 보호하고 싶다면 그 때 private를.
  */
  get radius() {
    return this._radius;
  }

  area = () => this._radius * this._radius * Math.PI;
}

class Rect extends Shape {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    super();

    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  area = () => this._width * this._height;
}

const circle = new Circle(50);
const rect = new Rect(150, 200);

console.log(rect.borderWidth);
console.log(rect.name);
console.log(circle.name);

try {
  rect.borderWidth = 10;
} catch (e) {
  console.error(e);
}

// type Container를 통해 클래스의 설계를 제한하는 용도
class MyContainer implements Container {
  tagName: string;
  className: string;

  constructor(tagName: string, className: string) {
    this.tagName = tagName;
    this.className = className;
  }

  getTagName = () => this.tagName;
  getClassName = () => this.className;
}

console.log("done");
