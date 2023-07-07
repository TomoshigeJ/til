# next
10.times do |i|
  next if i === ( 3 || 5)
  print i, " "
end
print "\n"
# => 0 1 2 4 5 6 7 8 9

# break
10.times do |i|
  break if i === ( 3 || 5)
  print i, " "
end
print "\n"
# => 0 1 2 
