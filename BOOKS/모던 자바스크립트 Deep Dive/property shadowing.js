const Person = (function(){
    //생성자 함수
    function Person(name){
        this.name = name;
    }

    // 프로토타입 메서드
    Person.prototype.sayHello = function(){
        console.log(`Hi! My name is ${this.name}`);
    };

    // 생성자 함수를 반환
    return Person;
}());

const me = new Person('Lee');

me.sayHello();

// 인스턴스 메서드
me.sayHello = function(){
    console.log(`Hey! My name is ${this.name}`)
}

me.sayHello();

delete me.sayHello;

me.sayHello();