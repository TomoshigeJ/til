# yieldで呼び出し
def func x
  x + yield
end

p func(1){ 2 + 8} # => 11

# ブロックのスコープ
def func y
  y + yield
end

func(1) do
  x = 2
end
# p x # => undefined local variable or method `x' for main:Object (NameError)

# クロージャとしてのブロック
def func y
  y + yield
end

x = 2 # スコープ外での変数定義

p func(1) {x += 2} # => 5
p x # => 4 (元の変数にも影響している)

# ブロックの引数
def func a, b
  a + yield(b, 3)
end

p func(1, 2){|x, y| x + y} # => 6

# ブロックの判定
def func
  return 1 if block_given?
  2
end

p func(){} # => 1
p func()   # => 2
