module Dogm
  def methodD
    @a
  end
end

p Dogm.ancestors        # [Dogm]
p Dogm.instance_methods # [:medhodD]
# p Dog.new              # undefined method `new' for Dog:Module (NoMethodError)

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

class DogExt < Dog
  def initialize(a, b)
    @b = b
    super a
  end
  def method3(c)
    @a + @b + c
  end
end

# DogExtを再オープン
class DogExt < Dog
  include Dogm
end

# モジュールのメソッドが使える
dogExt = DogExt.new(2, 8)
p dogExt.methodD # => 2

p DogExt.ancestors               # [DogExt, Dogm, Dog, Object, Kernel, BasicObject]
p DogExt.superclass              # Dog
p DogExt.instance_methods(false) # [:method3]

###########################

# メソッドの優先度確認
module M1
  def method1; 1; end
end

class C1
  def medhod1; 2; end
  include M1
end

p C1.new.medhod1 # => 2
