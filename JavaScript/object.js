/* JavaScriptはオブジェクト指向言語
他のオブジェクト指向言語と異なる点として、最初にクラスを用意することなくオブジェクトを利用できる。

- オブジェクトをリテラルで表現する
オブジェクトの生成方法には以下の3つがある
1：オブジェクトリテラル
2：new 演算子
3：Object.createメソッド
*/

/* 1：オブジェクトリテラル
オブジェクトはプロパティ(情報)とメソッド(動作)の集合体。
*/
let dog = {
	name: 'じょん',
	age: 10,
	show: function() {
		console.log(`私は${this.name}、${this.age}歳のすごい犬。`);
	}
};

dog.show(); // => 私はじょん、10歳のすごい犬。
// JavaScriptには厳密にはメソッドとい独立した概念はなく、値が関数オブジェクトであるプロパティがメソッドと見なされているイメージ。

/* メソッドの簡易構文(ES2015)
上記のshowの箇所はシンプルな構文に書き換えられる。
*/
let dog = {
	(略)
	show() {
		console.log(`私は${this.name}、${this.age}歳のすごい犬。`);
	}
};
// →functionキーワードが消えてすっきり。プロパティと明確に区別できる。
// →アロー関数はthisキーワードを持たないので置き換え不可

/* 変数を同名のプロパティに割り当てる
プロパティ名と、その値を格納した変数名が同じ場合には値の指定を省略できる。
*/
let name = '変数じょん';
let birth = new Date(2010, 10, 10);
let dog = { name, birth}

console.log(dog);
// => {name: 'じょん', birth: Wed Nov 10 2010 00:00:00 GMT+0900 (日本標準時)}
// →{ name: name, birth: birth}みたいに記述しなくていい！

/* プロパティ名を動的に生成する
プロパティ名をブラケットでくくることで、式の値から動的にプロパティを生成できる。
→これを算出プロパティ名という
*/
let i = 1;
let dog = {
	name: '動的じょん',
	age: 99,
	[`memo${i}`]: '犬',
	[`memo${++i}`]: 'Vim',
	[`memo${++i}`]: '最強'
};

console.log(dog);
// => {name: '動的じょん', age: 99, memo1: '犬', memo2: 'Vim', memo3: '最強'}


// 2：new 演算子(コンストラクター経由でのオブジェクトの生成)
let list = new Array('松', '竹', '梅');
let birth = new Date(2023, 5, 28);
let data = new Map([
	['1st', 'ファースト'],
	['2nd', 'セカンド'],
	['3rd', 'サード']
]);
// オブジェクトによってはそもそもリテラル表現が用意されており、簡単にオブジェクト生成できる。
// リテラル表現があるオブジェクトは原則リテラル表現を優先すべき。
let list = ['松', '竹', '梅']

// オブジェクトリテラルのコンストラクター表現
let dog = new Object();
dog.name = 'コンストラクターじょん';
dog.age = 10;
dog.bow = function() {
	console.log('わんわん');
};

dog.bow(); // わんわん
/*
オブジェクトリテラルとは、Objectオブジェクトのインスタンス。
Objectオブジェクトとは、オブジェクトの基本的な性質や機能を提供するオブジェクト。
すべてのオブジェクトの基本オブジェクト。
→すべてのオブジェクトがObjectオブジェクトの機能を引き継いでいる
*/

/* 3：Object.createメソッド(より詳しい設定付きでオブジェクトを生成)
プロパティの詳細情報(読み取り専用か、列挙可能かなど)
オブジェクトを生成する元となる機能(プロトタイプ)
などの詳細な情報をcreateメソッドを利用して設定できる。
Object.create(proto, props)
	proto:プロトタイプ
	props:プロパティの属性情報
*/
'use strict';

let dog = Object.create(Object.prototype, {
	name: {
		value: 'じょん',
		writable: true,
		configurable: true,
		enumerable: true
	},
	birth: {
		value: new Date(2020, 12, 12),
		writable: true,
		configurable: true,
		enumerable: true
	},
	memo: {
		value: 'すごい犬です',
		writable: true,
		configurable: true,
		enumerable: true
	}
});

// プロパティ値への書き込み
// dog.memo = 'もっとすごい犬になりました';

// プロパティ値の列挙
// for (let prop in dog) {
//  console.log(`${prop}: ${dog[prop]}`);
// }

// プロパティの破棄
// delete dog.memo;
// →引数propsには属性名と値を付与する

/* ゲッターとセッター
値の取得時にデータを加工したい
値の設定時に渡された値の妥当性を検証したい
値を読み取り、書き込み専用にしたい
こんな時にプロパティをメソッド(関数)の形式で表すためのしくみがゲッターとセッター。
→プロパティを読み書きするときに呼び出される特殊なメソッド
*/


/* プロトタイプの基本
JavaScriptのすべてのオブジェクトはその原型となるオブジェクト(プロトタイプ)に紐づいている。
現在のオブジェクトが直接保持するプロパティを便宜的に`独自プロパティ`と呼ぶ。
プロパティを参照した時、現在のオブジェクトから目的のプロパティが見つからなかった場合、プロトタイプとなるオブジェクトからプロパティを参照(取得)する。
プロトタイプオブジェクトは、それ自体がさらにプロトタイプを持つはずなので、プロトタイプオブジェクトに目的のプロパティがなければさらにプロトタイプを遡る。
このようなプロトタイプへの暗黙的な参照の連なりのことを`プロトタイプチェーン`と呼ぶ。
*/

/* Object.createメソッドの引数proto
オブジェクトリテラルによって生成されたオブジェクトは、常にObject.prototypeオブジェクトをプロトタイプする。
一方、Object.createメソッドでは引数protoで明示的にプロトタイプとするオブジェクトを指定する必要がある。
*/
let dog = Object.create(Object.prototype, { ... });
// Object.prototypeはObjectオブジェクトのプロトタイプを意味する。
// →Array.prototypeとすればArrayオブジェクトのプロトタイプを参照するイメージ

// Objectオブジェクトの機能すら引き継ぎたくないのであれば、引数protoをnullにする。
let dog = Object.create(null, { ... });
// →これでdogオブジェクトがプロトタイプを持たない、プロトタイプチェーンの終点となる

// プロトタイプチェーンの挙動を確認
