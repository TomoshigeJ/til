animal = 'bear'

v1 = %w(dog rabbit #{animal})
p v1

v2 = %W(dog rabbit #{animal})
p v2

p v2.join()
p v2.join("_")
