# 配列のeachメソッド
[1, 2, 3].each do |value|
  p value
end
# => 1~3まで順に出力

# each_with_indexメソッド
['d', 'o', 'g'].each_with_index do |value, index|
  p "#{index}: #{value}"
end
# "0: d"
# "1: o"
# "2: g"

# ハッシュのeachメソッド
{:a => 1, :b => 2}.each do |key, value|
  p "#{key}: #{value}"
end
# "a: 1"
# "b: 2"

# each_keyメソッド
{:animal => 'dog', :name => 'じょーん'}.each_key do |k|
  p k
end
# :animal
# :name

# each_valueメソッド
{:animal => 'dog', :name => 'じょーん'}.each_value do |v|
  p v
end
# "dog"
# "じょーん"

# 範囲オブジェクトのeachメソッド
s = ''
('a'..'z').each do |value|
  s.concat value
end
p s
# => "abcdefghijklmnopqrstuvwxyz"

# uptoメソッド
0.upto(5) do |i|
  p i
end # => 0~5まで順に出力

#downtoメソッド
10.downto(8) do |i|
  p i
end # => 10から8まで順に出力

# timesメソッド
3.times do |i|
  p "#{i}回目のじょん"
end
# "0回目のじょん"
# "1回目のじょん"
# "2回目のじょん"
