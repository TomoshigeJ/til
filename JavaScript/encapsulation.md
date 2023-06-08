# カプセル化

カプセル化(Encapsulation)とは「利用者に関係ないものは見せない」こと。

---

- プライベートメンバー

クラスの外側からアクセスできないメンバーのことをプライベートメンバーと言う。

→プライベートメソッド、プライベートプロパティとも言う。

逆にクラスの内外から自由にアクセスできるメンバーをパブリックメンバーと言う。

プライベートメンバーを定義するには先頭に#を付ける。(？)
```JavaScript
class Member {
  // プライベートプロパティ
  #name = ''
  #age = 0

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // プライベートメソッド
  #createMessage() {
    return `私の名前は${this.#name}、${this.#age}歳です。`;
  }

  // パプリックメソッド
  show() {
    console.log(this.#createMessage());
  }
}

let m = new Member('じょん', 10);

m.show(); // 私の名前はじょん、10歳です。

console.log(m.#name); // エラー
```
→実行環境によっては`#メンバー`にアクセスできることもある

→プライベートプロパティはclass直下で宣言すること

---

- ゲッターとセッター

プロパティの読み書きに際して、処理を付与する仕組み。

`#`だけではプロパティへのアクセスを許可するか、禁止するかの二択しかないが、ゲッター/セッターを用いることで、

`値の取得時にデータを加工したい`

`値の設定時に渡された値の妥協性を検証したい`

`値の読み取り、書き込み専用にしたい`

などの細かな制御が可能となる。
```JavaScript
class Member {
  // name, ageプロパティの格納先(プライベート)
  #name = '';
  #age = 0;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  // nameゲッター
  get name() {
    return this.#name;
  }

  // ageゲッター
  get age() {
    return this.#age;
  }

  // ageセッター
  set age(value) {
    // 不正な値は例外をスロー
    if (typeof(value) !== 'number' || value < 0) {
      throw new TypeError('ageは0以上の数値で指定して下さい。');
    }
    this.#age = value;
  }

  show() {
    console.log(`名前: ${this.#name}, 年齢:${this.#age}`);
  }
}

let m = new Member('じょん', 10);
m.show();     // 名前: じょん, 年齢:10
m.age = -200;  // Uncaught TypeError: ageは0以上の数値で指定して下さい。
```
プライベートプロパティの#name, #ageにアクセスにはゲッター、セッターを経由しなければならないので、値の取得や設定を確実に管理できる。

この場合、#nameはゲッターしか持たないのでインスタンス化のあとは変更できない。

#ageはセッターを通して整数値のチェックを行なっている。

---

- 不変クラス

一般論としてインスタンスの状態は生成のあとは変化しない方が扱いはかんたんとなる。

→利用者が状態の変化を意識しなくてよいから

→そのようなクラスを不変クラスと言う
```JavaScript
class Member {
  #name = '';
  #birth = new Date();

  constructor(name, birth) {
    this.#name = name;
    this.#birth = new Date(birth.getTime());
    Object.freeze(this);
  }

  get name() {
    return this.#name;
  }

  // 参照型を返すゲッター
  get birth() {
    return new Date(this.#birth.getTime());
  }

  show() {
    console.log(`名前: ${this.#name}, 誕生: ${this.#birth.toDateString()}`);
  }

  // nameだけを変更した複製を生成
  withName(name) {
    return new Member(name, this.birth);
  }
}

Object.freeze(Member.prototype);

let m = new Member('じょん', new Date('1989-02-08'));
m.show();
// 名前: じょん, 誕生: Wed Feb 08 1989
```
プロパティはすべてプライベート宣言(#)

Object.freeze でプロパティ, メソッドの追加を禁止

参照型の値を受け渡す際は明示的に複製を作成する

プロパティの変更はwithXxxxxメソッドで行う
