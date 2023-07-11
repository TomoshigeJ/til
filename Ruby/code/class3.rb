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

# 特異メソッド
dog1 = Dog.new(1)
def dog1.method3
  @a + 100
end

dog2 = Dog.new(2)

p dog1.method3 # => 101
#p dog2.method3 # => NoMethodError

# 特異クラスの取得と定義
dog_sp = Dog.new('sp')
singleton_class = class << dog_sp
  self
end

p singleton_class # => #<Class:#<Dog:0x00007fbb8b9737d8>>

# 