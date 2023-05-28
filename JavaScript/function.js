/* ユーザー定義関数の基本(function命令)
functon 関数名(引数, ...) {
	...任意の処理...
	return 戻り値;
}
*/
function getTriangleArea(base, height) {
	return base * height / 2;
}

let area = getTriangleArea(10, 4);
console.log(area); // 20


/* 関数名について
関数名も識別子の命名規則に従い`キャメルケース記法`で表す。
構文規則ではないが、関数としての役割がひと目で把握できるように「動詞 + 名詞」の形式で命名するのがいいみたい。
→setInformation, getTemporaryFile, updateStatus みたいな感じ
*/


/* 関数を定義するための3種の記法
function命令以外にも以下の方法でも関数を定義できる。
1：Functionコンストラクター経由で定義する
2：関数リテラルで定義する
3：アロー関数で定義する
*/


// ①Functionコンストラクター経由の定義
let getTriangleArea = new Function(
	'base',                     // 引数
	'height',                   // 引数
	'return base * height / 2;' // 関数の本体(処理)
);
console.log(getTriangleArea(10, 4));
// 特別な理由がなければ基本的に使用しない。
// Function命令にない特徴としては引数や関数本体を文字列として定義できる


// ②関数リテラルで定義する(関数式とも言う)
let getTriangleArea = function(base, height) {
	return base * height / 2;
};
console.log(getTriangleArea(10, 4));
// 関数リテラルでは名前を持たない関数を定義したうえで、変数getTriangleAreaに格納→匿名関数、無名関数とも呼ばれる


// ③アロー関数で定義する
let getTriangleArea = (base, height) => {
	return base * height / 2;
};
console.log(getTriangleArea(10, 4));
// functionキーワードを用いず、 =>(アロー)を用いる


/* 関数定義の4構文まとめ
`function 命令`
→「function 関数名」で関数名を定義できる。関数名で呼び出せる。
`Function コンストラクター`
→「new Function ();」の形。基本的に使用しない。
`関数リテラル(関数式、無名関数)`
→関数を変数に代入したり、戻り値として使用できる。
`アロー関数`
→関数リテラルをよりシンプルに記載。=>(アロー)を用いる。
*/


// 関数定義の際の注意点
// ①JavaScriptにおいて関数はデータ型の一種
function getTriangleArea(base, height) {
	return base * height / 2;
}

console.log(getTriangleArea(10, 4));
getTriangleArea = 0;
console.log(getTriangleArea);
// getTriangleAreaに関数型のリテラルを格納しているに過ぎない。その為、後から数値型などの別の型で再代入することもできる。

// ②関数の丸かっこ()は「関数を実行する」という意味を持つ
function getTriangleArea(base, height) {
	return base * height / 2;
}
console.log(getTriangleArea); // ()を省略して関数呼び出し
/* 結果
ƒ getTriangleArea(base, height) {
	return base * height / 2;
}
*/
// ()を省略するとgetTriangleAreaに格納された関数定義がそのまま文字列として呼び出されている

// ③function命令は巻き上げられる
console.log(getTriangleArea(10, 4));

function getTriangleArea(base, height) {
	return base * height / 2;
}
// 関数定義より上で関数を呼び出しているがエラーにはならない。
// function命令で宣言された関数がスコープの先頭に巻き上げられる(hoist)から。

// ④関数リテラル、アロー関数、Functionコンストラクターでは巻き上げられない
// function命令のように巻き上げは行われないので、上記のように先に呼び出すとエラーとなる。
// function命令以外の関数定義方法では実行(代入)時に評価される。


/* スコープ
グローバルスコープ：スクリプト全体
関数スコープ：関数ブロック配下
ブロックスコープ：ブロック配下
モジュールスコープ：モジュール配下
*/


// ローカル変数範囲確認
function checkScope() {
	let scope = 'blockScope'
	return scope;
}
console.log(checkScope()); // blockScope
console.log(scope);        // エラー表示
// 関数(ブロック)内で宣言されたscopeはブロックの外から参照するとエラーになる。
// 戻り値経由で受け渡しすればブロック外からも参照できる。(関数を呼び出すことによって)


// ブロックスコープからグローバル変数は参照できる
let scope = 'globalScope';
function checkScope() {
	return scope;
}
console.log(checkScope()); // globalScope
console.log(scope);        // globalScope


