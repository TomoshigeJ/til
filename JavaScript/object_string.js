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

