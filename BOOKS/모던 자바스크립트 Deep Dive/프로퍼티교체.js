// 1. 생성자 함수에 의한 프로토타입의 교체

/*
const Person = (function(){
    function Person(name){
        this.name = name;
    }

    Person.prototype = {

        sayHello(){
            console.log(`Hi! My name is ${this.name}`);
        }
    };
    return Person;
}());
*/

/*
const Person = (function(){
    function Person(name){
        this.name = name;
    }

    // 생성자 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
    Person.prototype = {
        // constructor 프로퍼티와 생성자 함수 간의 연결을 설정
        constructor: Person,
        sayHello(){
            console.log(`Hi! My name is ${this.name}`);
        }
    };

    return Person;
}());

console.log(typeof Person);

const me = new Person('Lee');
// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴된다.
console.log(me.constructor === Person); // false -> true
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티를 되살린다.
console.log(me.constructor == Object); // true -> false

*/
// 2. 인스턴스에 의한 프로토타입의 교체
/*
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    sayHello(){
        console.log(`Hi! My name is ${this.name}`);
    }
};

// me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);

me.sayHello();
*/
function Person(name){
    this.name = name;
}

const me = new Person('Lee');

// 프로토타입으로 교체할 객체
const parent = {
    constructor: Person,
    sayHello(){
        console.log(`Hi! My name is ${this.name}`);
    }
};

Person.prototype = parent;

// me 객체의 프로토타입을 parent 객체로 교체한다.
Object.setPrototypeOf(me, parent);

me.sayHello();

console.log(me.constructor === Person); 
console.log(me.constructor === Object);

console.log(Person.prototype === Object.getPrototypeOf(me));

function isInstanceof(instance, constructor){
    // 프로토타입 취득
    const prototype = Object.getPrototypeOf(instance);

    // 재귀 탈출 조건
    // prototype이 null이면 프로토타입 체인의 종점에 다다른 것이다.
    if ( prototype === null ) return false;

    // 프로토타입이 생성자 함수의 prototype 프로퍼티에 바인딩된 객체라면 true를 반환한다.
    // 그렇지 않다면 재귀 호출로 프로토타입 체인 상의 상위 프로토타입으로 이동하여 확인한다.
    return prototype === constructor.prototype || isInstanceof(prototype, constructor);
}

console.log(isInstanceof(me, Person)); // true
console.log(isInstanceof(me, Object)); // true
console.log(isInstanceof(me, Array)); // false
