# && と ||

a = [1, 2, 3]
b = [4, 5, 6]
c = false

# &&演算子では左辺がtrueの時、右辺が実行される。
p a && b # => [4, 5, 6]

# &&演算子では左辺がfalseの時、右辺は実行されない。
p c && b # => false

# ||演算子は左辺がtrueの時、右辺は実行されない。
p a || b # => [1, 2, 3]

# ||演算子は左辺がfalseの時、右辺が実行される。
p c || b # => [4, 5, 6]
