/* 正規表現の基本
URLを表す正規表現パターン(一例)
http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?

`http(s)?://の(s)?`
→sという文字が0または1回登場する=http:// もしくはhttps:// のどちらか
`([\w-]+\.)+[\w-]`
→英数字、アンダースコア、ハイフンで構成される文字列かつ途中にピリオドを含む
`(/[\w- ./?%&=]*)?`
→/後の後続文字列が英数字、アンダースコア、ハイフン、スラッシュ、ピリオドその他特殊文字(?, %, &, =)を含む文字列で構成されることを表す
*/


/* RegExpオブジェクトの生成
new RegExp(pattern, opts) →コントラクター
/pattern/opts →リテラル
	pattern:正規表現パターン
	opts   :動作オプション

~ 動作オプション一覧~
g:文字列全体に対してマッチ(無指定の場合、一度マッチしたら処理を終了)
i:大文字小文字を区別
m:複数行検索に対応
s:「.」が行末文字に含む任意の文字にマッチする(単一行モード)
u:Unicode対応
d:マッチング範囲を記録
y:lastIndexプロパティで指定した位置からのみマッチする

正規表現リテラルでは、正規表現パターン全体をスラッシュ(/)で括る。
opts(動作オプション)は省略、または複数の指定が可能。
①`コンストラクター構文では「\」をエスケープする`
文字列リテラルで「\」はエスケープシーケンスを意味する為、例えば「\w」を認識させたい時は「\\w」のようにエスケープする必要あり。
②`正規表現リテラルでは「/」をエスケープする`
正規表現リテラルでは「/」は正規表現パターンの開始と終了を意味する。
正規表現パターンに「/」を含む場合は「\/」のようにエスケープが必要。
*/


// 正規表現パターンにマッチしたかを判定する
let re = /[0-9]{3}-[0-9]{4}/;
let str1 = '郵便番号は123-4567です。';
let str2 = '私の名前はじょん';
console.log(re.test(str1)); // true
console.log(re.test(str2)); // false


// 完全一致、前方一致、後方一致の場合
// 文字列の先頭「^」, 文字列の末尾「$」
// 完全一致
let re = /^[0-9]{3}-[0-9]{4}$/;
let str1 = '123-4567';
let str2 = '郵便番号は123-4567です。';
console.log(re.test(str1)); // true
console.log(re.test(str2)); // false

// 前方一致
let re = /^[0-9]{3}-[0-9]{4}/;
let str1 = '123-4567じょん';
let str2 = '郵便番号は123-4567です。';
console.log(re.test(str1)); // true
console.log(re.test(str2)); // false

// 後方一致
let re = /[0-9]{3}-[0-9]{4}$/;
let str1 = 'じょん123-4567';
let str2 = '郵便番号は123-4567です。';
console.log(re.test(str1)); // true
console.log(re.test(str2)); // false


// 文字の登場位置を取得する
let re = /[0-9]{3}-[0-9]{4}/;
let str1 = '郵便番号は123-4567です。';
let str2 = '私の名前はじょん';
console.log(str1.search(re)); // 5
console.log(str2.search(re)); // -1 (該当なしは-1)


// 正規表現パターンにマッチした文字列を取得する
let re = /[0-9]{3}-[0-9]{4}/g;
let str = 'じょんの郵便番号は123-4567です。以前の郵便番号は456-1234でした。';
console.log(str.match(re)); // ['123-4567', '456-1234']

// オプションgをつけなかったら付随情報がプラスされる
let re = /[0-9]{3}-[0-9]{4}/;
let str = 'じょんの郵便番号は123-4567です。以前の郵便番号は456-1234でした。';
console.log(str.match(re));
// ['123-4567', index: 9, input: 'じょんの郵便番号は123-4567です。以前の郵便番号は456-1234でした。', groups: undefined]i


// サブマッチ文字列
// 正規表現パターンの中で丸かっこで示された箇所に合致した部分文字列のこと。
let re = /(\d{3})-(\d{4})-(\d{4})/;
let str = '携帯番号は050-1234-5678';
console.log(str.match(re));
// ['050-1234-5678', '050', '1234', '5678', index: 5, input: '携帯番号は050-1234-5678', groups: undefined]


// 正規表現で文字列を置き換える
let re = /(\d{3})-(\d{4})-(\d{4})/;
let str = '携帯番号は050-1234-5678';
console.log(str.replace(re, '$1($2)$3'));
// 携帯番号は050(1234)5678


// URLを<a>タグに置き換える
let re = /http(s)?:\/\/([\w-]+\.)+(\w)+(\/[\w .\/?%&=]*]*)?/gi;
let str = 'GitHubはhttps://github.com/TomoshigeJです。';

console.log(str.replace(re, '<a href="$&">リンク</a>'));
// GitHubは<a href="https://github.com/TomoshigeJ">リンク</a>です。


// 正規表現パターンのグループを名前付けする
let re = /(?<area>0\d{1,3})-(?<city>\d{2,4})-(?<local>\d{3,4})/;
let str = 'オフィスの電話番号は000-111-2222です。';

let result = str.match(re);
console.log(`area：${result.groups.area}`);   // area：000
console.log(`city：${result.groups.city}`);   // city：111
console.log(`local：${result.groups.local}`); // local：2222
