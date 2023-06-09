- 多重代入

複数の変数に一度に代入を行う。

```ruby
# 多重代入
a, b, c = 1, 2, 3
p a # => 1
p b # => 2
p c # => 3

# メソッドの戻り値で複数の値を返す(明示的にreturnする)
def foo
  return 4, 5, 6
end

# 実際には配列で返される
p foo # [4, 5, 6]

d, e, f = foo
p d # => 4
p e # => 5
p f # => 6
```

配列による多重代入。

```ruby
# 配列による多重代入
d, o, g = [10, 20, 30]
p d # => 10
p o # => 20
p g # => 30
```

変数をカッコで囲むことで対応する配列を指定することもできる。

```ruby
(w, a), n = [100, 200], 300
p w # => 100
p a # => 200
p n # => 300
```

値の個数が足りない場合と多い場合。

```ruby
# 多重代入で値の個数が足りない場合はnil
x, y, z = 1, 2
p x # => 1
p y # => 2
p z # => nil

# 多重代入で値の個数が多い場合は無視される
a, b = 1, 2, 3
p a # => 1
p b # => 2
```

1つの変数に複数の値を入れると配列になる点に注意。(無視されない)

```ruby
a = 1, 2, 3
p a # => [1, 2, 3]
```

多重代入で余った値を無視したくない時。

→最後の変数名に`*`をつける

→余った値は配列としてまとめて代入される

```ruby
# 多重代入で余った値を無視したくない時(配列として最後にまとめて代入される)
a, *b = 1, 2, 3, 4, 5
p a # => 1
p b # => [2, 3, 4, 5]
```

`*`の指定はメソッドの仮引数でも可能。→可変長引数と呼ばれる

---

- 可変長引数

仮引数に`*`をつけてあげる。

```ruby
def john a, *b
  b
end
p john(1, 2, 3) # => [2, 3]
```

実引数に`*`をつけることで、配列を引数に展開することができる。

→可変長引数を他のメソッドに渡す場合などに使用される

```ruby
def dog1 a, *b
  dog2(*b)
end

def dog2 c, *d
  c
  d
end
p dog1(1, 2, 3, 4, 5)
# => [2, 3] (cの値)
# => [3, 4, 5] (dの値)
```
