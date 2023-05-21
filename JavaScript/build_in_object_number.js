/*
- Numberオブジェクトの定数
`POSITIVE_INFINITY`：正の無限大 
`NEGATIVE_INFINITY`：不の無限大
→JavaScriptでは表現可能な数値の範囲を超えた場合の戻り値として利用される

`NaN`：Not a Number → 数値として表現できない
→NaNは自分自身を含む全ての数値と等しくない性質を持つ
→NaNかどうか判断する際は`Number.isNaNメソッド`を使用する

`MAX_SAFE_INTEGER / MIN_SAFE_INTEGER`
→JavaScriptで安全に演算できる範囲の整数値の上限と下限を表す
→上限下限を超えた演算は結果も保証されない
→より大きな整数を演算するには`BigInt`の利用を検討する
*/


// toXxxxxx メソッド：数値形式を変換する
// それぞれの数値を指数形式に変換したり、特定の桁数に揃える為に使用する。
let num1 = 255;
console.log(num1.toString(16)); // ff
console.log(num1.toString(8));  // 377

let num2 = 123.45678;
console.log(num2.toExponential(2)); // 1.23e+2
console.log(num2.toFixed(3));       // 123.457
console.log(num2.toFixed(7));       // 123.4567800
console.log(num2.toPrecision(10));  // 123.4567800
console.log(num2.toPrecision(6));   // 123.457


// parseFloat / parseInt メソッド & Number 関数：文字列を数値に変換する
let n = '123xxx';
console.log(Number(n));            // NaN
console.log(Number.parseFloat(n)); // 123
console.log(Number.parseInt(n));   // 123

let d = new Date();
console.log(Number(d));            // 1684674080226
console.log(Number.parseFloat(d)); // NaN
console.log(Number.parseInt(d));   // NaN


/*
Math オブジェクト：基本的な数学演算を実行する
Number関数は数値型の値を直接操作するためのオブジェクト。
数学的な演算機能はMathオブジェクトによって提供される。
*/
// 絶対値
console.log(Math.abs(-123)); //123

// 最大値を求める
console.log(Math.max(10, 99, 28)); // 99

// 四捨五入
console.log(Math.round(3.14));  // 3

// 他にもたくさんある



