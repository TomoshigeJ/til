// lengthプロパティ
let name = 'じょん';
console.log(name.length);
// => 3

let dog = '犬';
console.log(dog.length);
// => 1

// サロゲートペアの場合
let str = '𠀋';
console.log([...str].length);
// => 1


// 大文字小文字の変換
let str1 = 'SuperDog';
let str2 = 'ＳｕｐｅｒＤｏｇ';

console.log(str1.toUpperCase()); // => SUPERDOG
console.log(str1.toLowerCase()); // => superdog
console.log(str2.toUpperCase()); // => ＳＵＰＥＲＤＯＧ
console.log(str2.toLowerCase()); // => ｓｕｐｅｒｄｏｇ

// 組み合わせて使用
let str = 'john'
console.log(str.substring(0, 1).toUpperCase() + str.substring(1).toLowerCase());
// => John


