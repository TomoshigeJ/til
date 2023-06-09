# HTML

- HTMLとは？

  HTML（HyperText Markup Language）は、ウェブページの構造とコンテンツを記述するためのマークアップ言語。

- `<!DOCTYPE html>`

  <!DOCTYPE html>は、文書がHTML5で作成されたものであることを宣言するために、 文書の先頭（<html>タグよりも上）に記述するDOCTYPE宣言。

---

- タグ

`<>`で意味を与える目印。

- 要素

タグ`<>`で囲まれた情報の単位。

`<p>すごい文章</p>`のように基本的に開始タグと終了タグで囲まれたセット。

要素によっては終了タグがないものもある。

親要素と子要素の例

```html
<ul>
  <li>リスト1</li>
  <li>リスト2</li>
</ul>
```

こんな感じで要素同士が親子関係になることもある。

`<ul>`が親要素、`<li>`は`<ul>`要素の子要素。

- 属性

HTML要素に追加する情報。

```html
<a href=”https://www.dog.com” target="_blank" >DOG</a>
```

`<a>`要素の`href`や`target`のような箇所のことを属性という。

要素によって設定できる属性はさまざま。

サンプルの`”https://www.dog.com”`や`”_blank”`の箇所は値という。

- <!DOCTYPE html>

`<!DOCTYPE html>`は、文書がHTML5で作成されたものであることを宣言するために、 文書の先頭（<html>タグよりも上）に記述するDOCTYPE宣言。

- コメントアウト

```html
<!-- これはコメント -->
```
