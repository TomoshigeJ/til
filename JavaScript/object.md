# JavaScriptはオブジェクト指向言語

他のオブジェクト指向言語と異なる点として、最初にクラスを用意することなくオブジェクトを利用できる。

---

- オブジェクトをリテラルで表現する

オブジェクトの生成方法には以下の3つがある

  1：オブジェクトリテラル

  2：new 演算子

  3：Object.createメソッド

---

# 1：オブジェクトリテラル

オブジェクトはプロパティ(情報)とメソッド(動作)の集合体。
```JavaScript
let dog = {
  name: 'じょん',
  age: 10,
  show: function() {
    console.log(`私は${this.name}、${this.age}歳のすごい犬。`);
  }
};

dog.show(); // => 私はじょん、10歳のすごい犬。
```
JavaScriptには厳密にはメソッドという独立した概念はなく、値が関数オブジェクトであるプロパティがメソッドと見なされているイメージ。

---

- メソッドの簡易構文(ES2015)

上記のshowの箇所はシンプルな構文に書き換えられる。
```JavaScript
let dog = {
  (略)
  show() {
    console.log(`私は${this.name}、${this.age}歳のすごい犬。`);
  }
};
```
→functionキーワードが消えてすっきり。プロパティと明確に区別できる。

→アロー関数はthisキーワードを持たないので置き換え不可

---

- 変数を同名のプロパティに割り当てる

プロパティ名と、その値を格納した変数名が同じ場合には値の指定を省略できる。
```JavaScript
let name = '変数じょん';
let birth = new Date(2010, 10, 10);
let dog = { name, birth}

console.log(dog);
// => {name: 'じょん', birth: Wed Nov 10 2010 00:00:00 GMT+0900 (日本標準時)}
```
→`{ name: name, birth: birth}`みたいに記述しなくていい！

---

- プロパティ名を動的に生成する

プロパティ名をブラケットでくくることで、式の値から動的にプロパティを生成できる。

→これを算出プロパティ名という
```JavaScript
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
```

---

# 2：new 演算子(コンストラクター経由でのオブジェクトの生成)
```JavaScript
let list = new Array('松', '竹', '梅');
let birth = new Date(2023, 5, 28);
let data = new Map([
  ['1st', 'ファースト'],
  ['2nd', 'セカンド'],
  ['3rd', 'サード']
]);
```
オブジェクトによってはそもそもリテラル表現が用意されており、簡単にオブジェクト生成できる。

リテラル表現があるオブジェクトは原則リテラル表現を優先すべき。
```JavaScript
let list = ['松', '竹', '梅']
```

---

- オブジェクトリテラルのコンストラクター表現
```JavaScript
let dog = new Object();
dog.name = 'コンストラクターじょん';
dog.age = 10;
dog.bow = function() {
  console.log('わんわん');
};

dog.bow(); // わんわん
```
オブジェクトリテラルとは、Objectオブジェクトのインスタンス。

Objectオブジェクトとは、オブジェクトの基本的な性質や機能を提供するオブジェクト。

すべてのオブジェクトの基本オブジェクト。

→すべてのオブジェクトがObjectオブジェクトの機能を引き継いでいる

---

# 3：Object.createメソッド(より詳しい設定付きでオブジェクトを生成)

プロパティの詳細情報(読み取り専用か、列挙可能かなど)

オブジェクトを生成する元となる機能(プロトタイプ)

などの詳細な情報をcreateメソッドを利用して設定できる。
```
Object.create(proto, props)
	proto:プロトタイプ
	props:プロパティの属性情報
```
```JavaScript
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
```

# ゲッターとセッター

値の取得時にデータを加工したい

値の設定時に渡された値の妥当性を検証したい

値を読み取り、書き込み専用にしたい

こんな時にプロパティをメソッド(関数)の形式で表すためのしくみがゲッターとセッター。

→プロパティを読み書きするときに呼び出される特殊なメソッド

# プロトタイプの基本

JavaScriptのすべてのオブジェクトはその原型となるオブジェクト(プロトタイプ)に紐づいている。

現在のオブジェクトが直接保持するプロパティを便宜的に`独自プロパティ`と呼ぶ。

プロパティを参照した時、現在のオブジェクトから目的のプロパティが見つからなかった場合、プロトタイプとなるオブジェクトからプロパティを参照(取得)する。

プロトタイプオブジェクトは、それ自体がさらにプロトタイプを持つはずなので、プロトタイプオブジェクトに目的のプロパティがなければさらにプロトタイプを遡る。

このようなプロトタイプへの暗黙的な参照の連なりのことを`プロトタイプチェーン`と呼ぶ。

---

-  Object.createメソッドの引数proto

オブジェクトリテラルによって生成されたオブジェクトは、常にObject.prototypeオブジェクトをプロトタイプする。

一方、Object.createメソッドでは引数protoで明示的にプロトタイプとするオブジェクトを指定する必要がある。
```JavaScript
let dog = Object.create(Object.prototype, { ... });
// Object.prototypeはObjectオブジェクトのプロトタイプを意味する。
// →Array.prototypeとすればArrayオブジェクトのプロトタイプを参照するイメージ

// Objectオブジェクトの機能すら引き継ぎたくないのであれば、引数protoをnullにする。
let dog = Object.create(null, { ... });
// →これでdogオブジェクトがプロトタイプを持たない、プロトタイプチェーンの終点となる
```

