# イベントドリブンモデル

イベントに応じて実行するコードを記述するプログラミングモデル。

ブラウザーで表示されたページ上では、ボタンをクリックする、マウスポインターが文字列に乗った、画面がスクロールされた、などさまざまな出来事(イベント)が発生する。

クライアントサイドJavaScriptでは、それらのイベンタに応じて起こしたい処理を記述する。

こんなやつをイベントドリブンモデル(イベント駆動型モデル)と言う。

イベントに対応してその処理内容を定義するコードのかたまり(関数)のことを`イベントハンドラー`、または`イベントリスナー`という。

---

- イベント発生に応じてコードを実行する

`addEventListenerメソッド`
```JavaScript
elem.addEventListener(type, listener [, opts])
  elem    :要素オブジェクト
  type    :イベントの種類
  listener:イベント発生時に実行するコード
  opts    :イベントオプション(falseで標準の動作)
```
```HTML
<img id="cover" src="/Users/kery/images/rub.jpg" />
```
```JavaScript
let pic = document.querySelector('#cover');
pic.addEventListener('mouseenter', function() {
  this.src = '/Users/kery/images/rub2.jpeg';
}, false);

pic.addEventListener('mouseleave', function() {
  this.src = '/Users/kery/images/rub.jpg';
});
```
写真にマウスポインターを乗せるとrub2.jpegに変わり、画像から離すと元のrub.jpgに戻るようなやつ。

イベントリスナー配下では`this`キーワードでイベント発生元にアクセスができる。

---

- ページのロードを終えたタイミングでコードを実行する

`DOMContentLoadedイベントリスナー`でコード全体をくくる

```JavaScript
document.addEventListener('DOMContentLoaded', function() {

  let pic = document.querySelector('#cover');
  pic.addEventListener('mouseenter', function() {
    this.src = '/Users/kery/images/rub2.jpeg';
  }, false);

  pic.addEventListener('mouseleave', function() {
    this.src = '/Users/kery/images/rub.jpg';
  });

}, false);
```
`<script>`要素は基本的に`</body>`閉じタグの直前に記述をする。

これはHTMLは上から順に読み込まれていくので、`<script>`内部で記述する内容によってはその後の要素が取り込まれないことになり、思わぬ動作となることがある為。

DOMContentLoadedイベントリスナーを使用することで、先にページのロードを終えてから内部の処理を行うので、目的の要素の取得する動作を保証することができる。

---

- タグ内の属性として宣言する(onを使うやつ)

onxxxx属性(xxxxはイベントの名前)でxxxxイベントが発生した時の処理を指定できる。

```HTML
<img id="cover" src="/Users/kery/images/rub.jpg"
  onmouseenter="imgEnter()" onmuseleave="imgLeave()" />
```
```JavaScript
let pic = document.querySelector('#cover');
function imgEnter() {
  pic.src = '/Users/kery/images/rub2.jpeg';
}

function imgLeave() {
  pic.src = '/Users/kery/images/rub.jpg';
}
```
この場合、HTMLのタグ上で関数の呼び出しを行なっているが、関数名の箇所に直接処理を記述することもできる。

しかし、HTMLにJavaScriptのコードが混在する点から、コードの可読性が落ちるのでどちらにしろよろしくない。

onxxxxプロパティとして宣言する
```HTML
<img id="cover" src="/Users/kery/images/rub.jpg" />

<script>
let pic = document.querySelector('#cover');
pic.onmouseenter = function() {
  this.src = '/Users/kery/images/rub2.jpeg';
}

pic.onmouseleave = function() {
  this.src = '/Users/kery/images/rub.jpg';
}
</script>
```
→こうするとHTMLにJavaScriptのコードが入らなくなった

`が`

onxxxxプロパティの制約として`同一要素の同じイベントに対して、複数の処理を紐づけることができない`という点があるので注意。

いずれにしろ、あえて使用するメリットはなし。

→addEventListenerを使用する！！