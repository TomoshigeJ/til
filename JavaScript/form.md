# フォーム要素

HTMLではさまざまな形のフォームが利用できる。

JavaScriptでの値の取得方法など。

---

- 入力ボックス、選択ボックス

valueプロパティにアクセスするだけで値を取得することができる。

```html
<form>
  <div>
    <label for="food">好きな動物は？</label>
    <select id="animal">
      <option value="いぬ">いぬ</option>
      <option value="うさぎ">うさぎ</option>
      <option value="くま">くま</option>
    </select>
    <input id="btn" type="button" value="そうしん"
  </div>
</form>

<script>
  let animal = document.querySelector('#animal');
  let btn = document.querySelector('#btn');

  btn.addEventListener('click', function() {
    alert(animal.value);
    console.log(animal.value);
  }, false);
</script>
```

HTMLの`<input>`要素ではさまざまなtype属性を表現することができる。

ラジオボタン、チェックボックスを除く要素ではいずれも`valueプロパティ`で値の取得、設定が可能。

---

`チェックボックスとラジオボタンの違い`

チェックボックスは1つまたは複数の選択肢があり、未選択、1つだけ選択、複数選択が可能。

ラジオボタンは2つ以上の選択肢、1つだけを選択しなければならない。

---

- チェックボックス

チェックボックスとラジオボタンへのアクセスはやや複雑。

```html
<form>
  <div>
    好きな動物は？
    <label><input type="checkbox" name="animal" value="いぬ" />いぬ</label>
    <label><input type="checkbox" name="animal" value="うさぎ" />うさぎ</label>
    <label><input type="checkbox" name="animal" value="くま" />くま</label>
    <input id="btn" type="button" value="そうしん"
  </div>
</form>

<script>
  let btn = document.querySelector('#btn');

  btn.addEventListener('click', function() {
    // 選択値を格納するための配列
    let result = [];
    let animals = document.querySelectorAll('input[name="animal"]');

    // チェックボックスを走査し、チェック状態にあるか確認
    for (let animal of animals) {
      // チェックされている項目の値を配列に追加
      if(animal.checked) { result.push(animal.value); }
    }

    alert(result);
    console.log(result);
  }, false);
</script>
```

チェックボックスのようにid属性は異なるが、name属性は共通の場合に要素群を取得するには、

`input[name=”animal”]`のように属性セレクターを利用するのがいい。

チェックボックス(ラジオボックス)でチェックされているかどうかは`checkedプロパティ`で確認ができる。

valueプロパティを参照しても、選択状態まで確認することができない。

---

- 単一のチェックボックスの操作

チェックボックスでは単一選択肢でオンとオフを表すような用途でも利用される。

```html
<form>
  <div>
    DOGメルマガ: <br />
    <label><input id="onoff" type="checkbox" name="mail" value="メルマガ希望">受け取る</label>
    <input id="btn" type="button" value="送信" />
  </div>
</form>

<script>
  let onoff = document.querySelector('#onoff');
  document.querySelector('#btn').addEventListener('click', function() {
    if(onoff.checked) {
      console.log(onoff.value);
    } else {
      console.log('No checked');
    }
  }, false);
</script>
```

---

- ラジオボタン

ほぼチェックボックスと同じ流れ。

ラジオボタンでは選択されるのは1つだけ。

ラジオボタンアクセスの部分を関数として定義してみる。

```html
<form>
  <div>
    好きな動物は？
    <label><input type="radio" name="animal" value="いぬ" />いぬ</label>
    <label><input type="radio" name="animal" value="うさぎ" />うさぎ</label>
    <label><input type="radio" name="animal" value="くま" />くま</label>
    <input id="btn" type="button" value="そうしん"
  </div>
</form>

<script>
  function getRadioValue(name) {
    let result = '';
    let elems = document.querySelectorAll(`input[name="${name}"]`);

    // ラジオボタン走査、チェック状態確認
    for(let elem of elems) {
      // チェックされている場合、配列に追加
      if (elem.checked) {
        result = elem.value;
        break;
      }
    }
    return result;
  }

  // ボタンクリック時に選択項目の値をダイアログ表示
  document.querySelector('#btn').addEventListener('click', function() {
    console.log(getRadioValue('animal'))
  }, false);  
  
</script>
```

