a = [1, 2, 3, 4, 5]
a.each { |n| puts n }
p '----------------------------------'
a.each_index { |n| puts n }
p '----------------------------------'
a.each_with_index { |n, i| puts n }
p '----------------------------------'
a.each_with_index { |n, i| puts i }
