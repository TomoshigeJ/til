// while
while(条件式) {
	条件式がtrueである時に実行される命令(群)
}

let i = 2;
while(i < 10) {
	console.log(`iの値は${i}`);
	i++;
}

// do...while
do {
	条件式がtrueである時に実行される命令(群)
} while(条件式);

let i = 2;
do {
	console.log(`iの値は${i}`);
	i++;
} while(i < 10);

// for
for(初期化式; ループ継続条件式; 増減式) {
	ループ内で実行する命令(群)
}

for (let i = 2; i < 10; i++) {
	console.log(`iの値は${i}`);
}

// for...in
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

// for...of
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

// forEach
list.forEach(function(value, index, array) {
	statements
}, thisArg)

list       :元の配列
value      :要素値
index      :インデックス値
array      :元の配列
statements :要素に対する処理
thisArg    :コールバック関数でthisが表す値

let data = ['dog', 'rabbit', 'bear'];

data.forEach(function(value, index, array) {
	console.log(`indexは${index} : valueは${value}`);
});

/* 結果
indexは0 : valueはdog
indexは1 : valueはrabbit
indexは2 : valueはbear
*/
