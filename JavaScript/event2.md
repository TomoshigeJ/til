# イベントの削除とイベントオブジェクトなど

- イベントリスナーの削除

`removeEventListenerメソッド`を利用する。

```jsx
elem.removeEventListener(type, listener [, opts])
  elem    : 要素オブジェクト
  type    : イベントの種類
  listener: イベントの発生時に実行するコード
  opts    : イベントオプション(falseで標準の動作)
```

```html
<form>
  <input id="btn" type="button" value="ログ表示" />
</form>

<script>
  let btn = document.querySelector('#btn');
  let listener = function() {
    console.log('Hello John!');
  };

  // イベントリスナーを登録
  btn.addEventListener('click', listener, false);

  // イベントリスナーを削除
  btn.removeEventListener('click', listener, false);
</script>
```

リスナー関数は名前を持つ必要がある

→イベントリスナーに無名関数を渡してるやつは消せない

---

- イベントオブジェクト

イベントリスナーは引数として`イベントオブジェクト`と呼ばれるオブジェクトを受け取る。

イベントリスナー配下では、イベントオブジェクトのプロパティにアクセスすることで、イベント発生時のさまざまな情報にアクセスできる。

イベントオブジェクトを受け取るにはイベントリスナーに引数を指定してあげるだけ。

引数名はイベントを表す、 `e` `ev` `event` とするのが一般的。

イベントオブジェクトを利用しない際は引数を省略する。

```html
<form>
  <input id="btn" type="button" value="クリック" />
</form>

<script>
  document.querySelector('#btn').addEventListener('click', function(e) {
    let target = e.target;
    console.log(`発生元： ${target.nodeName} / ${target.id}`);
    console.log(`種類： ${e.type}`);
  }, false);
</script>
```

`target`：イベント発生の要素

`type`：イベントの種類

こんな感じでイベントオブジェクトのメンバーにはいろいろある。

イベントオブジェクトでアクセスできるメンバーは、発生したイベントによっても変化する。

マウス情報の取得サンプル

```html
<div id="main" style="position:absolute; margin:50px; top:50px; left:50px; width:200px; height:200px; border:1px solid Black; "></div>

<script>
  let main = document.querySelector('#main');
  main.addEventListener('mousemove', function(e) {
    main.innerHTML = `
      screen: ${e.screenX} / ${e.screenY} <br />
      page: ${e.pageX} / ${e.pageY} <br />
      client: ${e.clientX} / ${e.clientY} <br />
      offset: ${e.offsetX} / ${e.offsetY}
      `;
  }, false);
</script>
```

`click, mousemove`などのイベント発生時のマウスポインターの座標を取得するやつ。

それぞれの座標はどこを基点とするかという点で異なる。

`screen`：スクリーン上でのXY座標

`page`：ページ上でのXY座標

`client`：ブラウザー上でのXY座標

`offset`：要素上でのXY座標

キー情報の取得サンプル

```html
<form>
  <label for="key">キー入力：</label>
  <input type="text" id="key" size="10" />
</form>
<p id="result"></p>

<script>
  let result = document.querySelector('#result');
  document.querySelector('#key').addEventListener('keydown', function(e) {
    console.log(`キー値： ${e.key}`);
    result.textContent = e.key;
  }, false);
</script>
```

`keypress, keydown`などのキーイベントでは、押されたキーの種類を取得することもできる。
