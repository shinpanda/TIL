type SuperPrint = <T, M>(a: T[], b:M) => T
const superPrint: SuperPrint = (a) => a[0]
const superPrint2: SuperPrint = (a,b) => a[0]

console.log(superPrint([1,2,3,4], "b"));
console.log(superPrint2([1,2,3,4], "b"));

type SuperPrint2 = <T, M>(a: T[], b?:M) => T|M
const superPrint3: SuperPrint2 = (a) => a[0]

console.log(superPrint3(["1","2",3,4]));
