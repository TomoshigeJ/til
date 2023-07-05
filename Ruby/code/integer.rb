# selectメソッドではブロックを渡す
p [0, 1, 2 ,3, 4, 5].select { |n| n if n.odd? }     # => [1, 3, 5]
p [0, 1, 2 ,3, 4, 5].select { |n| n if n % 2 == 1 } # => [1, 3, 5]
p [0, 1, 2 ,3, 4, 5].select { |n| n unless n.even? } # => [1, 3, 5]
p [0, 1, 2 ,3, 4, 5].select { |n| n unless n % 2 == 0 } # => [1, 3, 5]

# uptoメソッドは反復処理(配列チック)
0.upto(5) do |n|
  p n
end

# 組み合わせと&でシンボルをブロックに
p 0.upto(5).select(&:odd?)
p [0, 1, 2 ,3, 4, 5].select { |n| n if n.odd? }
# => どちらも[1, 3, 5]
