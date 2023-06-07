# thisキーワード

this キーワードはどこからでも参照できる特別な変数

呼び出す場所、呼び出しの方法(文脈)によって中身が変化する。

インスタンスメソッド、コンストラクターの文脈では`this = インスタンス`であるが、静的メソッドの文脈では`this = クラス`になるなどの変化がある。

---

- this キーワードの参照先

| 場所 | thisの参照先 |
| --- | --- |
| トップレベル(関数の外) | グローバルオブジェクト |
| 関数 | グローバルオブジェクト(Strictモードではundefined) |
| bind, call, apply メソッド | 引数で指定されたオブジェクト |
| イベントリスナー | イベントの発生元 |
| コンストラクター | 生成したインスタンス |
| インスタンスメソッド | 呼び出し元のオブジェクト(=レシーバーオブジェクト) |
| 静的メンバー | 呼び出し元のクラス |

→丸暗記すればよいというわけではない…

```JavaScript
globalThis.name = 'グローバルじょん'

let dog = {
  name: 'ふつうのじょん',
  bow() {
    console.log(`私は${this.name}だわん`);
  }
}

function bear(fn) {
  fn();
}

bear(dog.bow);           // => 私はグローバルじょんだわん
bear(dog.bow.bind(dog)); // => 私はふつうのじょんだわん
```
`bear(dog.bow);` の時点では関数`bow`は渡されただけで実行されていない。

関数として切り離されて実行されたので参照先がグローバルオブジェクトになっている。

---

- thisの束縛

メソッドをコールバック関数に渡す際にはthisを固定するのが一般的。これをthisの束縛という。

bind メソッドを使用して固定
```JavaScript
func.bind(thisArg [, args, ...])
  func    :関数オブジェクト
  thisArg :関数呼び出し時に利用されるthis
  args    :関数に渡すべき引数(可変長引数)
```

call, apply メソッドを利用することでthisの束縛と関数の呼び出しをまとめることも可能。

call：関数へ渡す引数が`可変長引数`

applym：関数へ渡す引数が`配列`
```JavaScript
globalThis.name = 'グローバルじょん'

let dog = {
  name: 'ふつうのじょん',
  bow() {
    console.log(`私は${this.name}だわん`);
  }
}

function bear(fn) {
  fn.call(dog); // ここを書き換え
}

bear(dog.bow);           // => 私はふつうのじょんだわん
bear(dog.bow.bind(dog)); // => 私はふつうのじょんだわん
```

---

- アロー関数はthisを持たない

```JavaScript
globalThis.name = 'グローバルじょん'

let dog = {
  name: 'ふつうのじょん',
  bow: () => console.log(`私は${this.name}だわん`) // ここを書き換え
}

function bear(fn) {
  fn();
}

bear(dog.bow);           // => 私はグローバルじょんだわん
bear(dog.bow.bind(dog)); // => 私はグローバルじょんだわん
```
thisを持たないが、この場合はエラーにならない。

スコープチェーンをたどってグローバルスコープを参照している。
