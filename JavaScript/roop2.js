// break 命令：ループを途中で終了する
let i = 1;
let result = 0;

for (i = 1; i <= 100; i++) {
	result += i;
	if (result > 1000) { break; }
}

console.log(`合計値が1000を超える時のiは ${i}`);
// => 合計値が1000を超える時のiは 45


// continue 命令：特定の周回をスキップする
let result = 0;

for (let i = 1; i < 100; i++) {
	if (i % 2 === 0) { continue; }
	result += i;
}

console.log(`変数iを1~100の間で奇数のみ加算した合計は ${result}`);
// => 変数iを1~100の間で奇数のみ加算した合計は 2500


// 内側ループのみbreak
for (let i = 1; i < 10; i++) {
	for (let j = 1; j < 10; j++) {
		let result = i * j;
		if (result > 30) { break }
		document.write(`${result} `);
	}
	document.write('<br />');
}

/* 結果
1 2 3 4 5 6 7 8 9
2 4 6 8 10 12 14 16 18
3 6 9 12 15 18 21 24 27
4 8 12 16 20 24 28
5 10 15 20 25 30
6 12 18 24 30
7 14 21 28
8 16 24
9 18 27
*/


// 一気にbreak
kuku:
for (let i = 1; i < 10; i++) {
	for (let j = 1; j < 10; j++) {
		let result = i * j;
		if (result > 30) { break kuku; }
		document.write(`${result} `);
	}
	document.write('<br />');
}

/* 結果
1 2 3 4 5 6 7 8 9
2 4 6 8 10 12 14 16 18
3 6 9 12 15 18 21 24 27
4 8 12 16 20 24 28
*/
