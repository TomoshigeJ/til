hash = {price: 100, code: 28, date: "2023/07/07", name: 'sample'}

# Hash.keyメソッドは引数1つのみ
p hash.key(28) # => :code
p hash.key('sample') # => :name
p hash.key(1) # => nil

# Hash.valuesメソッドは引数をとらない。戻り値は配列。
p hash.values # => [100, 28, "2023/07/07", "sample"]

# Hash.value_atメソッドは引数とは可変長引数。戻り値は引数に指定したキーの値を集めた配列。
p hash.values_at(:price) # => [100]
p hash.values_at(:price, :code) # => [100, 28]
p hash.values_at(:dog) # => [nil]

# Hash.[]メソッドは引数1つ。戻り値は引数に指定したキーの値。
p hash.[](:price) # => 100
p hash.[](:dog) # => nil
#p hash.[](:price, :code) # =>  wrong number of arguments (given 2, expected 1) (ArgumentError)
