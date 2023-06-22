# スタイルの操作

HTMLにおいてスタイルを定義するのはstyle, class属性の役割。

属性なのでgetAttributeやsetAttributeメソッドでも操作はできるが、現実的ではない。

styleやclass属性を操作する為の専用プロパティのstyle, classListを使用するべき。

---

`styleプロパティ`

インラインスタイルにアクセスする。

インラインスタイルとは個々の要素に対して直接設定されたスタイルのこと。

```html
<div id="elem">マウスポインターを乗せる</div>

<script>
  let elem = document.querySelector('#elem');

  elem.addEventListener(`mouseenter`, function() {
    this.style.backgroundColor = 'Yellow';
  }, false);

  elem.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '';
  }, false);
</script>
```

イベントリスナー配下での`this`はイベントの発生元を表す。

今回であればmouseenter, mouseleaveイベントが発生した`<div id=”elem”>`要素を指す。

スタイルプロパティの名前には注意。

→`JavaScriptではハイフンを取り除いた上に、2単語目以降の頭文字は大文字とする(camelCase)`

background-color ： backgroundColor

border-top-style ： borderTopStyle

ただし、floatプロパティ(CSS)だけは例外で、styleFloatとなる。

参考：[CSS プロパティリファレンス](https://developer.mozilla.org/ja/docs/orphaned/Web/CSS/CSS_Properties_Reference)

---

`classListプロパティ`

スタイルクラスを適用する。

sytleプロパティ(属性)によるスタイルの設定はシンプルではあるが、スタイル定義がスクリプトと混在する為、デザインの変更に対応しにくい。

スタイル定義はあくまでスタイルシート(.cssファイル)にまとめるのが一般的。

外部スタイルシートで定義されたスタイル(`=スタイルクラス`)にアクセスするのがclassListプロパティの役割。

class属性の値をクラス名のリスト(DOMTokenListオブジェクト)として返す。

→重複、余計な空白は削除される

DOMTokenListはNodeList, HTMLCollectionと同じく配列ライクなオブジェクト。

参考：[DOMTokenList](https://developer.mozilla.org/ja/docs/Web/API/DOMTokenList)

cssファイルが別に定義されていて

```css
/* class_list.css */
.highlight {
  background-color: red;
}
```

JS側でスタイルクラスをつけたりとったり

```html
<link rel="stylesheet" href="./class_list.css" />
<div id="elem">マウスポインターを乗せる(その2)</div>

<script>
  let elem = document.querySelector('#elem');

  elem.addEventListener('mouseenter', function() {
    this.classList.add('highlight');
  }, false);

  elem.addEventListener('mouseleave', function() {
    this.classList.remove('highlight');
  }, false);
</script>
```

`toggleメソッド`

上記のようなオンオフの操作であればtoggleメソッドを利用することもできる。

```html
<link rel="stylesheet" href="./class_list.css" />
<div id="elem">マウスポインターを乗せる(その3)toggle</div>

<script>
  let elem = document.querySelector('#elem');

  let highlight = function() {
    this.classList.toggle('highlight');
  };

  elem.addEventListener('mouseenter', highlight, false);
  elem.addEventListener('mouseleave', highlight, false);
</script>
```

→toggleメソッドでクラスのオン、オフを切り替え
