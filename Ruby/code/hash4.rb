h = Hash.new("default value")
h[:a]
h[:b] = 100

p h
# => {:b=>100}