---

- チェックボックス、ラジオボタンの値を設定

値を取得するまでの流れは同じ。設定したい値と同じvalueを持つチェックボックス、ラジオボタンの要素のcheckedプロパティをtrueに設定する。

`チェックボックス`

```html
<form>
  <div>
    好きな動物は？
    <label><input type="checkbox" name="animal" value="いぬ" />いぬ</label>
    <label><input type="checkbox" name="animal" value="うさぎ" />うさぎ</label>
    <label><input type="checkbox" name="animal" value="くま" />くま</label>
    <input id="btn" type="button" value="そうしん" />
  </div>
  <input id="c_btn" type="button" value="変更！" />
</form>

<script>
  function setCheckValue(name, values) {
    let elems = document.querySelectorAll(`input[name="${name}"]`);

    for(let elem of elems) {
      elem.checked = values.includes(elem.value);
    }
  }

  document.querySelector('#c_btn').addEventListener('click', function() {
    setCheckValue('animal', ['うさぎ', 'くま'])
  }, false);
</script>
```

ちなみに最後の関数を…

```jsx
document.querySelector('#c_btn').addEventListener('click', setCheckValue('animal', ['うさぎ', 'くま']), false);
```

このようにaddEventListenerの第二引数に直接関数を指定すると、クリックイベント前に即座に関数が実行されてしまう。

第二引数には関数オブジェクトを指定する必要がある。

`ラジオボタン`

```jsx
<form>
  <div>
    好きな動物は？
    <label><input type="radio" name="animal" value="いぬ" />いぬ</label>
    <label><input type="radio" name="animal" value="うさぎ" />うさぎ</label>
    <label><input type="radio" name="animal" value="くま" />くま</label>
    <input id="btn" type="button" value="そうしん" />
  </div>
</form>

<script>
  function setRadioValue(name, value) {
    let elems = document.querySelectorAll(`input[name="${name}"]`);

    for(let elem of elems) {
      if (elem.value === value) {
        elem.checked = true;
        break;
      }
    }
  }

  setRadioValue('animal', 'くま');
</script>
```

ラジオボタンで選択できるのは1つなので、ループ文の中で該当の要素が見つかった時点で処理を抜けている。

---

- 複数選択できるリストボックスの値を取得・設定

チェックボックスと似ている。

`<select>`要素の`<option>`要素(群)を取得。

Elementオブジェクト(`<select>`要素)からoptionsプロパティにアスセスする流れ。

```html
<form>
  <div>
    <label for="animal">好きな動物は？：</label><br />
    <select id="animal" multiple>
      <option value="いぬ">いぬ</option>
      <option value="犬">犬</option>
      <option value="dog">dog</option>
    </select>
    <input id="btn" type="button" value="わんわん">
  </div>
</form>

<script>
  function getSelectValue(name) {
    let result = [];
    let opts = document.querySelector(name).options;

    for (let opt of opts) {
      if (opt.selected) { result.push(opt.value); }
    }
    return result;
  }

  document.querySelector('#btn').addEventListener('click', function() {
    console.log(getSelectValue('#animal'));
  }, false);
</script>
```

リストボックスの設定(JS部のみ)

```html
<!DOCTYPE html>
<form>
  <div>
    <label for="animal">好きな動物は？：</label><br />
    <select id="animal" multiple>
      <option value="いぬ">いぬ</option>
      <option value="犬">犬</option>
      <option value="dog">dog</option>
    </select>
    <input id="btn" type="button" value="わんわん">
  </div>
</form>

<script>
  function setListValue(name, values) {
    let opts = document.querySelector(name).options;

    for (let opt of opts) {
      opt.selected = values.includes(opt.value);
    }
  }

  setListValue('#animal', ['犬', 'dog']);
</script>
```

