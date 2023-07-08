array = ['dog', 'rabbit', 'bear']
p array.flatten  # => array = ['dog', 'rabbit', 'bear']
p array.flatten! # => nil
p array # ['dog', 'rabbit', 'bear']

array2 = [['dog'], ['rabbit'], ['bear']]
p array2.flatten  # => ["dog", "rabbit", "bear"]
p array2.flatten! # => ["dog", "rabbit", "bear"]
p array2          # => ["dog", "rabbit", "bear"]

p '-------------------------------'

p ["apple", "banana", "orange"].flatten!
# => nil

p [["apple"],["banana"],["orange"]].flatten
# => ["apple", "banana", "orange"]

p ["apple", "banana", "orange"].reverse
# => ["orange", "banana", "apple"]

p %|apple banana orange|
# => "apple banana orange"
