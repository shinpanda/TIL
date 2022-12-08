"use strict";
const superPrint = (a) => a[0];
const superPrint2 = (a, b) => a[0];
console.log(superPrint([1, 2, 3, 4], "b"));
console.log(superPrint2([1, 2, 3, 4], "b"));
const superPrint3 = (a) => a[0];
console.log(superPrint3(["1", "2", 3, 4]));
