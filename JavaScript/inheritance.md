# 継承

継承(Inheritance)とは既存のクラスの機能(メンバー)を引き継ぎながら新たな機能を加えたり、元からある機能の一部を修正したりするしくみ。

継承元となるクラスを基底クラス、スーパークラス、親クラスなどと呼ぶ。

継承によって新たに定義されたクラスを派生クラス、サブクラス、子クラスなどと呼ぶ。

---

- 継承の基本

既存のクラスを継承するには`extends`キーワードを利用
```JavaScript
class SubClass extends SuperClass {
  ...definitions...
}
```
```JavaScript
// 親クラス
class Animal {
  constructor(name = 'デフォルトじょん') {
    this.name = name;
  }

  bow() {
    return `わんわん。私は${this.name}`;
  }
}

// 継承して新しいクラス
class Dog extends Animal {
  work() {
    return `${this.name}はお手をした`;
  }
}

// チェック
let dog = new Dog('かしこじょん');
console.log(dog.bow());  // わんわん。私はかしこじょん
console.log(dog.work()); // かしこじょんはお手をした
```
親クラスのプロパティ、メソッドは使えるのはもちろんのこと、子クラスで定義したメソッドも利用できる。

→現在のクラスで見つからない場合にextendsで指定した基底クラスに探しにいく

JavaScriptでは派生クラスの基底クラスは常に1つ(`単一継承`)

1つのクラスが複数のクラスを親に持つような`多重継承`は認めていない！

---

- どんな時に継承を利用する？

基底クラスと派生クラスとの間に`is-a関係`が成り立つかを確認する。

is-a関係とはSubClass is a SuperClass つまり、派生クラスが基底クラスの一種であるということ。

DogはAnimalなのでDogクラスはAnimalクラスを継承してもいいよみたいなイメージ。

派生クラスが基底クラスに全て含まれる関係。(逆は成り立たない)

---

- 基底クラスのメソッド、コンストラクターを上書きする(オーバーライド)

基底クラスで定義されたメソッドやコンストラクターは派生クラスで上書きすることもできる。
```JavaScript
// 親クラス
class Animal {
  constructor(name = '動物') {
    this.name = name;
  }

  bow() {
    return `私は${this.name}`;
  }
}

// 継承して新しいクラス
class Dog extends Animal {
  // オーバーライド
  bow() {
    return `わんわん。私は${this.name}。わんわーん。`;
  }
}

// チェック
let animal = new Animal();
console.log(animal.bow()); // 私は動物

let dog = new Dog('じょん');
console.log(dog.bow());   // わんわん。私はじょん。わんわーん。 
```

---

- 基底クラスのメソッドを呼び出す(superキーワード)

基底クラスの機能を流用しつつ独自の機能を追加する場合など、派生クラスから基底クラスのメソッドを明示的に呼び出すことがある。
```JavaScript
super.メソッド名(引数, ...)
```
```JavaScript
// 親クラス
class Animal {
  constructor(name = '動物') {
    this.name = name;
  }

  bow() {
    return `私は${this.name}`;
  }
}

// 継承して新しいクラス
class Dog extends Animal {
  // superして機能を付け加える
  bow() {
    return `わんわん。${super.bow()}。わんわーん。`;
  }
}

// チェック
let animal = new Animal();
console.log(animal.bow()); // 私は動物

let dog = new Dog('じょん');
console.log(dog.bow());   // わんわん。私はじょん。わんわーん。 
```
