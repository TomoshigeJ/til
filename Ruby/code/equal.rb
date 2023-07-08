# equal?は同じオブジェクトIDかeql?は同じリテラルかどうか
p 'じょん'.equal?('じょん') # false
p 'じょん'.eql?('じょん')   # true

p [1, 2].equal?([1, 2])   # false
p [1, 2].eql?([1, 2])     # true

p ({a: 1}).equal?({a: 1}) # false
p ({a: 1}).eql?({a: 1})   # true

p '-------------------------------------'

# 同じリテラルなら同じオブジェクトIDのやつら
p true.equal?(true)
p false.equal?(false)
p nil.equal?(nil)
p :a.equal?(:a)
p 1.equal?(1)
p 3.14.equal?(3.14)
# => 全てtrue

p '-------------------------------------'

# 実験
p nil.equal?(NilClass) # false
p nil.eql?(NilClass)   # false
