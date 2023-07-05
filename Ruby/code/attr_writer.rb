class Dog
  attr_writer :d
end

dog = Dog.new
dog.d = 'dog' # オブジェクトdogが保持するインスタンス変数@dに文字列'dog'が代入される
p dog.d # 書き込み専用なので読みろうとするとNoMethodErrorが発生
