class Dog
  attr_accessor :a
end

# インスタンス変数@aに対して読み取り、書き込みのメソッドを定義したことになる
# 以下と同じこと
class Doo
  # getter
  def a
    @a
  end

  # setter
  def a=(val)
    @a = val
  end
end

##################################################

# 例
class Animal
  attr_accessor :a, :b
end

animal = Animal.new
animal.a = 'dog'
animal.b = 'rabbit'
# 1行で書くなら animal.a, animal.b = 'dog', 'rabbit' でもok
puts animal.a # => "dog"
puts animal.b # => "rabbit"
# animal.c = 'bear' # => 定義していないのでNoMethodError

animal.b = 10 # 値の更新
puts animal.b # => 10