---

- プロトタイプチェーンの挙動を確認
```JavaScript
// objの元となるオブジェクト
let parent = {
  x: 10,
  y: 20,
};

// parentをプロトタイプにして作成
let obj = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(obj);                        // {z: 30}
console.log(Object.getPrototypeOf(obj)); // {x: 10, y: 20}

for (let prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
// => z: 30 x: 10 y:20
// Object.getPrototypeOfメソッドでプロトタイプに直接アクセスもできる
```

---

- プロパティを追加, 更新, 削除した場合の挙動

プロトタイプが絡むと、プロパティの操作に伴う挙動が複雑になり、誤解を招きやすい…

---

- プロトタイプへの追加
```JavaScript
// objの元となるオブジェクト
let parent = {
  x: 10,
  y: 20,
};

// parentをプロトタイプにして作成
let obj = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

parent.v = 0;

for (let prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);
}
// => z: 30 x: 10 y:20 v:0
// 作成されたオブジェクトとプロトタイプの関係は複製ではなく、あくまで参照。
// →なのでvをparentオブジェクトに後付けしてもobjから参照できる

// プロパティ値の設定
// objの元となるオブジェクト
let parent = {
  x: 10,
  y: 20,
};

// parentをプロトタイプにして作成
let obj = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

console.log(obj);    // {z: 30}
console.log(parent); // {x: 10, y: 20}
console.log('----------------------');

obj.x = 100;

console.log(obj);    // {z: 30, x: 100}
console.log(parent); // {x: 10, y: 20}
console.log('----------------------');
```
obj.xの値を更新後もobj.xの値は変わっていない

→プロトタイプは読み取り専用

→値が設定されるのは、常に本来のオブジェクトに対して

objがxの値を持つことにより、プロトタイプのxの値を参照する必要がなくなった。が、あくまでプロトタイプのxの値が更新されたり、消えたわけではない。

→これをobjのxプロパティがプロトタイプのxプロパティを隠蔽するという

---

- プロパティの設定(セッターを持つ場合)
```JavaScript
let parent = Object.create(Object.prototype, {
  // セッター、ゲッターを伴うプロパティ
  x: {
    get() {
      return this._x ?? 10;
    },
    set(value) {
      console.log(`setter is called: ${value}`);
      this._x = value;
    },
    configurable: true,
    enumerable: true
  },
  y: {
    value: 20,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

let obj = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

obj.x = 100;

console.log(obj);
console.log(parent);
/* 結果
setter is called: 100
{z: 30, _x: 100}
{y: 20}
*/
```
セッターを伴うプロパティ(x)を更新する場合、そのままobjにxプロパティを追加するのでなく、まずプロトタイプのセッターが呼び出される。

→セッターが操作する対象はプロトタイプではなく、あくまでobjに対して

オブジェクト操作によって、プロトタイプが書き換えられることは`ない`

---

- プロパティの削除
```JavaScript
// objの元となるオブジェクト
let parent = {
  x: 10,
  y: 20,
};

// parentをプロトタイプにして作成
let obj = Object.create(parent, {
  z: {
    value: 30,
    writable: true,
    configurable: true,
    enumerable: true
  }
});

obj.x = 101;
console.log(obj.x);         // 101
console.log(parent.x);      // 10

console.log(delete obj.x);  // true
console.log(obj.x);         // 10
console.log(parent.x);      // 10
```
あくまでparentのxプロパティは変更されない

---

# Objectオブジェクト(雛形)

Objectオブジェクトはすべてのオブジェクトの大元となるオブジェクト。

他のオブジェクトに対して「オブジェクトの共通的な性質や機能を提供する」

さらに、「オブジェクトを操作すための汎用的な機能(静的メソッド)を提供する」

---

- オブジェクトをマージする

`assignメソッド`で既存のオブジェクトを結合(マージ)することができる。
```JavaScript
Object.assign(target, source, ...)
  target: ターゲット
  source: コピー元(可変長引数)
```
引数`source, … `で指定されたオブジェクトのメンバーを引数`target`にコピーする。
```JavaScript
let pet = {
  type: 'dog',
  name: 'john',
  description: {
    birth: '1192-2-8'
  },
};

let pet2 = {
  name: 'mocomoca',
  color: 'white',
};

let pet3 = {
  cute: 99,
  description: {
    birth: '2010-2-8'
  },
};

Object.assign(pet, pet2, pet3);
console.log(pet);

// {type: 'dog', name: 'mocomoca', description: {…}, color: 'white', cute: 99}
```
→同名のプロパティはあとのもので上書き

→再起的なマージは非対応(今回だとdescriptionプロパティは丸ごと上書き)

→引数target(今回はpet)が書き換えられている点に注意

`スプレッド構文で書いて見る`
```JavaScript
let merged = { ...pet, ...pet2, ...pet3 }
```

---

- オブジェクトを複製する

assignメソッド、スプレッド構文を用いることでオブジェクトを複製することもできる。
```JavaScript
let pet = {
  name: 'じょん',
  description: {
    birth: '2023-02-08'
  },
};

let copied = Object.assign({}, pet);

console.log(pet);
console.log(copied);
// => それぞれ同じ結果

console.log(pet === copied);
// => false
```
