# モジュール

モジュールとはアプリの機能単位に分割するための仕組み。

アプリの規模が大きくなった場合、すべてのファイルを1つのファイルにまとめるのはよろしくない。

→目的のコードを見つけにくくなるし名前の競合リスクも増す

モジュールを利用することで、コードをファイル単位に分離でき、それぞれに独立したスコープを持つので他のモジュールへの影響を気にしなくていい。

---

- モジュールの定義

基本的にJavaScriptのモジュールはファイル単位でまとめる。

モジュール配下のメンバーは、規定でモジュール配下しか参照できない。(`モジュールスコープ`)

モジュール外部からアクセスするには、それぞれの宣言の頭に`export`キーワードを付与する。

---

- モジュール利用(例)

```HTML
<script type="module" src="scripts/module_basic.js></script>
```
```JavaScript
import { getTriangleArea, Member } from './lib/util.js';
```

HTMLの<script>要素で、type属性でモジュール環境であることを明示する。

JavaScript側ではモジュールをインポートする為にimport命令を使用。

type=”module”でモジュール機能を有効にした場合、以下のように実行環境が変化。

`①Strictモードが有効になる`

`②文書ツリーが生成された直後にコードが実行される`

---

- ESモジュール（ESM）

JavaScriptの標準的なモジュールシステム

```JavaScript
// モジュールのエクスポート
// moduleA.js
export const message = 'Hello, world!';
export function greet(name) {
  console.log(`Hello, ${name}!`);
}

// モジュールのインポート
// main.js
import { message, greet } from './moduleA.js';

console.log(message); // 'Hello, world!'
greet('John'); // 'Hello, John!'
```

---

- CommonJS

```JavaScript
// モジュールのエクスポート
// moduleA.js
const message = 'Hello, world!';
function greet(name) {
  console.log(`Hello, ${name}!`);
}

module.exports = {
  message,
  greet,
};

// モジュールのインポート
// main.js
const { message, greet } = require('./moduleA.js');

console.log(message); // 'Hello, world!'
greet('John'); // 'Hello, John!'
```

---

- Railsでは？

モジュールの管理にWebpackerというgemを使用することが一般的(?)

1：Webpackerのセットアップ

  →gemインストール

2：JavaScriptモジュールの作成

  →app/javascript/modulesディレクトにxxx.js(モジュール)を作成

3：モジュールのインポート

  →import文を使用

4：JavaScriptパックのビルド

  →Webpackerを使用

`あくまで一例！`
```JavaScript
// app/javascript/modules/hello.js
export function sayHello(name) {
  console.log(`Hello, ${name}!`);
}
```
```JavaScript
// app/javascript/packs/application.js
import { sayHello } from '../modules/hello.js';

sayHello('John'); // Hello, John!
```

Webpackerを使用してJavaScriptパックをビルド
```
$ bin/webpack
```