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

console.dir(deepFreezePerson)

