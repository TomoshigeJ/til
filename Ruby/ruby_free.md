# Rubyのいろいろ

---

- nilガード ||=

変数や式がnilの時にエラーを回避する手法。
```ruby
number ||= 0
```
numberがあればnumberを返す。

numberがnilかfalseの場合、0を代入してnumberを返す。

→nilやfalseによる予期せぬエラーを防ぐことができる。

---

- class メソッド

Rubyでは数値は数値クラスのインスタンスになっているように、全ての値は何らかのクラスのインスタンスになっている。

何のクラスに属するかは`classメソッド`で確認できる。

```ruby
1.class # => Integer
1.2.class # => Float
'じょん'.class # => String
nil.class # => NilClass
```

---

- 継承クラスの参照 superclass メソッド

```ruby
1.class
# => Integer

1.class.superclass
# => Numeric

1.class.superclass.superclass
# => Object

1.class.superclass.superclass.superclass
# => BasicObject

1.class.superclass.superclass.superclass.superclass
# => nil
```

---

- 命名規則

変数やクラス名などを指定する場合のRubyでのルール

①アンダースコア `_` と英数字を使用

②数字始まりはNG

- 変数の種類による命名規則

ローカル変数：先頭が`英小文字または_`

グローバル変数：先頭が`$`

クラス変数：先頭が`@@`

インスタンス変数：先頭が`@`

定数：先頭が`英大文字`

---

- 組み込み定数

Rubyに標準でもともと入っている定数たち

Rubyで汎用的に使用される共通の定数

下記以外にもいろいろある

| 組み込み定数 | 値 |
| --- | --- |
| STDIN | 標準入力 |
| STDOUT | 標準出力 |
| STDERR | 標準エラー出力 |
| ENV | 環境変数 |
| ARGF | 仮想ファイル |
| ARGV | Rubyスクリプトに与えられた引数 |
| DATA | _ _ END_ _ 以降をアクセスするFileオブジェクト |

---
