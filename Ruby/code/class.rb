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
