- 優先順位の高い順
```
かっこ：()
配列：[]
new
後置インクリメント(++), 後置デクリメント(--)
前置インクリメント, 前置デクリメント, 単項マイナス(-), 単項(+), 反転(~), 否定(!), await, delete, typeof, void
べき乗(**)
乗算(*), 除算(/), 余求める(%)
加算(+), 減算(-), 文字列連結(+)
シフト(<<, >>, <<<)
比較(<系), instanceof, in
等価(==系), 不等価(!=系)
AND(&)
XOR(^)
OR(|)
論理積(&&)
論理和(||)
Null 合体(??)
条件(?:)
代入(=), 複合代入(+=系)
yield
カンマ(,)
```

- 左から右に処理していくパターン
```
算術演算子：+, -, *, /, %
比較演算子：< <=, ==, !=, など
論理演算子：&&, ||
ビット演算子：<<, >>, <<<, &, |, ^
Null 合体：??
その他：. , [] () instanseof, in
```

- 右から左に処理していくパターン
```
算術演算子：++, --, **
代入演算子：=, +=, -=, など
論理演算子：!
ビット演算子：~
条件演算子：?:
その他：-(符号反転), +(無演算), await, delete, typeof, void, yield, new
```

- delete 演算子
```JavaScript
let data = ['dog', 'rabbit', 'bear'];
console.log(delete data[0]); // true
console.log(data);           // [empty, 'rabbit', 'bear']
console.log(data.length);    // 3
```

- プロパティの要素削除
```JavaScript
let frameworks = { ruby: 'rails', javascritp: 'Next.js' };
console.log(delete frameworks.ruby); // true
console.log(frameworks);             // {javascritp: 'Next.js'}
console.log(delete frameworks.dog);  // true

let member = { name: 'John', type: 'dog', master: frameworks };
console.log(delete member.master);   // true
console.log(member);                 // {name: 'John', type: 'dog'}
console.log(frameworks);             // {javascritp: 'Next.js'}
```

- 変数は削除できない
```JavaScript
let animal = 'dog';
console.log(delete animal); // false
```

- typeof 演算子
```JavaScript
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
```

- 型の変換
```JavaScript
console.log(Boolean('じょん')); // true
console.log(String('じょん'));  // じょん
console.log(Number('じょん'));  // NaN
```
