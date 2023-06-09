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

############################################

# インスタンスの作成
dog1 = Dog.new(1)
dog2 = Dog.new(2)

# メソッドの実行
p dog1.method1 # => 1
p dog2.method1 # => 2
dog1.method2   # => "わんわん"
dog2.method2   # => "わんわん"

# class式の評価順序
p 1
class T
  p 2
end
p 3
# => 実行すると1, 2, 3の順に出力される

# classメソッド
p dog1.class # => Dog

############################################

# クラスの継承
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

# クラスの継承チェーンを確認
p Dog.ancestors    # => [Dog, Object, Kernel, BasicObject]
p DogExt.ancestors # => [DogExt, Dog, Object, Kernel, BasicObject]

# 包含関係の比較
p Dog < Object # => true
p Dog > Object # => false

# オブジェクトの持つインスタンス変数を調べる
p Dog.instance_methods(false)    # => [:method1, :method2]
p DogExt.instance_methods(false) # => [:method3]

# オブジェクトの持つインスタンス変数を調べる
p dog1.instance_variables   # => [:@a]
p dogExt.instance_variables # => [:@b, :@a]
