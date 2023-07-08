a =  (1..5).partition(&:odd?)
p a
# => [[1, 3, 5], [2, 4]]

a, =  (1..5).partition(&:odd?)
p a
# => [[1, 3, 5], [2, 4]]
