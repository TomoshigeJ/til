# ハッシュ

- ハッシュリテラル

空のハッシュオブジェクトを作成するときは`Hash({}), {}, Hash.new, Hash[]` のいずれか 。

ロケット記法

キーと値は `=>` で区切り、キーを添字演算子`[]`で指定することで値を操作。

存在しないキーを指定すると`nil`

```ruby
# ロケット
a = {"dog1" => 1, "dog2" => 2, "dog3" => 3}
p a["dog1"] # => 1
p a["dog2"] # => 2
p a         # => {"dog1"=>1, "dog2"=>2, "dog3"=>3}
p a["dog5]  # => nil
```

文字列をキーとする場合はシンボルを使用する。(処理が高速)

その際、区切りには `=>` の変わりに `:` を用いることもできる。

```ruby
b = {dog1: 1, dog2: 2, dog3: 3}
p b # => {:dog1=>1, :dog2=>2, :dog3=>3}
```

---

- ハッシュのデフォルト値の指定

存在しないキーを指定した場合の戻り値`nil`はHashインスタンス作成にて変更できる。

```ruby
c = Hash.new(5)
p c[:dog1] # => 5
p c[:dog5] # => 5
```

---

- `[]`によるハッシュの生成

```ruby
d = Hash[:dog1, 1, :dog2, 2, :dog3, 3]
p d # => {:dog1=>1, :dog2=>2, :dog3=>3}
```

---

- `Array#to_h`によるハッシュ生成

2次元配列からハッシュを生成することもできる。

```ruby
e = [[:dog1, 1], [:dog2, 2], [:dog3, 3]].to_h
p e # => {:dog1=>1, :dog2=>2, :dog3=>3}
```

---

- ハッシュ引数

実引数の最後にハッシュを指定する場合は、その両側の波括弧`{}`を省略することができる。

```ruby
def dog x, y, z
  z
end
p dog(1, 2, :dog1=>1, :dog2=>2) # => {:dog1=>1, :dog2=>2}
```

→最後に引数にのみ有効な点に注意！2番目とかだと区切りが曖昧になるので`{}`つける

```ruby
def rabbit r, rr, rrr
  rr
end
p rabbit('rabbit', {r1: 1, r2: 2, r3: 2}, 222) # => {:r1=>1, :r2=>2, :r3=>2}
```

---

splat演算子(*)でハッシュを展開することができる。

```ruby
hash = {name: 'じょん', type: 'dog'}

p hash
# => {:name=>"じょん", :type=>"dog"}

p *hash
# => [:name, "じょん"]
# => [:type, "dog"]
```

ハッシュはネストされた配列で表現できる。

```ruby
p hash.to_a # => [[:name, "じょん"], [:type, "dog"]]
```

```ruby
def splat_hash(a, b)
  p a
  p b
end
splat_hash(*hash)
# => [:name, "じょん"]
# => [:type, "dog"]
```

→splat_hash(hash)と展開せずに渡すとArgumentError
