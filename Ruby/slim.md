# Slim
gemをインストールして使用する。ファイル拡張子は.slim
slim → html のようにコンパイルされ、画面表示の際はHTMLのコードに変換される。
- 特徴
  - シンプルで直感的な構文
  - インデントによるネスト構造(閉じタグという概念がない)
  - Rubyのコードを埋め込むことができる
  - HTMLタグの省略記法
  - コードの可読性が高い
  コンパクトな出力(軽量)

- イメージ(こんな感じのやつ)
`HTMLの場合`
 ```ruby
<% @posts.each do |post| %>
	<p><%= post.title %></p>
<% end %>
```
`Slimの場合`
```ruby
- @posts.each do |post|
	p = post.title
```
→まさにスリムなコード

---

- タグ使用時に<>はいらない
```ruby
doctype html → <!DOCTYPE html>
div → <div></div>
p → <p></p>
```

- コメントアウト
```ruby
p I like dog
/ ここはコメント
p you like dog
```

- Rubyコード
```ruby
- @posts.each do |post|
	p = post.title
↓
<% @posts.each do |post| %>
	<p><%= post.title %></p>
<% end %>
```

- IDとclass
```ruby
#dog
	john
↓
<div id="dog">john</div>

.dog
	john
↓
<div class="dog">john</div>

#dog.hoge.foo
	john
↓
<div id="dog" class="hoge foo">john</div>
```

- link_to
```ruby
= link_to 'TOP', root_path, data: {target: dog}
↓
<a data-garget="dog" href="/" >TOP</a>
```

---

- 参考
[slim(日本語ドキュメント)](https://github.com/slim-template/slim/blob/main/README.jp.md)
[slimの書き方をマスターしよう！(pikawaka)](https://pikawaka.com/rails/slim)