/* グローバルスコープの有効範囲
グローバル変数のスコープはファイル間も超える。
同一ページで複数のjsファイルをインポートした場合、一方のjsファイルから他のjsファイルで定義された変数にもアクセスができる。
グローバル変数同士の衝突はバグの原因になりかねないので、グローバル変数は極力使用を避けるべき。→モジュールやコード全体をブロックで括るなどがよい。
*/


// スコープ間での識別子(変数名)の衝突
let scope = 'globalScope';
function getValue() {
	let scope = 'blockScope';
	return scope;
}
console.log(getValue()); // blockScope
console.log(scope);      // globalScope
// スコープが異なる変数は、名前が同じであっても異なる変数と見なされる→scopeの値がblockScopeで上書きされるわけではない


// 仮変数のスコープ(基本型)
let value = 10;
function decrement(value) {
	value--;
	return value;
}
console.log(decrement(value)); // 9
console.log(value);            // 10
// 変数valueと仮引数のvalueは別物。よって関数内の仮引数への操作で元のvalueに影響はない

// これが配列の場合(参照型)
let value = [1, 2, 4, 8, 16];
function updateArray(value) {
	value.pop();
	return value;
}
console.log(updateArray(value)); // [1, 2, 4, 8]
console.log(value);              // [1, 2, 4, 8]
// 参照型は値そのものではなく、値を格納したメモリ上の場所(参照値)だけを格納している型の為、参照値の値の受け渡しする場合には渡される値も参照値となる。


// 配列そのものを置き換えた場合は結果が変化する
let value = [1, 2, 4, 8, 16];
function updateArray(value) {
	value = []
	return value;
}
console.log(updateArray(value)); // []
console.log(value);              // [1, 2, 4, 8, 16]
// この場合は参照値そのものが変わっている為、実引数の変数valueの参照先に変化はない。


// var 命令のスコープ
{
	var scope = 'john';
}
console.log(scope);
// varはブロックスコープを持たないのでエラーにならない。→関数ブロックでのみスコープを持つ


// 即時関数
(function() {
	var scope = 'john';
	console.log(scope); // john
}).call(this);

console.log(scope);   // エラー表示
/*
varで定義したスコープを必要最低限に留める方法。
`.call(this);` はスコープの枠組みとして作った匿名関数を定義後すぐに実行している
→ファイル全体を関数で括っているようなコードもある
*/


// JavaScriptは引数の数をチェックしない
function showValue(value) {
	console.log(value);
}
showValue();                // undefined
showValue('John');          // John
showValue('John', 'John2'); // John
/*
showValueでは引数を1つ受け取るが引数を何個でも渡せる。
→与える引数の数が関数側で要求する数と異なる場合もこれをチェックしない
引数の数が多い場合も切り捨てられているわけではなく、`argumentsオブジェクト`に引数の値を保持する。
*/
// argumentsオブジェクトを利用し、引数チェックのようなことはできる
function showValue(value) {
	if (arguments.length !== 1) {
		throw new Error(`引数の数が間違っています：${arguments.length}`);
	}
	console.log(value);
}

try {
	showValue('John', 'John2');
} catch(e) {
	console.log(e.message);
}
// 引数の数が間違っています：2


// 引数の規定値を設定する
function getTriangleArea(base = 10, height = 5) {
	return base * height / 2;
}
console.log(getTriangleArea());        // 25
console.log(getTriangleArea(4));       // 10
console.log(getTriangleArea(100, 50)); // 2500


// 可変長引数の関数
function sum(...nums) {
	let result = 0;
	for (let num of nums) {
		if (typeof num !== 'number') {
			throw new Error(`指定値が数値ではありません：${nums}`);
		}
		result += num;
	}
	return result;
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, a, 3, 4, 5)); // エラー


// スプレッド構文による引数の展開
console.log(Math.max(...[28, 0, 15, 1, 300])); // 300
// Math.maxメソッドは可変長引数を受け取る。配列をそのまま渡すと展開することができずNaNになってしまう。


// 名前付き引数
function showD({
	content = '',
	title = 'My Dialog',
	width = 100,
	height = 100,
	position = 'center',
	modal = false
}) {
	console.log(`content: ${content}`);
	console.log(`title: ${title}`);
	console.log(`width: ${width}`);
	console.log(`height: ${height}`);
	console.log(`position: ${position}`);
	console.log(`modal: ${modal}`);
}

