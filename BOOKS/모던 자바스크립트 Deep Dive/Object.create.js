let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null);
console.log(obj);

obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);
