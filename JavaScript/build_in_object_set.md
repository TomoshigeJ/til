# Setオブジェクト

重複しない値の集合を操作する。

Set(セット)は配列と同じく、複数の値を束ねるためのオブジェクト。

配列と異なり、順番と重複した値を許さない。

---

- セットの初期化関連

```JavaScript
new Set(iterable)
  iterable:反復可能なオブジェクト(配列など)
```
→セットに設定すべき値を配列、マップなどの反復可能なオブジェクトとして渡す

→引数に重複がある場合、重複は削除される(一意となる)

```JavaScript
let s = new Set([1, 5, 10, 100, 10]);
console.log(s); // Set(4) {1, 5, 10, 100}
```

- セットを配列に戻す時はスプレッド構文を利用する

```JavaScript
let s = new Set([1, 5, 10, 100, 10]);
console.log([...s]); // [1, 5, 10, 100]
```

- セットの値を追加 / 削除する

```JavaScript
let s = new Set();
// 追加
s.add(1).add(10).add(100).add(10);
console.log(s); // {1, 10, 100}
// 削除
s.delete(10);
console.log(s); // {1, 100}
```

- セットの内容を取得 / 確認

```JavaScript
// hasメソッドで有無を確認
let s = new Set([1, 2, 3]);
console.log(s.has(0)); // false
console.log(s.has(1)); // true
// すべての値を取得
let s = new Set([1, 2, 3]);
s.forEach(function(val, key, set) {
	console.log(val); // 1 → 2 → 3
	console.log(key); // 1 → 2 → 3
	console.log(set); // {1, 2, 3} が3回
});

// for...ofメソッドでも
for(let v of s) {
	console.log(v);
}
```
