hash = {name: 'じょん', type: 'dog'}

p hash
# => {:name=>"じょん", :type=>"dog"}

p *hash
# => [:name, "じょん"]
# => [:type, "dog"]

# ハッシュはネストされた配列で表現できる
p hash.to_a # => [[:name, "じょん"], [:type, "dog"]]

# 例
def splat_hash(a, b)
  p a
  p b
end
splat_hash(*hash)
# => [:name, "じょん"]
# => [:type, "dog"]
