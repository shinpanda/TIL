console.log(score);

score = 80;
var score;

console.log(score);

// 숫자 타입의 세 가지 특별한 값
console.log("숫자 타입의 세 가지 특별한 값")
console.log(10/0);
console.log(10/-0);
console.log(1 * 'String');

/*
[output]
숫자 타입의 세 가지 특별한 값
Infinity
-Infinity
NaN
*/

const today = new Date();
let year = today.getFullYear();
const month = today.getMonth();
const days = today.getDay();

console.log(`${year}.${month}.${days}`);

// 윤년 계산 알고리즘
/*
1. 연도가 4로 나누어 떨어지는 해(2000, 2004, 2008, 2012, 2016, 2020...) 은 윤년
2. 연도가 4로 나누어 떨어지더라도 연도가 100으로 나누어떨어지는 해 (2000, 2100, 2200...)는 평년
3. 연도가 400으로 나누어 떨어지는 해(2000, 2400, 2800)는 윤년
*/
console.log(((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))? "윤년" : "평년");

// 레이블 문
foo: console.log('foo');
//-> 실행 시 콘솔에 출력됨.

foo2: {
    console.log(1);
    break foo2;
    console.log(2);
}
console.log('Done!!');
// -> 실행 시 foo2 블록문을 탈출하기 때문에 2가 실행되지 않음.

console.log(5 * '10');
console.log('5' * 10);


// ES5
var obj = {
	name: 'Lee', 
	sayHi: function(){
		console.log('Hi! ' + this.name);
	}
};
obj.sayHi();

// ES6
const objEs6 = {
	name: 'Lee',
	sayHi(){
		console.log(`Hi! ${this.name}`);
	}
};
objEs6.sayHi();


var score = 80;
var copy = score;

console.log(score); // 80
console.log(copy); // 80

score = 100;

console.log(score); // 100
console.log(copy); // 80

// 렉시컬 스코프
var x = 1;

function outerFoo(){
    var x = 10;
    bar();
}

function bar(){
    console.log(x);
}

outerFoo();
bar();

console.log("scope test");
var testVar = 'global';

function globalFunc(){
    console.log(testVar);
    var testVar = 'local';
}

globalFunc(); // undefined
console.log(testVar) // global

// Property Attribute
console.log("Property Attribute");
const person = {
    name: 'Lee'
}
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
person.age = 20;
console.log(Object.getOwnPropertyDescriptors(person));


// Accersor Property
const Accersor = {
    firstName: 'Ungmo',
    lastName: 'Lee',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
};

const printName = ({firstName, lastName}) => 
    console.log(`${firstName} ${lastName}`);

printName(Accersor);
Accersor.fullName = 'Saemi Lee';
console.log(Accersor);
printName(Accersor);

let descriptor = Object.getOwnPropertyDescriptor(Accersor, 'firstName');
console.log(descriptor);
/*
{
  value: 'Saemi',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

descriptor = Object.getOwnPropertyDescriptor(Accersor, 'fullName');
console.log(descriptor);
/*
{
  get: [Function: get fullName],
  set: [Function: set fullName],
  enumerable: true,
  configurable: true
}
*/

// Property Define
console.log('Property Define');
const definePerson = {};

// 데이터 프로퍼티 정의
Object.defineProperty(definePerson, 'firstName', {
    value : 'Saemi',
    writable : true,
    enumerable : true,
    configurable : true
});

Object.defineProperty(definePerson, 'lastName', {
    value: 'Lee'
});

let descriptor2 = Object.getOwnPropertyDescriptor(definePerson, 'firstName');
console.log('firstName', descriptor2);

descriptor2 = Object.getOwnPropertyDescriptor(definePerson, 'lastName');
console.log('lastName', descriptor2);

console.log(Object.keys(definePerson));

console.log('Not Writable');
definePerson.lastName = 'Jung';
console.log(definePerson.lastName);

console.log('Not Deleted(Confiurable = false 속성)');
delete person.lastName;

descriptor2 = Object.getOwnPropertyDescriptor(definePerson, 'lastName');
console.log('lastName', descriptor);

descriptor = Object

const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true
  },
  property2: {
    value: 'TEST'
  }
});

console.log(object1.property1);
// expected output: 42
console.log(Object.getOwnPropertyDescriptors(object1));


