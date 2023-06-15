# DOM & ノード

DOM(Document Object Model)

マークアップ言語を操作する標準の仕組み。

ブラウザー環境(クライアントサイドJavaScript)ではJavaScriptがHTMLを編集する。

DOMはHTMLやXMLなどのマークアップ言語で書かれたドキュメントにアクセスする為の標準的な仕組みで、JavaScriptに限らず現在利用される言語のほとんどをサポートしている。

---

- 文書ツリーとノード

DOMはドキュメントを`文書ツリー`(ドキュメントツリー)として扱う。

文書に含まれる要素や属性、テキストをそれぞれオブジェクトと見なし、「オブジェクトの集合(階層関係)が文書である」と考える。

→文書を構成する要素や属性、テキストといったオブジェクトのことを`ノード`と呼ぶ。

DOMはノードを抽出、追加、置換、削除するための汎用的な手段を提供するAPI。

---

- 要素ノードを取得する

クライアントJavaScriptにおいては、何をするにせよまずは要素ノード(要素)を文書ツリーから取得しないと始まらない。

`getElementByIdメソッド`：id値をキーに要素を取得する

```HTML
現在時刻：<span id="result"></span>
```
```JavaScript
let current = new Date();
let result = document.getElementById('result');
result.textContent = current.toLocaleString();
```
id値が重複した場合、getElementByIdメソッドは最初に合致した要素を1つだけ返す。

→原則としてページ内ではid値は一意になるようにする

`querySelectorメソッド`：セレクター式に合致した要素を取得する
```HTML
犬：<span class="dog"></span>
```
```JavaScript
let dog = document.querySelector('.dog');
dog.textContent = 'じょん';
```
セレクター式の記述方法はさまざまあるので、複雑な条件で要素を取得することができる。

→id値がlistの配下にあるclass値がdogである要素..みたいなの

`Elementオブジェクト.属性名`で値を取得することができる

```HTML
<ul id="list">
  <li><a href="https://www.animal.com" class="animal">
    Animal</a></li>
  <li><a href="https://www.dog.com" class="dog">
    Dog</a></li>
  <li><a href="https://www.johnjohnjohn.com" class="dog">
    じょんの犬小屋</a></li>
  <li><a href="https://www.rabbit.com" class="rabbit">
    Rabbit</a></li>
</ul>
```
```JavaScript
let result = document.querySelector('#list .dog');

console.log(result);
// <a href="https://www.dog.com" class="dog">Dog</a>

console.log(result.href);
// https://www.dog.com/
```
→ここでも最初に合致する要素を取得している

→result.hrefでurlの値を取得している

`querySelectorAllメソッド`：セレクター式で複数の要素を取得する

複数の要素群を取得する場合、戻り値がNodeList(ノードの集合)となる。
```JavaScript
let list = document.querySelectorAll('#list .dog');
for(let elem of list) {
  console.log(elem.href);
}
// https://www.dog.com/
// https://www.johnjohnjohn.com/
```
Node.listも反復可能なオブジェクトの一種。

→配列っぽいことができる


| メンバー | 概要 |
| --- | --- |
| length | ノードの数 |
| item(index) | 指定インデックス位置のノード取得 |
| entries() | すべてのキーと値を取得 |
| forEach(callback [, thisArg]) | 各要素をコールバック関数で順に処理 |
| keys() | すべてのキーを取得 |
| values() | すべての値を取得 |

---

- ノードウォーキング

あるノードを基準として、相対的な位置関係からノードを取得することもできる。

ツリー状となったノードを枝をたどって渡り歩く様子からノードウォーキングと呼ばれる。

querySelector系メソッドやgetElementByIdメソッドで特定の要素を取得した後に、近接するノードはノードウォーキングで取得するような使い方が一般的みたい。

こんな感じ
```HTML
<form>
  <label for="animal">好きな動物は？：</label>
  <select id="animal">
    <option value="いぬ">いぬ</option>
    <option value="うさぎ">うさぎ</option>
    <option value="くま">くま</option>
  </select>
  <input type="submit" value="そうしん" />
</form>
```
```JavaScript
// <select id="animal">を取得
let s = document.querySelector('#animal');

// <select>要素配下の子要素を取得
let ops = s.children;

// 子要素を順に扱う
for(let opt of ops) {
  console.log(opt.value);
}
```
`childrenプロパティ`はある要素の子要素群を取得するプロパティ。