showD({
	content: 'こんてんと',
	modal: true
});
// →{プロパティ名 = 規定値 , …}の形


/* 複数の戻り値を返したい
return命令ではreturn x, y のように複数の値を返すことはできない。
この場合は一旦戻り値を配列やオブジェクトとして束ねる必要がある。
*/
function getMaxMin(...nums) {
	return [Math.max(...nums), Math.min(...nums)]
}

let result = getMaxMin(10, 0, 28, 15, -28, 99);
console.log(result); // [99, -28]

let [max, min] = getMaxMin(10, 0, 28, 15, -28, 99);
console.log(max, min); // 99 -28


/* 再帰関数
再帰関数(Recursive Function)とは、ある関数が自分自身を呼び出すこと、または、そのような関数自体のこと。
*/
// 例：階乗計算(階乗とは1~nの総積のこと)
function factorial(n) {
	if (n != 0) { return n * factorial(n - 1); }
	return 1;
}

console.log(factorial(5)); // 120(5 * 4 * 3 * 2 * 1 * 1 = 120)
// 再帰関数では再帰の終了点を忘れないことに注意が必要！(無限ループ注意)→自然数が0である場合にreturn 1 で終了させている


/* 高階関数
高階関数とは関数を引数、戻り値として扱う関数のこと。→関数はあくまでデータ型の1つ(JavaScriptでは)
*/
// 例1：forEachメソッドのようなやつを関数で
// 高階関数のarrayWalkを定義
function arrayWalk(data, callback) {
	for (let [key, value] of data.entries()) {
		callback(value, key) // 引数callbackで指定された関数を呼び出す
	}
}

// 配列を処理するためのユーザー定義関数
function showElement(value, key) {
	console.log(`${key}: ${value}`);
}

// 高階関数の引数にユーザー定義関数を
let list = [1, 2, 4, 8, 16];
arrayWalk(list, showElement);
/* 結果
0: 1
1: 2
2: 4
3: 8
4: 16
*/


// 例2：高階関数(arrayWalk)は書き換えずに引数の関数を変えてみる
// 高階関数のarrayWalkを定義(ここは同じ)
function arrayWalk(data, callback) {
	for (let [key, value] of data.entries()) {
		callback(value, key) // 引数callbackで指定された関数を呼び出す
	}
}

// 違うユーザー定義関数
let result = 0;
function sumElement(value, key) {
	result += value;
}

// 使ってみる
let list = [1, 2, 4, 8, 16];
arrayWalk(list, sumElement);
console.log(result); // 31


/* 「使い捨ての関数」は匿名関数で
例1、例2では高階関数に渡すことを目的とする為にユーザー定義関数を前もって定義して渡した。
が、もしその場限りで使い捨ての場合に名前をつけることは無駄なので、匿名関数をそのまま渡してやればいい。無駄なコード、変数定義を減らすことができる。
*/
// 例1のやつを匿名関数で(結果は同じ)
// 高階関数のarrayWalkを定義(ここは同じ)
function arrayWalk(data, callback) {
	for (let [key, value] of data.entries()) {
		callback(value, key) // 引数callbackで指定された関数を呼び出す
	}
}

// arrayWalk呼び出し時に直接匿名関数を渡す
let list = [1, 2, 4, 8, 16];
arrayWalk(
	list,
	function (value, key) {
		console.log(`${key}: ${value}`);
	}
);


// アロー関数の場合(例1を書き換える)
// 高階関数のarrayWalkを定義(ここは同じ)
function arrayWalk(data, callback) {
	for (let [key, value] of data.entries()) {
		callback(value, key) // 引数callbackで指定された関数を呼び出す
	}
}

// アロー関数にて
let list = [1, 2, 4, 8, 16];
arrayWalk(list, (value, key) => console.log(`${key}: ${value}`));