// 객체 확장 금지 : Object.preventExtensions -> 프로퍼티 추가 금지
const preventExtensionsPerson = { name: 'Lee'};
console.log(Object.isExtensible(preventExtensionsPerson));
Object.preventExtensions(preventExtensionsPerson);
console.log(Object.isExtensible(preventExtensionsPerson));
preventExtensionsPerson.age = 20; // X
console.log(preventExtensionsPerson);
delete preventExtensionsPerson.name; // O
console.log(preventExtensionsPerson);

//Object.defineProperty(preventExtensionsPerson, 'age', {value: 20}); // 불가
//TypeError: Cannot define property age, object is not extensible

// 객체 밀봉 : Object.seal -> 프로퍼티 추가 및 삭제, 프로퍼티 어트리뷰트 재정의 금지 -> 읽기와 쓰기만 가능.
const sealedPerson = { name : 'Lee'};
console.log(`Object.isSealed? : ${Object.isSealed(sealedPerson)}`);
console.log(`Object.seal(sealedPerson);`);
Object.seal(sealedPerson);
console.log(`Object.isSealed? : ${Object.isSealed(sealedPerson)}`);
console.log(Object.getOwnPropertyDescriptors(sealedPerson));
sealedPerson.age = 20; // X
console.log(sealedPerson);
delete sealedPerson.name; // X
console.log(sealedPerson);
sealedPerson.name = 'Lee2'; // O
console.log(sealedPerson);
//Object.defineProperty(sealedPerson, 'name', { configurable: true});
//TypeError: Cannot redefine property: name

// 객체 동결 : Object.freeze -> 프로퍼티 추가 및 삭제, 프로퍼티 어트리 뷰트 재정의 금지. 프로퍼티 값 갱신 금지 -> 읽기만 가능
const frozenPerson = { name : 'Lee'};
console.log(`Object.isFrozen ? ${Object.isFrozen(frozenPerson)}`);
Object.freeze(frozenPerson);
console.log(Object.isFrozen(frozenPerson));
console.log(Object.getOwnPropertyDescriptors(frozenPerson));
frozenPerson.age = 20; //X
console.log(frozenPerson);
delete frozenPerson.name; // X
console.log(frozenPerson);
frozenPerson.name = 'Lee2'; // X
console.log(frozenPerson);
//Object.defineProperty(frozenPerson, 'name', {configurable : true}); //X
//TypeError: Cannot redefine property: name

//deep freeze
console.log("deep freeze")
const deepFreeze = (target) => {
    if(target && typeof target === 'object' && !Object.isFrozen(target)){
        Object.freeze(target);
        Object.keys(target).forEach(key => deepFreeze(target[key]));
    }
    return target;
}

const deepFreezePerson = {
    name: 'Lee',
    address: {city: 'Seoul'}
};

deepFreeze(deepFreezePerson);

console.log(`Object.isFrozen(deepFreezePerson) : ${Object.isFrozen(deepFreezePerson)}`);
console.log(`Object.isFrozen(deepFreezePerson).address : ${Object.isFrozen(deepFreezePerson.address)}`);
deepFreezePerson.address.city = 'Busan';
console.log(deepFreezePerson);

// 17장 생성자 함수에 의한 객체 생성

const newPerson = new Object();

newPerson.name = 'Lee';
newPerson.sayHello = function() { console.log('Hi! My name is ' + this.name)}; // Lee
newPerson.sayHello2 = () => console.log(`Hi! My name is ${this.name}`); // undefined?

console.log(newPerson);
console.dir(newPerson.sayHello);
console.dir(newPerson.sayHello2);
newPerson.sayHello();
newPerson.sayHello2();

const newPersonForTest = {
    name : 'Lee'
};
newPersonForTest.sayHello = () => console.log(`Hi! My name is ${this.name}`); // undefined?
newPersonForTest.sayHello();

const strObj = new String('Lee');
console.log(typeof strObj);
console.log(strObj);

const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

const func = new Function('x', 'return x * x');
console.log(typeof func);
console.log(func);
console.dir(func);
console.log(func(2));

const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

const date = new Date();
console.log(typeof date);
console.log(date);

// 생성자 함수
function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * this.radius;
    };
}

// 인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter());
console.log(circle2.getDiameter());

// this - 자기 참조 변수(self-referencing variable)
function thisTestFunc(){
    console.log(this);
}

// case 1. 일반적인 함수로서 호출
thisTestFunc(); // this : window / global

