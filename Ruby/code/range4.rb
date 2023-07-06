str = "abcdefgh"

# 開始0から
puts str[4..6] # => efg

# -は後ろから、-1から
puts str[-3..6] # => fg

# ...は最後を含めない(未満)
puts str[4...-1] # => efg

# 戻れない
puts str[4..0] # => (空白)

# こらが[4..6]と同じ
puts str[-4...7] # => efg
