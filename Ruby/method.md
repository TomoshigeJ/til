# メソッド

- メソッド基本

定義：def メソッド名 (引数) ~ end

```ruby
# メソッド定義
def dog(a, b)
  puts a + b
end

# メソッド実行
dog(2, 8)
# => 10
```

- 引数のデフォルト値

```ruby
def dog(a, b=10)
  a + b
end
```

デフォルト値を合わせても引数の数が足りない場合は例外(エラー)が発生する。

`dog(1) ⇒ 11`

`dog ⇒ ArgumentError`

---

- キーワード引数

`:` でどの引数に値を渡すか明示的にできる

```ruby
def dog(a:, b:100)
  puts a + b
end

dog(a: 2, b: 8) # => 10
dog(a: 2) # => 102
```

キーワード引数に存在しない値を渡すとエラーになる。

`dog(c: 1) ⇒ ArgumentError`

---

- キーワード引数に任意の引数

```ruby
def dog(a:, b:100, **z)
  p z
  p a + b
end

dog(a: 2, c: 8 , d: 10)
# => {:c=>8, :d=>10}
# => 102
```
