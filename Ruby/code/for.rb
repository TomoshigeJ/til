# for式
a = ['d', 'o', 'g']
for s in a do
 p s
end

# doは省略可能、識別子は副指定可能
for i, j in [[1, 2], [3, 4]]
  p i + j
end

# スコープ(each文ではスコープが作成されるが、for文ではされない！)
for i in [2, 3, 4]
  name = 'じょん'
end
p name # => "じょん"

# この文ではNameErrorが発生
# [2, 3, 4].each do |i|
#   p i
#	  dog = 'じょん'
# end
# p dog
