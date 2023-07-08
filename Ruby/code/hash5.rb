# Hash#eachのブロックパラメータはArrayで渡される。
h = {a: 1, b: 2}
h.each do |check|
  p check       # [:a, 1]
  p check.class # Array
end
