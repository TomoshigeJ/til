# Procの生成と呼び出し
proc = Proc.new{ |x| p x }
proc.call('じょ〜ん') # => "じょ〜ん"

# Procオブジェクトの生成
def get_counter start
  Proc.new{ |up| start += up }
end

count_up = get_counter(1) # 初期値として1を設定。count_upはProcオブジェクトを参照。

# ...たくさんの長い処理...

count_up.call(1) # => 2 (count_upの参照するブロックの実行)

# ...たくさんの長い処理...

count_up.call(3) # => 5 (count_upの参照するブロックの実行)

p count_up.call(2) # => 7
p count_up.call(3) # => 10

# ブロックへの変換
def func x
  x + yield
end

proc = Proc.new {2}
p func(1, &proc) # => 3

# Procへの変換
def func x, &proc
  p x + proc.call
end

func(1) do
  2
end
# => 3
