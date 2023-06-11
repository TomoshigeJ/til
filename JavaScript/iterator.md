# イテレーター

イテレーターとはオブジェクトの内容を列挙する仕組みのこと。

Array, String, Map, Setなどの組み込みオブジェクトが、for…of 命令で配下の要素を列挙できるのは既定でイテレーターを備えている為。

```JavaScript
// Array
let ary = ['D', 'O', 'G'];
for(let i of ary) {
  console.log(i);
}

// String
let str = 'DOG'
for(let i of str) {
  console.log(i);
}

// Map
let map = new Map([['one', 'D'], ['two', 'O'], ['three', 'G']]);
for(let i of map) {
  console.log(i);
}
```

---

- ジェネレーター

反復可能なオブジェクトを実装できる。

```JavaScript
function* myGenerator() {
  yield 'd';
  yield 'o';
  yield 'g';
}

for(let i of myGenerator()) {
  console.log(i);
}
```
1：function* {…} で定義

2：yield命令で値を返す

yieldはreturnとよく似た命令で、関数の値を呼び出し元に返す。

return命令はその場で関数を終了するのに対して、yield命令は処理を一時停止するだけ。

→呼び出された時にその時点から処理を再開する
