function sum(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}
console.log(sum(1, 2, 3));

function getNames(arr) {
  const arrNames = arr.filter((data) => data.name);
  const arr1 = arrNames.map((data) => data.name);
  return arr1;
}
console.log(getNames([{ name: "ramu" }, { a: "1" }, { name: "akarapu" }]))

let x = {
  a: 1, b: 2
};
const arrX = Object.keys(x);
console.log(arrX);
let z = "hi";
const y = z.split('').reverse().join('');
console.log(y)


const a = [1, 2, 3];
const b = [11, 12, 45, 55];

const c = [...a, ...b];
console.log(c);

(function () {
	var ax = (ba = 3);
})();

console.log("ax defined? " + (typeof ax !== "undefined"));
console.log("ba defined? " + (typeof ba !== "undefined"));