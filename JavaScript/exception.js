// throw 構文
// throw new Error(エラーメッセージ)
let x = 1;
let y = 0;

try {
	if (y === 0) {
		throw new Error('0で割る');
	}
	let z = x / y;
} catch(e) {
	console.log(e.message);
}



// try...catch...finally 構文
/*
try {
	例外が発生するかもしれない命令(群)
} catch(例外情報を受け取る変数) {
	例外が発生した時に実行される命令(群)
} finally {
	例外の有無にかかわらず、最終的に実行される命令(群)
}
*/

// こんな感じ
let i = 1;
try{
	i = i * j; // 例外発生
} catch(e) {
	console.log(`${e.name}: ${e.message}`);
} finally {
	console.log('処理は完了しました');
}

/* 結果
ReferenceError: j is not defined
処理は完了しました
*/

// 省略もできる
const PATH = '/test/dog.dat';

openFile(PATH);
try {
	writeFile(PATH);
} finally {
	closeFile(PATH);
}

