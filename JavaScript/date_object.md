# Dateオブジェクト

日付、時刻値を操作する。

---

- 日付/時刻を生成する
```JavaScript
// 現在の時刻
let d = new Date();
console.log(d); // Sun May 21 2023 22:49:20 GMT+0900 → 現在の時刻が出る

// 年月日、時分秒の指定(月は0~11の範囲で表すこと！！)
let d = new Date(2023, 5, 21, 22, 50, 00);
console.log(d); // Wed Jun 21 2023 22:50:00 GMT+0900 (日本標準時)

// 範囲外の数値を指定した場合は自動的に繰り上げ/繰り下げが実施される
let d = new Date(2023, 5, 31, 22, 50, 00);
console.log(d); // Sat Jul 01 2023 22:50:00 GMT+0900 (日本標準時)

// 月末日を求める
let d = new Date(2023, 5, 0);
console.log(d); // Wed May 31 2023 00:00:00 GMT+0900 (日本標準時)

// 引数を省略(規定の値：日は1, 時刻は0で埋められる)
let d = new Date(2023, 5);
console.log(d); // Thu Jun 01 2023 00:00:00 GMT+0900 (日本標準時)
```

---

- Unix タイムスタンプ

タイムスタンプとは日付/時刻値を1970年1月1日00:00:00からの経過ミリ秒のこと。

タイムスタンプは単なる整数値なので、日付の加算や減算、比較などでも利用される。
```JavaScript
let d = new Date();
console.log(d.getTime()); // 1684750228537
```

---

- 日付/時刻要素を取得する
```JavaScript
let d = new Date(2023, 5, 22, 19, 20, 125);

console.log(d);                     // Thu Jun 22 2023 19:22:05 GMT+0900 (日本標準時)
console.log(d.getFullYear());       // 2023
console.log(d.getMonth());          // 5
console.log(d.getDate());           // 22
console.log(d.getDay());            // 4
console.log(d.getHours());          // 19
console.log(d.getMinutes());        // 22
console.log(d.getSeconds());        // 5
console.log(d.getMilliseconds());   // 0
console.log(d.getTime());           // 1687429325000
console.log(d.getTimezoneOffset()); // -540
```

---

- 日付/時刻要素を設定する
```JavaScript
let d = new Date();
d.setFullYear(2023);
d.setMonth(4);
d.setDate(22);
d.setHours(19);
d.setMinutes(30);
d.setMilliseconds(222);
console.log(d.toLocaleString()); // 2023/5/22 19:30:31
```

---

- 日付/時刻要素を加算/減算する

getXxxxx系のメソッドで個々の日付/時刻要素を取り出し、加算や減算した結果をsetXxxxx系のメソッドで書き戻すという流れ。
```JavaScript
let d = new Date(2023, 5, 22, 19, 40);
console.log(d);               // Thu Jun 22 2023 19:40:00 GMT+0900 (日本標準時)
d.setMonth(d.getMonth() + 3); // 3ヶ月加算！！
console.log(d);               // Fri Sep 22 2023 19:40:00 GMT+0900 (日本標準時)
d.setDate(d.getDate() - 20);  // 20日減算！！
console.log(d);               // Sat Sep 02 2023 19:40:00 GMT+0900 (日本標準時)
```

---

- 日付/時刻の差を求める
```JavaScript
let d1 = new Date(2023, 5, 22);
let d2 = new Date(2023, 2, 8);
let diff = (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)
console.log(`${diff}日の差があります!`); // -106日の差があります!
```

---

- 日付/時刻値を文字列に変換したい
```JavaScript
let d = new Date(2023, 5, 22, 19, 50, 20, 125);
console.log(d.toLocaleString());     // 2023/6/22 19:50:20
console.log(d.toLocaleDateString()); // 2023/6/22
console.log(d.toLocaleTimeString()); // 19:50:20
console.log(d.toISOString());        // 2023-06-22T10:50:20.125Z
console.log(d.toDateString());       // Thu Jun 22 2023
console.log(d.toJSON());             // 2023-06-22T10:50:20.125Z
```

---

- めちゃくちゃこまかくスタイルを定義する
```JavaScript
let d = new Date(2023, 5, 22, 20, 00, 125);
let fmt = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  weekday: 'long',
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  dayPeriod: 'short',
});
console.log(fmt.format(d)); // 2023年6月22日木曜日 夜08:02:05
```
