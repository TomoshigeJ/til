### !無限ループ注意! ###
# redo
10.times do |i|
  redo if i == 5
  print i, " "
end
# => 0 1 2 3 4 (ここまで表示したあと無限ループ)
