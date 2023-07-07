# スレッド
t = Thread.new do
  p 'start'
  sleep 5
  p 'end'
end
p 'wait'
t.join

# start
3.times do |i|
  Thread.start(i) do |index|
    p "thread-#{index} start"
  end
end
sleep 1
