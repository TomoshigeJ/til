# alisa式とundef式
class Foo
  def foo1; end
  def foo2; end
  alias :foo3 :foo1
  undef :foo2
end

p Foo.instance_methods(false) # => [:foo3, :foo1]

# method_missingのオーバーライド
class Hoge
  def method_missing(m, *args)
    p "called:" + m.to_s
    super # 例外が発生するようにスーパークラスのmethod_missingを呼び出す
  end
end
Hoge.new.no_mehod
# => "called:no_mehod"を表示後に例外発生
