# injectメソッド
p [1, 2, 3].inject(:+) # => 6
p [1, 2, 3].inject{|result, item| result + item } # => 6

p [1, 2, 3].inject{|result, item| result + item * 3 }    # => 16
p [1, 2, 3].inject(0){|result, item| result + item * 3 } # => 18

# collectメソッド
p [1, 2, 3].collect(&:to_s)        # => ["1", "2", "3"]
p [1, 2, 3].collect { |n| n + 1 }  # => [2, 3, 4]

 # sample
 arr = [
  true.equal?(true),
  nil.eql?(NilClass),
  String.new.equal?(String.new),
  1.equal?(1)
]
p arr.collect { |a| a ? 1 : 2 } # => [1, 2, 2, 1]
p arr.collect { |a| a ? 1 : 2 }.inject(:+) # => 6

# sample2
a = [-1, 2, 3, 4, 5]
b = (4..6).to_a

p a.inject(:+) + b.inject(:+)
# => 28

p (a | b).inject(:-).abs + (a & b).inject(:+).abs
# => 30

p (a | b).inject(:*) + b.inject(0) { |x, y| x + y ** 3 }
# => -315

p ((a || b).map(&:succ).inject(:*) * (a && b).inject(:*).abs2 + 29)
# => 29
