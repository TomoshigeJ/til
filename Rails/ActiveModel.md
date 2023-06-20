# Active Model

ActiveRecord以外以外のクラスでもデータモデルの機能を活用できるやつ。

ActiveRecordを継承しないクラスでもActiveRecordと同じような便利メソッドが使えるようになる優れもの。多くのモジュールを含むライブラリであり、以下のようなことができる。

- バリデーション
    
    データの妥協性を検証する為のバリデーションルールの定義ができる。
    
- 属性の設定
    
    データモデルの属性を定義し、値の取得や設定を行う為のメソッドを提供する。
    
- コールバック
    
    保存前、削除前にフックして処理を追加することができる。
    
- 名前付きスコープ
    
    データのクエリを簡単に定義できる名前付きスコープを提供する。
    
- シリアライズ
    
    データのシリアライズ、デシリアライズを行う為のメソッドを提供する。
    
    シリアライズとはデータを直列化して別の形式に変換すること。
    
    バイナリ形式やテキスト形式などの別の形式に変換される。
    

などなど…

ActiveModelは`FormObject`という概念で使用されることが多い。

FormObject？

form_withのmodelオプションにActibe Record以外のオブジェクトを渡すデザインパターン。

Controllerに分散、肥大しがちな処理をform object内にまとめることができる。

---

- AttributeMethodsモジュール(Rails5.2から使用可能)

Active Recordモデルに属性(カラム)にアクセスする為のメソッドを提供。

Active Recordモデルと同様に属性のゲッターやセッターを定義し、属性の型やデフォルト値の設定や変更ができる。

```ruby
class SearchArticlesForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :author_id, :integer
  ...
end
```

`SearchArticlesForm`クラスにのインスタンスが数値型のauthor_idという属性を持つことができるようになる。

この属性は通常のインスタンス変数のように使用することができる。

```ruby
form = SearchArticlesForm.new
form.author_id = 1
puts form.author_id # 1
```

他にもバリデーションやデフォルト値の設定なんかもできる。

---

- Modelに記載するscope

`scope`はActive Recordモデル内で定義されるクエリの一部をカプセル化する為の方法。

よく使用するクエリの断片を再生利用可能なメソッドとして定義する。

```ruby
class ModelName < ApplicationRecord
  scope :scope_name, -> { ... }
end
```

→scope_nameが定義したスコープの名前(好きに決められる)

→`{ … }` のブロック内にクエリの条件やオプション

```ruby
class Article < ApplicationRecord
  scope :published, -> { where(published: true) }
  scope :recent, -> { where('created_at >= ?', 1.week.ago) }
  scope :by_category, -> (category_id) { where(category_id: category_id) }
end
```

→`Article.published.recent`のように組み合わせて使うこともできる

→ (category_id) のように引数を受け取って使用することもできる
