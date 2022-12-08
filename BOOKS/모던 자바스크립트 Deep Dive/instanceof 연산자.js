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

const me = new Person('Lee');

console.log(me.constructor === Person); // false
console.log(me instanceof Person); // true
console.log(me instanceof Object); // true