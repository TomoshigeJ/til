// 要素の追加や削除
let ary = ['dog', 'rabbit', 'bear'];
ary.unshift('new_dog');   // 先頭に追加
ary.push('dog2', 'dog3'); // 2つ追加もできる

console.log(ary); // ['new_dog', 'dog', 'rabbit', 'bear', 'dog2', 'dog3']

ary.shift(); // 先頭削除
ary.pop();   // 末尾削除

console.log(ary); // ['dog', 'rabbit', 'bear', 'dog2']

// スプレッド構文とconcatメソッドによる追加
let ary = ['dog', 'rabbit', 'bear'];
ary.push(...['dog2', 'dog3']);
console.log(ary); // ['dog', 'rabbit', 'bear', 'dog2', 'dog3']

let ary1 = [1, 2, 3];
let ary2 = [4, 5, 6];
let ary3 = ary1.concat(ary2);
console.log(ary3); // [1, 2, 3, 4, 5, 6]


/* 破壊的メソッド
push, pop, shift, unshiftのように現在の配列そのものに影響を与えるメソッドを`破壊的メソッド`と言う。
上記のconcatメソッドは連結の結果を戻りとして返すだけなので、ary1自体は元の形から変わっていない→こういうのは`非破壊的メソッド`
Arrayオブジェクトには破壊的メソッドと非破壊的メソッドが存在するので注意が必要。
*/

// 配列に複数要素を追加/置換/削除する
/*
array.splice(start [, count [, items, ...]])
	array: 元の配列
	start: 開始位置
	count: 要素数
	items: 置き換え後の要素(可変長引数)
→配列のstart番目からcount個までの要素を削除し、items, …で置き換えるイメージ
*/

// 要素の置換
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
console.log(array.splice(1, 2, 'X', 'Y', 'Z')); // ['b', 'c']
console.log(array); // ['a', 'X', 'Y', 'Z', 'd', 'e', 'f', 'g']

// 要素の挿入(count引数を0にする)
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
console.log(array.splice(1, 0, 'X', 'Y', 'Z')); // []
console.log(array); // ['a', 'X', 'Y', 'Z', 'b', 'c', 'd', 'e', 'f', 'g']

// 要素の削除(items引数を省略)
let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
console.log(array.splice(1, 2)); // ['b', 'c']
console.log(array); // ['a', 'd', 'e', 'f', 'g']

// count引数を省略すると指定位置以降を全て削除
console.log(array.splice(1)); // ['d', 'e', 'f', 'g']
console.log(array); // ['a']


// 配列から特定範囲の要素を取得する
/*
array.slice([start [, end]])
	array:元の配列
	start:開始位置
	end  :終了位置
*/

let array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', ];
console.log(array.slice(2, 4));  // ['c', 'd']

// 負数は末尾から
console.log(array.slice(2, -1)); // ['c', 'd', 'e', 'f']


// 配列の内容を検索する
// 最初に見つけたインデックス番号を返す
let array = [10, 20, 30, 20, 50];
console.log(array.indexOf(20, 2)); // 3(インデックス2から後ろに検索)
console.log(array.lastIndexOf(20, 2)); // 1(インデックス2から前に検索)

// すべての要素位置(インデックス番号を取得する)
let keywd = 20;
let result = [];
array.forEach(function(v, i) {
	if (v === keywd) { result.push(i); }
});
console.log(result); // [1, 3]
// →要素が存在するかどうかだけを確認する時はincludes メソッドを使用する


// 入れ子の配列をフラット化する
let array = [0, [1, [2, 2, [3, 3, 3]]]];
console.log(array.flat());         // [0, 1, [2, 2, [3, 3, 3]]]
console.log(array.flat(2));        // [0, 1, 2, 2, [3, 3, 3]]
console.log(array.flat(Infinity)); // [0, 1, 2, 2, 3, 3, 3]


// 配列内の要素を結合する
let array = ['j', 'o', 'h', 'n'];
console.log(array.join());     // j,o,h,n
console.log(array.join(''));   // john
console.log(array.join('/'));  // j/o/h/n
console.log(array.join('\t')); // j	o	h	n


/* 配列内の要素を移動する
配列のサイズは変化しない。移動先の要素は上書きされる。
copyWithin(target, start, end)：start ~ end -1 番目の要素を取り出しtarget 番目の位置にコピー
*/
let array = [1, 2, 3, 4, 5];
console.log(array.copyWithin(2, 3, 5)); // [1, 2, 4, 5, 5]


// 配列の要素を並び替える
// reverse メソッド：配列を逆順に並び替える
let array = [1, 2, 3];
console.log(array.reverse()); // [3, 2, 1]

// sort メソッド：辞書順に並び替える(数値は注意)
let array = ['c', 'a', 'd', 'b']
console.log(array.sort()); // ['a', 'b', 'c', 'd']

let nums = [5, 28, 100];
console.log(nums.sort()); // [100, 28, 5]

// 配列を数値順に並び替える
// sortメソッドの引数にコールバック関数を指定し、並び替えルールそのものを変更する
let nums = [5, 28, 100];
console.log(nums.sort(function(m, n){
	return m - n;
})); // [5, 28, 100]
/*
引数のmとnは比較する要素。
mがnより大きい場合は整数、小さい場合は負数、等しい場合は0を返す。
コールバック関数の中では引数mとnの差を取るのが一般的。
降順にする時はn - m とすればよい。
*/
