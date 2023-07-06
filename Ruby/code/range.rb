# 範囲

# .. は右辺含む
(1..10).each do |i|
  p i
end
# => 1~10まで出力

# 文字列の範囲なんかもok
str = ''
for s in ('a'..'z')
  str.concat s
end
p str
# => "abcdefghijklmnopqrstuvwxyz"

# include?メソッドと==, ===
p (1..5).include?(5)  # => true
p (1...5).include?(5) # => false
p (1..5) == 2         # => false
p (1..5) === 2        # => true
p (1..5) === 8        # => false

## case式
case 1
when 1 then
  p 1
end
# => 1

case 'abc'
when 'abc' then
  p 'A'
when 'abc' then
  p 'B' # こっちは実行されない
end
# => "A"

a = 10
b = case a
when 1 then
  1
else
  2
end
p b # => 2

## カンマで区切って複数の証券式の指定
case 3
when 1, 2 then; p 1
when 3, 4 then; p 2
else p 3
end
# => 2 

## 条件式に範囲を指定
case 7
when 1...5 then; p 1
when 5..10 then; p 2
end
# => 2
