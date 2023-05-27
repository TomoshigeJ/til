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