# FactoryBot
Rubyのテストフレームワーク。Railsでテストを書く為のツールセット。(gem)

---

- テストデータ作成(基本)
`spec/factories/配下`にテストしたい該当モデルのファイルを作成する。

Userモデルなら`users.rb`というファイル名。
```ruby
# spec/factories/users.rb

FactoryBot.define do
  factory :user do
    name { "john" }
    email { "john@example.com" }
  end
end
```

- モデル名以外の名前をつける時(クラスを指定)
上記の例ではUserモデルのuserという名前なので特に問題ないが、モデル名と異なる名前をつける時はクラスを指定してあげること

Userモデルのsuper_johnという名前で定義したい時
```ruby
# spec/factories/users.rb

FactoryBot.define do
  factory :super_john do, class: User
    name { "super_john" }
    email { "super_j@example.com" }
  end
end
```

- 呼び出す時
factory :xxx で定義した `:xxx` の形で呼び出す。

上記で作成した `:user` を呼び出す場合(例はモデルテスト)
```ruby
# spec/factories/model/users_spec.rb

RSpec.describe User, type: :model do
  let(:user){ FactoryBot.create(:user) }
end
```

- 呼び出し時のFactoryBotを省略できる
①`spec/rails_helper.rb` にFactoryBot読み込みの記述を追加
```ruby
# spec/rails_helper.rb

RSpec.configure do |config|
  # FactoryBotの省略
  config.include FactoryBot::Syntax::Methods
end
```
→`RSpec.configure do |config| ~ end` の間に追記する

②呼び出すテストファイルで`rails_helper`の読み込みを記述
```ruby
# spec/factories/model/users_spec.rb

require 'rails_helper'

RSpec.describe User, type: :model do
  let(:user){ create(:user) }
end
```

- シーケンス
FactoryBotのシーケンスは、テストデータの為に使用される一連の連番や値の生成方法を定義する仕組み。

各オブジェクトの一意の属性値を自動的に生成してくれる。

```ruby
FactoryBot.define do
  factory :user do
    sequence(:name) { |n| "user_#{n}" }
    sequence(:email) { |n| "test_#{n}@example.com" }
  end
end
```
sequence(シーケンス)メソッドではブロックを受け取る。

nはシーケンスの連番を表し、各オブジェクトの属性に対して異なる値を生成する。

user_1, user_2, …. とtest_1@example, test2@example, … と勝手に作成してくれる。

`余談`
rubyで式展開する時は`シングル(’ ’)`でなく`ダブルクォート(” ”)`で囲むこと！

- trait
traitはファクトリー内定義で特定の属性の値をオーバーライドしたり、異なる値を設定する為の仕組み。

同じファクトリー内で異なるバリエーションのオブジェクトを作成

```ruby
FactoryBot.define do
  factory :user do
    name { "John" }
    email { "john@example.com" }
		
    # roleのデフォルト値
    role { :writer }

    trait :admin do
      role { :admin }
    end

    trait :editor do
      role { :editor }
    end
  end
end
```
`:admin` と `:editor` という2つのtraitを定義した。

それぞれのtraitでrole属性の値を異なる値でオーバーライドしている。

呼び出し時はそれぞれ...

`let(:user) { create(:user) }` → role は witer(デフォルト)

`let(:user) { create(:user, :admin) }` → role は admin

`let(:user) { create(:user, :editor) }` → role は editor

こんな感じ
