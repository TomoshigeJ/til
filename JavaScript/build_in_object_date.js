// 現在の日付/時刻を生成する
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
console.log(d);  // Wed May 31 2023 00:00:00 GMT+0900 (日本標準時)

