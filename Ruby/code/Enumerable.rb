# injectメソッド
p [1, 2, 3].inject(:+) # => 6
p [1, 2, 3].inject{|result, item| result + item } # => 6

p [1, 2, 3].inject{|result, item| result + item * 3 }    # => 16
p [1, 2, 3].inject(0){|result, item| result + item * 3 } # => 18

# collectメソッド
p [1, 2, 3].collect(&:to_s)        # => ["1", "2", "3"]
p [1, 2, 3].collect { |n| n + 1 }  # => [2, 3, 4]
