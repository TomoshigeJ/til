str = 'Ruby by John'
p str.index('b', 1) # => 2
p str.index('b', 3) # => 5

a = "Ruby"
b = " on Rails"
a.concat b
a.reverse
p a # => "Ruby on Rails"
p a.index("R", 1) # => 8
