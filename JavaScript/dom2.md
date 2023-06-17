# 属性値やテキストの取得・設定

スクリプトからページを操作する方法など。

---

- 属性値を取得

`getAttributeメソッド`を使用する。
```HTML
<img id="logo" src="/Users/kery/images/rub.jpg"
  height="200" width="300"
  title="cute rub"
  alt="rub写真" />
```
```JavaScript
let img = document.querySelector('#logo');
console.log(img.getAttribute('title'));
// => cute rub
```

すべての要素を取得する時は、`attributesプロパティ`を利用。
```JavaScript
let img = document.querySelector('#logo');
let attrs = img.attributes;
for (let attr of attrs) {
  console.log(`${attr.name}: ${attr.value}`);
}
/*
id: logo
src: /Users/kery/images/rub.jpg
height: 200
width: 300
title: cute rub
alt: rub写真
*/
```
attributesプロパティは、要素に属するすべての属性情報を、NamedNodeMapオブジェクトとして返す。

NamedNodeMapはNodeListやHTMLCollectionと同じく反復可能なオブジェクト。

---

- 属性値を設定

`setAttributeメソッド`を使用する。
```HTML
<img src="/Users/kery/images/test3.png" height="200" width="300" />
<img  />
<img src="/Users/kery/images/test3.png" height="200" width="300" />
```
```JavaScript
let imgs = document.querySelectorAll('img');
for (let img of imgs) {
  if(!img.hasAttribute(`src`)) {
    img.setAttribute(`src`, `/Users/kery/images/test3.png`);
    img.setAttribute(`height`, '200');
    img.setAttribute(`width`, '300');
  }
}
```
hasAttributeメソッドは特定の要素が存在するかを確認するメソッド。

---

- 属性値を削除

`removeAttributeメソッド`を使用する。
```HTML
<img id="logo" src="/Users/kery/images/rub.jpg"
  align="center" height="200" width="300" border="0"
  alt="rub" />
```
```JavaScript
let imgs = document.querySelectorAll(`img`);
let deps = [`align`, 'border', 'hspace', `vspace`, `logdesc`, `name` ];
for (let img of imgs) {
  for (let dep of deps) {
    img.removeAttribute(dep);
  }
}
```
JSを実行すると…

`<img id="logo" src="/Users/kery/images/rub.jpg" align="center" height="200" width="300" border="0" alt="rub">`

から

`<img id="logo" src="/Users/kery/images/rub.jpg" height="200" width="300" alt="rub">`

に変わった!

---

- 要素のプロパティを取得・設定

要素はほとんどの属性について同名のプロパティを用意している。

例えば<a>タグのhref属性の取得、設定にはgetAttribute, setAttributeの代わりにこんなふうにできる。

```HTML
<a href="https://www.google.com">ぐーぐる</a>
```
```JavaScript
let link = document.querySelector(`a`);

// 取得
let url = link.href;
console.log(url); // https://www.google.com/

// 設定
link.href = 'https://www.yahoo.co.jp/';
console.log(link.href); // https://www.yahoo.co.jp/
```

---

- 入力要素の現在地を取得・設定

テキストボックス(<input>要素)の値をgetAttributeメソッド、valueプロパティで取得する例。

```HTML
<form>
  <div>
    <label for="name">氏名：</label>
    <input id="name" type="text" name="name" value="じょん" />
  </div>
  <input id="btn" type="button" value="おくる">
</form>

<script>
  let member = document.querySelector('#name');

  document.querySelector('#btn').addEventListener('click', function() {
    console.log(member.value);
    console.log(member.getAttribute('value'));
  }, false);
</script>
```
member.valueではクリック時の入力値が表示されるのに対し

member.getAttribute(’value’)では入力値に関わらず、初期値のじょんが表示された。

→ユーザーからの入力値を取得するにはvalueプロパティを使用する必要がある。

---

- メソッドとかまとめ

`getAttributeメソッド`：要素の属性値を取得

`setAttributeメソッド`：要素の属性値を設定

`removeAttributeメソッド`：要素の属性値を削除

`hasAttributeメソッド`：特定の要素が存在するか確認

`attributesプロパティ`：要素に属するすべての属性値情報