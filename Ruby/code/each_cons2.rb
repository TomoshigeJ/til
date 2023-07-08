# p ('a'..'j').each_cons(3) これではエラー。ブロックに渡す。

('a'..'j').each_cons(3) { |a| p a}
# ["a", "b", "c"]
# ["b", "c", "d"]
# ["c", "d", "e"]
# ["d", "e", "f"]
# ["e", "f", "g"]
# ["f", "g", "h"]
# ["g", "h", "i"]
# ["h", "i", "j"]

('a'..'j').each_slice(3) { |a| p a}
# ["a", "b", "c"]
# ["d", "e", "f"]
# ["g", "h", "i"]
# ["j"]

# 例
arr = ('a'..'j').to_a
container = []

arr.each_cons(3) do |i|
  container << i
end
p container
# => [["a", "b", "c"], ["b", "c", "d"], ["c", "d", "e"], ["d", "e", "f"], ["e", "f", "g"], ["f", "g", "h"], ["g", "h", "i"], ["h", "i", "j"]]
p container.length
# => 8
