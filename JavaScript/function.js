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


