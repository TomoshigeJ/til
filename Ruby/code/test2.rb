a = [1, 2, 3, 5, 8]
b = [1, 3, 6, 7, 8]

c = false || true ? true && false ? a | b : a & b : b ;
p c
# => [1, 3, 8]
# => これは a & b の結果が出力されている
# false || true はtrue
# よって三項演算子の左側の true && false ? a | b : a & b が実行
# さらに三項演算子の条件式 true && false はfalse
# 右側の a & b が実行されている
 

# &は共通する要素を出力
d = a & b
p d # => [1, 3, 8]

# &&はどちらも真の時に最後に評価されたbを出力
e = a && b
p e # => [1, 3, 6, 7, 8] 

# aa = nilの場合、右辺の処理は行われない
aa = nil
bb = 'bb'
ee = aa && bb
p ee # => nil

# |は重複している要素をまとめて取り出す
f = a | b
p f # => [1, 2, 3, 5, 8, 6, 7]

# ||はどちらかが真の時に最初に評価されたaを出力
g = a || b
p g # => 1, 2, 3, 5, 8]