---

- アップロードされたファイル情報を取得

ファイル選択ボックスから指定されたファイルの情報を取得する。

`filesプロパティ`を利用する。

```html
<form>
  <label for="file">ファイル：</label>
  <input id="file" type="file" multiple />
</form>

<script>
  let input = document.querySelector('#file');

  input.addEventListener('change', function() {
    // filesプロパティでアップロードされたファイルを取得
    let files = input.files

    // FileListから順に個々のファイルを取得
    for (let file of files) {
      console.log(`
        ファイル名： ${file.name}
        種類： ${file.type}
        サイズ： ${file.size / 1024}KB
        最終更新日： ${new Date(file.lastModified)}`);
    }
  }, false);
</script>
```

filesプロパティによって戻り値としては、アップロードされたファイル群(FileListオブジェクト)を返す。

その為、for…of文で順にファイル(Fileオブジェクト)を取り出している。

今回は複数ファイルを選択する為にHTMLに`multiple属性`を付与しているが、`multiple属性`を付与していない場合でもfilesプロパティの戻り値はFileListオブジェクト。

---

- テキストファイルの内容を取得する

FileReaderオブジェクトを利用することで、取得したFileオブジェクトの内容を読み込むこともできる。

```html
<form>
  <label for="file">ファイル：</label>
  <input id="file" type="file" />
  <input id="btn" type="button" value="内容を表示" />
</form>
<hr />
<pre id="result"></pre>

<script>
  // 読み込むファイルの内容がテキストであることが前提の場合

  let file = document.querySelector('#file');
  let reader = new FileReader();

  // 読み取り成功時に、その内容をページに反映
  reader.addEventListener('load', function() {
    document.querySelector('#result').textContent = reader.result;
  }, false);

  // ボタンクリックでファイルの読み取りを開始
  document.querySelector('#btn').addEventListener('click', function() {
    reader.readAsText(file.files[0], 'UTF-8')
  }, true);
</script>
```

今回はファイルがテキストである前提。

FileReaderを利用するには、まずloadイベントリスナーを定義し、ファイルの読み込みに成功した時に実行する処理を定義する。

ファイルの読み込みを行う為には`readAsTextメソッド`を利用。

ファイルの読み込みに失敗した場合は

```jsx
// 読み込み失敗時にエラーメッセージを表示する
reader.addEventListener('error', function() {
  console.log(reader.error.message);
});
```

こんな感じでFileReaderオブジェクト(今回はreader)の`error.messageプロパティ`にアクセスすることで、エラーメッセージを取得できる。

`FileReaderオブジェクトのイベント`

| イベント | 発生タイミング |
| --- | --- |
| loadstart | 読み込みの開始時 |
| loadend | 読み込みの終了時(成功しても失敗しても) |
| abort | 読み込み中断時 |
| progress | Blobコンテンツの読み込み時(読み込み中に連続して発生) |

---

- バイナリファイルの内容を取得→画像ファイルなど

`readAsDataURLメソッド`

バイナリファイルをData URLという形式で取得できる。

DataURL形式とは、URLに直接、画像や音声等のデータを埋め込む為の表現で、`<img>`要素のsrc属性や`<a>`要素のhref属性にそのまま埋め込むことができる。

```html
<form>
  <label for="file">ファイル：</label>
  <input id="file" name="file" type="file" />
</form>
<hr />
<img id="result" />

<script>
  let file = document.querySelector('#file');
  let reader = new FileReader();

  // 読み取り成功時にその内容をページに表示
  reader.addEventListener('load', function() {
    document.querySelector('#result').src = reader.result;
  }, false);

  // ボタンクリックでファイルの読み取りを開始
  file.addEventListener('change', function() {
    reader.readAsDataURL(file.files[0]);
  }, false)
</script>
```
