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


const a = [1, 2, 5,11,12];
const b = [2,5,3,11, 12, 45, 55];

const c = [...a, ...b];
const yc = c.sort((i)=>i>0);
console.log("yc",yc);

(function () {
	var ax = (ba = 3);
})();

console.log("ax defined? " + (typeof ax !== "undefined"));//false
console.log("ba defined? " + (typeof ba !== "undefined"));//true

//add(1,2)
//add(1)(2)
function add(num1, num2) {
  if (num1 && num2) {
    return num1 + num2;
  }
  else {
    return function (num2) {
			return num1+num2;	
  }
  }
}
function curryAdd(func) {
  return function (num1) {
    return function (num2) {
      return add(num1,num2)
    }
  }
}
//var curriedSum = curryAdd(add);
add(1, 2);
add(11)(22);
console.log(add(1, 1), add(2)(2));

// find a number missing in the given array aarry=[1-100]
//let total = n * (n + 1) / 2;
let arr = [];
const barr=[1,2,3,5]
for (let i = 1; i < Math.max(...barr)+1; i++) {
  arr.push(i);
}
const totalOfArray = arr.reduce((acc, ele) => acc + ele, 0);
const givenArrTotal = barr.reduce((acc, s) => acc + s, 0);
console.log(arr, totalOfArray-givenArrTotal);
console.log(Math.max(...barr));

//money division
const til = {
  penny: 12,// 1cents
  nickel: 10,//5 cents
  dime: 2,//10cents
  quarter: 12,//25 cents
  dollar:30//100
}
const money = 20.47;
const newMoney = money * 100;
const getMoneyDivision = money => {
  let result = {};
  const moneyValue = [100, 25, 10, 5, 1];
  moneyValue.forEach((value) => {
    let multiValue = Math.floor(money / value);
    if (multiValue >= 1) {
      result[value] = multiValue;
      money %= value;
    }
  });
  console.log('till',result)
}
getMoneyDivision(newMoney);
const dollCount = Math.round(money);
console.log(dollCount);

