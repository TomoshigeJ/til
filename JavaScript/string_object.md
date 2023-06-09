# String オブジェクト

文字列型(string)の値を扱う為のラッパーオブジェクト。

---

lengthプロパティ
```JavaScript
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
```

大文字小文字の変換
```JavaScript
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
```

部分文字列の取得
```JavaScript
let str = 'SuperJohnプロジェクト';

console.log(str.charAt(9));        // プ
console.log(str.substring(9));     // プロジェクト 
console.log(str.substring(9, 12)); // プロジ
console.log(str.slice(9));         // プロジェクト
console.log(str.slice(9, 12));     // プロジ

console.log(str.substring(12, 9)); // プロジ
console.log(str.slice(12, 9));     // (空文字)

console.log(str.substring(9, -2)); // SuperJohn
console.log(str.slice(9, -2));     // プロジェ
```

文字列の検索
```JavaScript
let str = 'じょん、わたしのなまえはすーぱーじょんです'

console.log(str.indexOf('じょん'));     // 0
console.log(str.lastIndexOf('じょん')); // 16

console.log(str.indexOf('ぴょーん'));     // -1
console.log(str.lastIndexOf('ぴょーん')); // -1

console.log(str.indexOf('じょん', 5));     // 16
console.log(str.lastIndexOf('じょん', 5)); // 0

console.log(str.indexOf('', 5));     // 5
console.log(str.lastIndexOf('', 5)); // 5

console.log(str.indexOf('じょん', -5));     // 0
console.log(str.lastIndexOf('じょん', -5)); // 0

console.log(str.indexOf('じょん', 20));     // -1
console.log(str.lastIndexOf('じょん', 20)); // 16

// 大文字と小文字は区別される
let str = 'Hello, World!!';
console.log(str.indexOf('world')); 
// => -1 (小文字worldは見つからない)

console.log(str.toLowerCase().indexOf('world'.toLowerCase()));
// => 7 (小文字で揃える)
```

indexOfメソッドの応用(文字列の出現回数をカウントする)
```JavaScript
let str = 'じょんは言いました。私の名前はじょん。じょんです。じょーんじょん。';
let count = 0;
let keywd = 'じょん'
let pos = str.indexOf(keywd);

// マッチする文字列がなくなったらループを終了する
while (pos != -1) {
  count++;
  // 前回のマッチ位置から検索を再開
  pos = str.indexOf(keywd, pos + keywd.length);
}

console.log(`${count}件がヒットしました！`);
// => 4件がヒットしました！
```

---

- `includes, startsWith, endsWith メソッド`

文字列に特定の部分文字列が含まれているか判定

includes：部分一致

startsWith：前方一致

endsWith：後方一致

```JavaScript
let str = 'じょんのエサは高級ドックフード'

console.log(str.includes('じょん'));   // true
console.log(str.startsWith('じょん')); // true
console.log(str.endsWith('じょん'));   // false

console.log(str.includes('フード'));   // true
console.log(str.startsWith('フード')); // false
console.log(str.endsWith('フード'));   // true
```

---

- 引数の違い

includesとstartsWith：検索開始位置

endsWith：検査対象となる文字列の長さ

```JavaScript
let str = 'じょんのエサは高級ドックフード'

console.log(str.includes('エサ', 6));   // false
console.log(str.startsWith('エサ', 6)); // false
console.log(str.endsWith('エサ', 6));   // true

console.log(str.includes('エサ', 4));   // true
console.log(str.startsWith('エサ', 4)); // true
console.log(str.endsWith('エサ', 4));   // false
```

- `trim, trimStart, trimEnd`：文字列の前後から空白を除去

空白以外にも以下に該当するものは除去される

→タブ文字(\t, \v)

→改行文字(\r, \n)

→フォームフィード(\f)

→全角空白

---

- replace, replaceAll：文字列を置き換える
```JavaScript
let str = 'スーパーじょんとノーマルじょん'

console.log(str.replace('じょん', 'John'));
// => スーパーJohnとノーマルじょん
console.log(str.replaceAll('じょん', 'John'));
// => スーパーJohnとノーマルJohn
```

---

- split：文字列を分割
```JavaScript
str.split(sep [, limit])
  str   :対象の文字列
  sep   :区切り文字
  limit :分割回数の上限
```
```JavaScript
let str = 'いぬ\tうさぎ\tくま\t';

console.log(str.split('\t'));   // ['いぬ', 'うさぎ', 'くま', '']
console.log(str.split('\n'));   // ['いぬ\tうさぎ\tくま\t']
console.log(str.split());       // ['いぬ\tうさぎ\tくま\t']
console.log(str.split('\t',2)); // ['いぬ', 'うさぎ']
```

---
 
- padStart, padEnd：文字列の前方(後方)にそれぞれの文字列が指定長になるよう補足
```JavaScript
str.padStart(targetLength[, padString])
str.padEnd(targetLength[, padString])
  str          :対象の文字列
  targetLength :最終的な文字列長
  padString    :補う文字(省略すると空白で補う)
```
```JavaScript
let str = '123.45'

console.log(str.padStart(10));      //     123.45 (前に空白4つ)
console.log(str.padStart(10, '0')); // 0000123.45
console.log(str.padEnd(10, '0'));   // 123.450000
```

---

- repeat：文字列をn回繰り返したものを取得
```JavaScript
str.repeat(count)
  str :元の文字列
  count :繰り返し回数
```
```JavaScript
let str = 'じょん';

console.log(str.repeat(5));   // じょんじょんじょんじょんじょん
console.log(str.repeat(0));   // (空文字)
console.log(str.repeat(2.8)); // じょんじょん
console.log(str.repeat(-5));  // Uncaught RangeError: Invalid count value: -5
```

---

- normalize：文字列をUnicode正規化する
```JavaScript
str.normalize(form)
  str  :対象の文字列
  form :正規化の形式(NFD, NFC, NFKD, NFKCのいずれか)

NFD(正規分解):文字を正規マッピングというルールで分解した後、正規順序で並べること
NFC(正規合成):正規分解した結果を再度合成する
NFKD(互換分解):文字を正規/互換マッピングというルールで分解した後、正規順序で並べること
NFKC(互換合成):互換分解した結果を再度合計
```
```JavaScript
let type = ['NFD', 'NFC', 'NFKD', 'NFKC'];
let list = ['ギガ', 'キ゛カ゛', 'ｷﾞｶﾞ', '㌐'];

for (let t of type) {
  console.log(`・${t}`);
  for (let l of list) {
    console.log(`${l} => ${l.normalize(t)}`);
  }
}

/* 結果
・NFD
ギガ => ギガ
キ゛カ゛ => キ゛カ゛
ｷﾞｶﾞ => ｷﾞｶﾞ
㌐ => ㌐
・NFC
ギガ => ギガ
キ゛カ゛ => キ゛カ゛
ｷﾞｶﾞ => ｷﾞｶﾞ
㌐ => ㌐
・NFKD
ギガ => ギガ
キ゛カ゛ => キ ゙カ ゙
ｷﾞｶﾞ => ギガ
㌐ => ギガ
・NFKC
ギガ => ギガ
キ゛カ゛ => キ ゙カ ゙
ｷﾞｶﾞ => ギガ
㌐ => ギガ
*/
```
