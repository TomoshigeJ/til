array = ['dog', 'rabbit', 'bear']
p array.flatten  # => array = ['dog', 'rabbit', 'bear']
p array.flatten! # => nil
p array # ['dog', 'rabbit', 'bear']

array2 = [['dog'], ['rabbit'], ['bear']]
p array2.flatten  # => ["dog", "rabbit", "bear"]
p array2.flatten! # => ["dog", "rabbit", "bear"]
p array2          # => ["dog", "rabbit", "bear"]

####
p ["apple", "banana", "orange"].reverse
p %|apple banana orange|
