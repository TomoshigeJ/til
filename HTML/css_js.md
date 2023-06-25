# CSSとJavaScript

- CSS

Cascading Style Sheets：カスケーディング・スタイル・シート

`基本記述`

セクレタ { プロパティ: 値; }

```html
<style>
  body {
    background-color: black;
  }
</style>
```

→bodyがセクレタ, background-colorがプロパティ, blacdが値

`セクレタ` (どこに？)

セクレタはどのHTML要素にスタイルを適用するか指定。

要素名(タグ)、クラス名、ID名などを指定してあげる。

(クラスの時は`.`をつける、IDの時は`#`をつける)

`プロパティ` (なにを？)

プロパティは何を変えたいかを指定。

→サイズ、色、書体、背景色、位置…などなどいろいろある

`値(value)` (どんなふうに？)

プロパティに対応する値を指定。

→サイズなら数値(px)や色なら何色かなどなど

`CSSを外部ファイルとして読み込み`

一般的にはHTMLとCSSは外部ファイルに分ける

→HTML上で読み込むCSSファイルを指定する

```html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
```

こんな感じで`<head>`タグ内で読むこむcssファイルの場所とファイル名を指定する。

`link rel="stylesheet"`でcss読むこむぞ宣言、`href`の値にはcssファイル名(パス付き)で指定。

`コメントアウト(コメント)`

```css
/* これはコメント */
.dog {
  color: white;
}
```

---

- JavaScript

`HTMLに埋め込み`

`<script>`タグで囲む

```html
(いろいろ略)
<body>
  ...
  <script>
    let dog = 'じょん';
    console.log(dog);
  </script>
</body>
```

`外部ファイル読み込み`

CSS同様にこっちが一般的。

```html
(いろいろ略)
<body>
  ...
  <script src="slime.js"></script>
</body>
```

コメントアウト(コメント)

```jsx
// 一行コメント

/* これで
複数行の
コメントもできる
bowbow */
```

---

サンプルたち

HTML

```html
<!DOCTYPE html>
  <html>
  <head>
    <link rel="stylesheet" href="sample.css">
  </head>
  <body>
    <p class="sentence">すごい文章</p>
    <input id="btn" type="button" value="すごいぼたん" />
    <!-- JSファイル読み込み -->
    <script src="sample.js"></script>
  </body>
</html>
```

CSS

```css
/* 要素 */
body {
  background-color: black;
}

/* クラス */
.sentence {
  width: 300px;
  background-color: blueviolet;
  color: aliceblue;
}

/* ID */
#btn {
  background-color: brown;
  border-radius: 8px;
  opacity: 0.9;
}
```

JavaScript

```jsx
let btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  alert('爆発します');
}, false);
```
