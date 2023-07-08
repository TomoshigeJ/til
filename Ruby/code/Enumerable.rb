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
