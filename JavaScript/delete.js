// 配列の要素削除
let data = ['dog', 'rabbit', 'bear'];
console.log(delete data[0]); // true
console.log(data);           // [empty, 'rabbit', 'bear']
console.log(data.length);    // 3

// プロパティの要素削除
let frameworks = { ruby: 'rails', javascritp: 'Next.js' };
console.log(delete frameworks.ruby); // true
console.log(frameworks);             // {javascritp: 'Next.js'}
console.log(delete frameworks.dog);  // true

let member = { name: 'John', type: 'dog', master: frameworks };
console.log(delete member.master);   // true
console.log(member);                 // {name: 'John', type: 'dog'}
console.log(frameworks);             // {javascritp: 'Next.js'}

// 変数は削除できない
let animal = 'dog';
console.log(delete animal); // false

