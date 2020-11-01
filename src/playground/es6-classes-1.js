class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getGreeting() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += ` Their major is '${this.major}'.`;
    }    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I' m visiting from ${this.homeLocation}`;
    }
    return greeting;
  }

}

const me = new Student('SpBo', 30, 'JS');
console.log(me.getGreeting());

const other = new Student();
console.log(other.getGreeting());

const other2 = new Traveler('Sp', 30, 'Athens');
console.log(other2.getGreeting());

const other3 = new Traveler();
console.log(other3.getGreeting());