/* タグ付きテンプレート文字列
テンプレート文字列：バックスラッシュ`` を利用して文字列に変数を埋め込むやつ */
// 与えられた文字列をエスケープ処理
function escapeHtml(str) {
	if (!str) { return ''; }
	str = str.replaceAll(/&/g, '&amp;');
	str = str.replaceAll(/</g, '&lt;');
	str = str.replaceAll(/>/g, '&gt;');
	str = str.replaceAll(/"/g, '&quot;');
	str = str.replaceAll(/'/g, '&#39;');
	return str;
}

// 分解されたtemplatesとvaluesを順に連結(valuesはescapeHtml関数でエスケープ)
function e(templates, ...values) {
	let result = '';
	for (let [i, temp] of templates.entries()) {
		result += temp + escapeHtml(values[i]);
	}
	return result;
}

// テンプレート文字列をエスケープ処理
let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは、${name}さん!`);
// => こんにちは、&lt;&quot;Mario&quot; &amp; &#39;Luigi&#39;&gt;さん!
/*
→引数として「テンプレート文字列(分解したも)」と「埋め込む変数(可変長引数)」
→戻り値として加工済みの文字列を返すこと
この2点の条件が必要となる。
templates：[0]が「こんにちは、」 [1]が「さん！」
values：[0]が「name(= <”Mario” & \‘Luigi\’>」
このvaluesをエスケープ処理(加工)して再度連結させた結果を返している。
→templates[0] + values[0]を加工したもの + templates[1]
*/

/* 補足：String.rawメソッド
標準ライブラリにもテンプレート文字列を修飾することを意図したタグ関数(メソッド)が用意されている。*/
// 文字リテラルでWindowsのパス文字列を表現するのは面倒
console.log(`C:\data\jsbook\chap06`);
// => C:datajsbookchap06(エスケープシーケンスとみなされる)

console.log(`C:\\data\\jsbook\\chap06`);
// => C:\data\jsbook\chap06 (\を\\としなければならない)

// String.rawでは楽ちん
console.log(String.raw`C:\data\jsbook\chap06`);
// => C:\data\jsbook\chap06 (いいね)
// →無視されるのは「\xx」の形のみ(${式展開}は認識される)


/* スコープチェーン
グローバルスコープはJavaScript実行時に常に生成されるスコープ。
その他はブロックに準じてスコープが形成される。
スコープチェーンとは、これらのスコープが階層順に連結されたリストのことをいう。
スコープチェーンの先頭に位置するスコープから順に変数を検索し、マッチする変数がはじめて見つかったところでその値を採用している。
*/
let y = 'Global John';

function outerFunc() {
	let y = 'Local Outer John';

	function innerFunc() {
		let z = 'Local Inner John';
		console.log(z); // Local Inner John
		console.log(y); // Local Outer John
		console.log(x); // Uncaught ReferenceError: x is not defined
	}
	innerFunc();
}

outerFunc();
// この場合ではinnerFunc(最内側)のスコープからouterFuncのスコープ、グローバルスコープの順に指定された変数を検索している。


// スコープチェーンが確定するタイミングは？
let scope = 'Global John';

function scope1() {
	console.log(scope);
}

function scope2() {
	let scope = 'Local Scope2 John';
	scope1();
}

scope1(); // Global John
scope2(); // Global John
/*
scope2関数で新たにscope変数を定義しているにも関わらずグローバル変数がみている。
これはスコープチェーンは関すを定義したところで決定する為。
scope1関数がどこで呼び出されようと、形成されるスコープチェーンはscope1(関数スコープ)→グローバルスコープの順になる。
スコープが定義された場所によって決まる性質を`レキシカルスコープ`という。
*/


/* その振る舞いオブジェクトの如し…クロージャ
クロージャとは「ローカル変数を参照している関数内関数」のこと。*/
function closure(init) {
	let counter = init;

	return function() {
		return ++counter;
	}
}

let myClosure = closure(1);
console.log(myClosure()); // 2
console.log(myClosure()); // 3
console.log(myClosure()); // 4
/*
closure関数の戻り値は数値をインクリメントする為の匿名関数。
closure関数から返された匿名関数がローカル変数のcounterを参照し続けている。
その為、closure関数の終了後もローカル変数counterは破棄されずに保持され続ける。
戻り値である匿名関数が表すローカルスコープ→closure関数が表すローカルスコープ→グローバルスコープ…というスコープチェーンが、匿名関数が有効である間は保持されている。
クロージャとは一種の記憶域を提供するような仕組みのイメージ。
*/


