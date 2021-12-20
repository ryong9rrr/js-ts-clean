class Person2 {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 화살표 함수로 재작성
  getAge = () => this.age;
}

const kim = new Person2("kim", 20);

kimAge = kim.getAge;

console.log(kim.age); // 20
console.log(kimAge()); // 20
