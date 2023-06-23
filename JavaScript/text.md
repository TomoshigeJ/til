# テキストの取得・設定

textContentやinnerHTMLのやつ。

要素配下のテキストを取得・設定するには`textContent, innerHTML`プロパティを使用する。

```html
<div id="result_text">
  <p style="color: red;">未設定!</p>
</div>
<div id="result_html">
  <p style="color: red;">未設定!(その2)</p>
</div>
```

```jsx
let msg = '<a href="https://www.google.com/">ぐーぐるへ</a>';

document.querySelector('#result_text').textContent = msg;
document.querySelector('#result_html').innerHTML = msg;
```

JS実行後のhtml

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1b7b5a4d-2bd0-45c1-a9e4-5a410a5188bd/Untitled.png)

配下の子要素、テキストを完全に置き換える点ではどちらのプロパティも共通。

与えられたテキストをHTML文字列として認識するかどうかの違いがある。

textContentプロパティはプレーンテキストとして埋め込むので、タグ文字列がそのまま表示されているが、innerHTMLプロパティはHTMLとしてテキストを埋め込んでいる。

一般的にHTML文字列を埋め込むのでなければtextContentプロパティを優先して利用する。

→テキスト解析が不要なので高速。セキュリティの問題も発生しにくい。

---

- textContentとinnerHTMLはテキスト取得時の挙動も異なる。

```html
<ul id="list">
  <li><a href="https://www.google.com/" class="my">
      ぐーぐる</a></li>
  <li><a href="https://www.yahoo.co.jp/" class="my2">
      やふー</a></li>
</ul>
```

```jsx
let list = document.querySelector('#list');

console.log(list.innerHTML);
/* 結果
<li><a href="https://www.google.com/" class="my">
      ぐーぐる</a></li>
<li><a href="https://www.yahoo.co.jp/" class="my2">
      やふー</a></li>
*/

console.log(list.textContent);
/* 結果
ぐーぐる
やふー
*/
```

innerHTMLは対象となる要素配下をHTML文字列として返す。

textContentは子要素からそれぞれテキストだけを取り出してまとめたものを返す。

---

- innerHTMLの注意点

ユーザーからの入力値や外部からの入力をそのまま渡さないようにすること！

```html
<form>
  <label for="name">名前：</label>
  <input id="name" name="name" type="text" size="30" />
  <input id="btn" type="button" value="そうしん" />
</form>
<div id="result"></div>

<script>
  let name = document.querySelector('#name');
  let result = document.querySelector('#result');

  // ボタンクリック時にあいさつメッセージを反映
  document.querySelector('#btn').addEventListener('click', function() {
    result.innerHTML = `こんにちは！ ${name.value}さん!`
  });
</script>
```

このページで、「じょん」とテキストボックスに入力して、そうしんボタンを押すと「こんにちは! じょんさん!」と表示される。

しかし、例えばテキストボックスに

`<div onclick="alert('わんわん')">じょーん</div>`

とテキストを入力してそうしんボタンを押すと、ページに表示された「じょーん」をクリックするとダイアログボックスが表示されてします。

→入力されたスクリプトが実行されてしまっている…

こんな感じ

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/eee08592-d7ba-422c-b373-d918b37b76f0/Untitled.png)

エンドユーザーが入力したスクリプトが、ページ上で実行できてしまっており、ページ提供者の意図しないコードが不特定のユーザーのブラウザ上で勝手に実行されてしまう問題がある。

このような脆弱性を`クロスサイトスクリプティング(XSS)脆弱性`と言う。

今回の場合、innerHTMLの箇所をtextContentに変えることで防ぐことができる。

innerHTMLでも<script>要素は実行されないが、あくまで一時的な対策なのでそんなに効果ない。