# while式
i = 0
while (0..4) === i do
  p i
  i += 1
end
# => 0~4までが出力

# until式
i = 0
until i == 5 do
  p i
  i += 1
end
# => 0~4までが出力

# 後置while
i = 0
begin
  p i
  i += 1
end while(1..4) === i
# => 0~4までが出力

# while修飾子
i = 0
p i += 1 while (0..4) === i
# => # => 1~5までが出力
