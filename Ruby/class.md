# クラス

クラス名は大文字で始める。

小文字で始めるとエラーになる。→`クラス名は定数のため`

Rubyインタプリタはクラスを定義する時以下のように動作する。

①指定されたクラス名で定数を作成する

②①の定数に、定義されたクラスを格納する

Rubyにおいてはクラスはオブジェクトであり、メソッドの実行や変数への再代入だってできる。

クラス定義の例

```ruby
# クラス定義
class Dog
  def initialize(a)
    @a = a
  end
  def method1
    @a
  end
  def method2
    p 'わんわん'
  end
end

# インスタンスの作成
dog1 = Dog.new(1)
dog2 = Dog.new(2)

# メソッドの実行
p dog1.method1 # => 1
p dog2.method1 # => 2
dog1.method2   # => "わんわん"
dog2.method2   # => "わんわん"
```

クラス内で定義したメソッドは`インスタンスメソッド`となり、インスタンスから呼び出せる。

`initialize`は初期化の時に実行されるメソッド。

`@`から始まる変数は`インスタンス変数`で、値はインスタンスに保持される。

インスタンスの作成時はnewメソッドにて。

クラスの継承

```ruby
class DogExt < Dog
  def initialize(a, b)
    @b = b
    super a
  end
  def method3(c)
    @a + @b + c
  end
end

dogExt = DogExt.new(2, 8)
p dogExt.method1    # => 2
p dogExt.method3(3) # => 13
```

クラスの継承はclass定義に `<` を使用。

Dogクラスを継承しているので、Dogクラスのインスタンスメソッドも使用できる。

`super`

スーパークラス(親クラス)の`同名メソッド`を呼び出す場合に使用。

初期化(initialize)メソッドに限らずに任意のメソッドで使用できる。

カッコや引数をつけずにそのまま「super」とすると、メソッドが受け取った引数をそのままスーパークラスの同名メソッドに渡す。

---

クラスの継承チェーンを確認する`ancestorsメソッド`

```ruby
p Dog.ancestors    # => [Dog, Object, Kernel, BasicObject]
p DogExt.ancestors # => [DogExt, Dog, Object, Kernel, BasicObject]
```

スーパークラスの指定を省略したDogクラスも自動的にObjectクラスを継承していることがわかる。

包含関係の比較

あるクラスが継承チェーンに含まれているかは`比較演算子`で判定ができる。

```ruby
p Dog < Object # => true
p Dog > Object # => false
```

`instance_methods`：オブジェクトの持つインスタンスメソッドを調べる。

→引数にfalseでスーパークラスをたどらない。

```ruby
p Dog.instance_methods(false)    # => [:method1, :method2]
p DogExt.instance_methods(false) # => [:method3]
```

`instance_variables`：オブジェクトの持つインスタンス変数を調べる。

```ruby
p dog1.instance_variables   # => [:@a]
p dogExt.instance_variables # => [:@b, :@a]
```

---

継承チェーンにあるメソッドに別名を付けたり、取り消したりできる。

`alias式`：メソッドなどに別名をつける。

メソッドではないので、間にカンマは指定しない。メソッド名は識別子かシンボルで指定。

```ruby
alias <新メソッド名> <旧メソッド名>
alias <新グローバル変数> <旧グローバル変数>
```

`undef式`：指定された定義を取り消す。

alias式同様に識別子かシンボルでメソッドを指定。

```ruby
undef <メソッド名>
undef <メソッド名1>, <メソッド名2>
```

例

```ruby
# alisa式とundef式

class Foo
  def foo1; end
  def foo2; end
  alias :foo3 :foo1
  undef :foo2
end

p Foo.instance_methods(false) # => [:foo3, :foo1]
```

alisa式、undef式は評価された時点で定義の対象となる。

→記述する位置に注意！

メソッドが見つからない場合は？

例外NoMethodErrorが発生する。

→厳密にはBasicObjectクラスの`method_missingメソッド`が呼び出される。

method_missingメソッドをオーバーライドすることで、メソッドが見つからない場合の動作をフックすることができる。

```ruby
class Hoge
  def method_missing(m, *args)
    p "called:" + m.to_s
    super # 例外が発生するようにスーパークラスのmethod_missingを呼び出す
  end
end
Hoge.new.no_mehod
# => "called:no_mehod"を表示後に例外発生
```
