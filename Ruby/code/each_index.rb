a = [1, 2, 3, 4, 5]
a.each { |n| puts n }
p '----------------------------------'
a.each_index { |n| puts n }
p '----------------------------------'
a.each_with_index { |n, i| puts n }
p '----------------------------------'
a.each_with_index { |n, i| puts i }
p '----------------------------------'

(10..15).to_a.map.with_index(1) do |elem, i|
  puts i
end

(10..15).to_a.map.with_index(10) do |elem, i|
  puts i
end

(10..15).to_a.map.with_index(100) do |elem, i|
  puts i
end
