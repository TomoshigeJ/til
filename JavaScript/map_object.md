# Mapオブジェクト

連想配列を操作する。

連想配列(ハッシュ)はキーと値んのセット。

---

- マップの初期化
```JavaScript
new Map([[key, value], ...])
  key:  キー
  value:値
```
```JavaScript
let data = new Map([
  ['1st', 'ファースト'],
  ['2nd', 'セカンド'],
  ['3rd', 'サード'],
]);
console.log(data); // {'1st' => 'ファースト', '2nd' => 'セカンド', '3rd' => 'サード'}
```

---

- マップの値を設定 / 取得
```JavaScript
let data = new Map();
data.set(1, 'dog').set(2, 'rabbit').set(3, 'bear');
console.log(data.get(2)); // rabbit
```

---

- マップから既存キーを削除する
```JavaScript
let data = new Map();
data.set(1, 'dog').set(2, 'rabbit').set(3, 'bear');
console.log(data.delete(2)); // true
console.log(data);           // {1 => 'dog', 3 => 'bear'}

// 全消しする
data.clear();
console.log(data); // {size: 0}[[Entries]]No propertiessize: 0[[Prototype]]: Map
```

---

- マップから全てのキー/値を取得する

keys：すべてのキーを取得

values： すべての値を取得

→それぞれの戻り値はイテレーターの為配列ではない。

→配列を取得したい場合はfromメソッドを使用する
```JavaScript
let data = new Map();
data.set(1, 'dog').set(2, 'rabbit').set(3, 'bear');

for (let k of data.keys()) {
  console.log(k);
}

for (let v of data.values()) {
  console.log(v);
}

for (let [k, v] of data.entries()) {
  console.log(`kの値は${k}、vの値は${v}`);
}
```

---

- 配列化する前とした後
```JavaScript
console.log(data.keys());             // MapIterator {1, 2, 3}
console.log(Array.from(data.keys())); // [1, 2, 3]
```

---

- マップの内容を順に処理するならforEach メソッドも利用できる
```JavaScript
let data = new Map();
data.set(1, 'dog').set(2, 'rabbit').set(3, 'bear');

data.forEach(function(v, k) {
  console.log(`kの値は${k}、vの値は${v}`);
});
```

---

- マップのサイズを取得
```JavaScript
let data = new Map();
data.set(1, 'dog').set(2, 'rabbit').set(3, 'bear');
console.log(data.size); // 3
```
