# 基本
lmd = lambda{ |x| p x }
lmd.call('すごいじょん') # => "すごいじょん"

# 別の書き方
lmd2 = ->(x){p x}
lmd2.call('Ruby1.9から') # => "Ruby1.9から"

# proc中でのリターン
def func
  proc = Proc.new{return 1}
  proc.call
  2 # これは実行されない
end
p func # => 1

# lambda中でのリターン
def func
  proc = lambda{return 1}
  proc.call
  2 # 実行される
end
p func # => 2

# procの引数
p1 = Proc.new{ |x, y| y }
p p1.call(1) # => nil

# lambdaの引数
p2 = lambda{ |x, y| y }
# p p2.call(1) # => wrong number of arguments (given 1, expected 2) (ArgumentError)

# -> を使用したlambda記法
pr = ->(x, y){ p x * y }
pr.call(2, 8) # => 16