// case 2. 메서드로서 호출
const thisTestObj = { thisTestFunc };
thisTestObj.thisTestFunc(); // this : thisTestObj

// case 3. 생성자 함수로서 호출
const inst = new thisTestFunc(); // thisTestFunc {}


// new.target [ES6]
function Circle(radius){
    if(!new.target){
        return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius
    }
}

const circle = Circle(5);
console.log(circle.getDiameter());


// 스코프 세이프 생성자 패턴 scope-safe constructor
// new.target을 사용할 수 없는 상황일 때 사용
function Circle2(radius){
    if(!(this instanceof Circle2)){
        return new Circle2(radius);
    }

    this.radius = radius;
    this.getDiameter = function(){
        return 2 * this.radius;
    }
}

const newCircle = Circle2(5);
console.log(newCircle.getDiameter());

// arguments 객체의 Symbol 프로퍼티
function multiply(x, y){
    const iterator = arguments[Symbol.iterator]();

    for(let prop of arguments){
        console.log(prop);
    }
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return x * y;
}

multiply(1, 2, 3);

function sum(){
    let res = 0;
    for(let i = 0; i < arguments.length; i++){
        res += arguments[i];
    }
    return res;
}

console.log(sum());
console.log(sum(1, 2));
console.log(sum(1, 2,3));

function sum2(){
    const array = Array.prototype.slice.call(arguments);
    return array.reduce(
        (pre, cur) => pre + cur, 0
    );
}

console.log(sum2(1,2));

// ES6 Rest 파라미터
function sum3(...args){
    return args.reduce((pre, cur) => pre + cur, 0)
}
console.log(sum(1, 2));
console.log(sum(1,2,3,4,5))

// prototype
const testPrototype = { a: 1};

console.log(testPrototype.__proto__ === Object.prototype); // true

console.log(testPrototype.hasOwnProperty('a')); // true
console.log(testPrototype.hasOwnProperty('__proto__')); // false

// 19장 프로토타입
// 객체지향 프로그래밍
const circleObj = {
    radius : 5, 

    // 원의 지름 : 2r
    getDiameter(){
        return 2 * this.radius;
    },

    // 원의 둘레 : 2∏r
    getPerimeter(){
        return 2 * Math.PI * this.radius;
    },
    // 원의 넓이: ∏rr
    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

console.log(circleObj);
console.log(circleObj.getDiameter()); // 10
console.log(circleObj.getPerimeter()); // 31.41592653589793
console.log(circleObj.getArea()); // 78.53981633974483


// 프로토타입을 사용하지 않을 경우
 function NotUsedProtoCircle(radius) {
    this.radius = radius;
    this.getArea = function(){
        return Math.PI * this.radius ** 2;
    };
 }

 const testCircle1 = new NotUsedProtoCircle(1);
 const testCircle2 = new NotUsedProtoCircle(2);
 console.log(testCircle1.getArea == testCircle2.getArea); //false
 // 내용이 동일한 메서드가 중복으로 생성된다
 // 프로퍼티 값은 인스턴스마다 다르나 getArea 메서드는 같으므로 하나만 생성하여 인스턴스가 공유하여 사용하도록 한다.

// 프로토타입을 사용하는 경우
function UsedProtoCircle(radius) {
this.radius = radius;
}

UsedProtoCircle.prototype.getArea = function(){
return Math.PI * this.radius ** 2;
}

const testCircle3 = new UsedProtoCircle(1);
const testCircle4 = new UsedProtoCircle(2);

console.log(testCircle3.getArea === testCircle4.getArea); // true
// 상속에 의해 메서드를 공유한다.


//__protype 대신
const objForTestProto = {};
const parent = { x: 1 };

console.log(Object.getPrototypeOf(objForTestProto)); //[Object: null prototype] {}

Object.getPrototypeOf(objForTestProto); // obj.__proto__;
Object.setPrototypeOf(objForTestProto, parent); // obj.__proto__ = parent;
console.log(Object.getPrototypeOf(objForTestProto)); //{ x: 1 }

console.log(objForTestProto.x); //1

// 생성자 함수
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

// me 객체의 생성자 함수는 Person이다
console.log(me.constructor === Person);
// me 객체는 프로토타입의 constructor 프로퍼티를 통해 생성자 함수와 연결된다.
// me 객체에는 constructor 프로퍼티가 없지만 me 객체의 프로토타입인 Person.prototype에는 constructor 프로퍼티가 있다.