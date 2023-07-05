hash = Hash.new {|h, k| raise(KeyError, "Key #{k} does not exist in hash #{h}") }

# p hash[:a] # => Key a does not exist in hash {} (KeyError)

hash.default = nil
p hash[:a] # => nil

proc = hash.default_proc
# p proc.call(1, 2) # => Key 2 does not exist in hash 1 (KeyError)

hash.default_proc = nil
p hash[:a] # => nil
