a = Array.new(5)
p a
p a.length
p a.size

# ブロックで初期値を指定の例
p Array.new(2){|index| index + 10}

# 第二引数で設定した初期値は同じオブジェクト
a = Array.new(2, 'a')
p a
p a[0].equal? a[1]

a[0].replace('b')
p a

# ブロックで指定すると同じオブジェクトにならない
a = Array.new(2){'a'}
p a
p a[0].equal? a[1]

a[0].replace('b')
p a
