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


// 部分文字列の取得
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


// 文字列の検索
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

// indexOfメソッドの応用(文字列の出現回数をカウントする)
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


