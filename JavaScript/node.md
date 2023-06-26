# ノード

文書ツリーに対して、新規のノードを追加したり、既存のノードを置換・削除も可能。

- ページに新たなコンテンツを追加する

```html
<form>
  <div>
    <label for="title">サイト名:</label><br />
    <input id="title" name="title" type="text" size="30" />
  </div>
  <div>
    <label for="url">URL:</label><br />
    <input id="url" name="url" type="url" size="50" />
  </div>
  <div>
    <input id="btn" type="button" value="追加" />
  </div>
</form>

<ul id="list"></ul>

<script>
  let title = document.querySelector('#title');
  let url = document.querySelector('#url');
  let list = document.querySelector('#list');

  // ボタンクリックでリンクを作成
  document.querySelector('#btn').addEventListener('click', function() {
    // <li>要素を生成
    let li = document.createElement('li');

    // <a>要素を生成
    let anchor = document.createElement('a');

    // <a>要素のhref属性、本体を設定
    anchor.href = url.value;
    anchor.textContent = title.value;

    // <ul>要素の配下に<li>→<a>要素の階層で追加
    li.append(anchor);
    list.append(li);
  }, false);
</script>
```

①`createElementメソッド`で要素ノードを作成する

まずは文書ツリーとは関係のないパズルの断片を作成する。

②`appendメソッド`でノード同士を組み立てる

ばらばらに散らばっているノード群を組み立て、ドキュメントに追加する。

```
elem.append(node)
  elem:要素オブジェクト
  node:追加するノード
```

今回はまず<a>要素を<li>要素へ追加し、その<li>要素を文書ツリー内の<ul>要素に追加。

③属性, テキストを追加する

属性：同名のプロパティ

テキスト：textContentプロパティ

→属性、テキストもノードの一種なのでcreateXxxxxメソッドで生成して追加も可能。

---

- 複雑なコンテンツを作成する場合

まずはよくない例

```html
<ul id="list"></ul>

<script>
  // よくない例
  let animals = [
    { name: 'dog', cute: 100 },
    { name: 'dog2', cute: 200 },
    { name: 'dog3', cute: 300 },
  ];

  // 配列animalsの内容を順番に<li>要素に整形
  let list = document.querySelector('#list');
  for (let animal of animals) {
    let li = document.createElement('li');
    li.textContent = `${animal.name} の可愛さレベルは ${animal.cute}Lv`;
    list.append(li);
  }
</script>
```

`list.append(li)`のタイミングでコンテンツが再描画されている。

→ループの回数だけ再描画されている…

これはパフォーマンスの観点から望ましくない。

こういう時はいったん、DocumentFragmentオブジェクト上でコンテンツを組み立ててから、まとめて文書ツリーに追加すべき。

DocumentFragmentとは文書の断片→組み立てたノードを一時的にストックするための容器みたいなの。

修正後

```html
<ul id="list"></ul>

<script>
  let animals = [
    { name: 'じょん', cute: 1000 },
    { name: 'ぴょんきち', cute: 200 },
    { name: 'モコモカ', cute: 200 },
  ];

  // コンテンツを貯めるためのDocumentFragmentオブジェクトを生成
  let frag = document.createDocumentFragment();

  // 配列animalsの内容を順番に<li>要素へ整形
  for (let animal of animals) {
    let li = document.createElement('li');
    li.textContent = `${animal.name} の可愛さレベルは ${animal.cute}Lv`;
    frag.append(li);
  }

  // <li>要素をまとめて文書ツリーに追加
  document.querySelector('#list').append(frag);
</script>
```

---

- 要素挿入のためのメソッドたち

`before`：要素を挿入先の前に追加

`prepend`：要素を挿入先の子要素の先頭に追加

`append`：要素を挿入先の子要素の末尾に追加

`after`：要素を挿入先の後ろに追加

→新規要素の挿入だけでなく、既存要素の移動をすることもできる

`insertAdjacentHTMLメソッド`

```jsx
elem.insertAdjacentHTML(pos, text);
  elem:要素オブジェクト
  pos :挿入位置
  text:挿入する文字列

// 挿入位置の設定値
beforebegin:elemの直前に挿入
afterbegin :elem配下の最初の子要素として挿入
beforeend  :elem配下の最後の子要素として挿入
afterend   :elemの直後に挿入
```

---

- 既存ノードの置換と削除

ノードの置換には`replaceChildメソッド`

```jsx
elem.replaceChild(after, before)
  elem  :要素オブジェクト
  after :置き換え後のノード
  before:置き換え対象のノード
```

ノードの削除には`removeChildメソッド`

```jsx
elem.removeChild(node)
  elem:要素オブジェクト
  node:削除対象のノード
```

置き換え対象ノード、削除対象ノードともに現在のノードに対する子ノードである必要あり。

サンプル

```html
<ul id="list">
  <li><a href="javascript:void(0)" data-image_no="100">じょん 100</a></li>
  <li><a href="javascript:void(0)" data-image_no="150">じょん 150</a></li>
  <li><a href="javascript:void(0)" data-image_no="200">じょん 200</a></li>
</ul>
<input id="del" type="button" value="削除する" disable />
<div id="pic"></div>

<script>
  let list = document.querySelectorAll('#list a');
  let pic = document.querySelector('#pic');
  let del = document.querySelector('#del');

  // 個々のリンクに順にリスナーを登録
  for (let li of list) {
    li.addEventListener('click', function(e) {
      // data-image_no属性から<a>タグに紐づいた値を取得
      let image_no = this.getAttribute('data-image_no');

      let img = document.createElement('img');
      img.src = `/Users/kery/images/test/${image_no}.png`;
      img.alt = e.textContent;
      img.height = 100;
      img.width = 150;

      if (pic.querySelector('img')) {
        // <img>要素が存在する場合、新たな<img>要素で置換
        pic.replaceChild(img, pic.lastChild);
      } else {
        // <img>要素が存在しない場合、新たに追加し、[削除]ボタンを有効に
        del.disabled = false;
        pic.append(img);
      }
    }, false);
  }

  // [削除]ボタンの処理
  del.addEventListener('click', function() {
    // <div id="pic">配下の子要素を削除し、[削除]ボタンを無効にする
    pic.removeChild(pic.lastChild);
    del.disabled = true;
  }, false);
</script>
```

個々の<a>タグに対してループ処理をしているのは効率的によろしくない。

→ノードの置換と削除をイメージする為のサンプル

カスタムデータ属性とvoid演算子の部分

```html
  <li><a href="javascript:void(0)" data-image_no="100">じょん 100</a></li>
```

`カスタムデータ属性`

data-xxxx属性のやつ。自由に値を設定できる特別な値。

今回は画像ファイル名を取得する為にdata-image_noとして設定。

`void演算子`

JavaScript擬似プロトコルでvaid(0)を呼び出しているのは、<a>タグの本来の動作(リンク)を抑制するため。

void演算子は「なにも返さない」ことを表す演算子。

リンク形式でテキストを表示したいが、処理はスクリプトにまかせたい場合などに利用できる。