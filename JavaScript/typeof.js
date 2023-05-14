let number = 1;
console.log(typeof number); // number

let name = 'じょん';
console.log(typeof name);   // string

let flag = true;
console.log(typeof flag);   // boolean

let ary = ['dog', 'rabbit', 'bear'];
console.log(typeof ary);    // object

let obj = { name: 'じょん', age: 28 };
console.log(typeof obj);    // object

// 型の変換
console.log(Boolean('じょん')); // true
console.log(String('じょん'));  // じょん
console.log(Number('じょん'));  // NaN
