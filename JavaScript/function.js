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


