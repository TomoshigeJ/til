- while
```JavaScript
while(条件式) {
	条件式がtrueである時に実行される命令(群)
}

let i = 2;
while(i < 10) {
	console.log(`iの値は${i}`);
	i++;
}
```

- do...while
```JavaScript
do {
	条件式がtrueである時に実行される命令(群)
} while(条件式);

let i = 2;
do {
	console.log(`iの値は${i}`);
	i++;
} while(i < 10);
```

- for
```JavaScript
for(初期化式; ループ継続条件式; 増減式) {
	ループ内で実行する命令(群)
}

for (let i = 2; i < 10; i++) {
	console.log(`iの値は${i}`);
}
```

- for...in
```JavaScript
for (仮変数 in 連想配列) {
	ループ内で実行する処理(群)
}

let data = {
	name : 'じょん',
	age : 10,
	type : 'dog'
};

for (let key in data) {
	console.log(`${key} = ${data[key]}`);
}
/* 結果
name = じょん
age = 10
type = dog
*/
```

- for...of
```JavaScript
for (仮変数 of 反復可能なオブジェクト) {
	ループ内で実行する命令(群)
}

let data = ['dog', 'rabbit', 'bear'];

for (let value of data) {
	console.log(value);
}
/* 結果
dog
rabbit
bear
*/
```

// forEach
/* 
list.forEach(function(value, index, array) {
	statements
}, thisArg)

list       :元の配列
value      :要素値
index      :インデックス値
array      :元の配列
statements :要素に対する処理
thisArg    :コールバック関数でthisが表す値
*/

let data = ['dog', 'rabbit', 'bear'];

data.forEach(function(value, index, array) {
	console.log(`indexは${index} : valueは${value}`);
});

/* 結果
indexは0 : valueはdog
indexは1 : valueはrabbit
indexは2 : valueはbear
*/


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
