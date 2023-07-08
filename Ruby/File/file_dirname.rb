p File.dirname('home/test.txt') # => "home"
p File.dirname('test.txt') # => "."

# Ruby 3.0ver以降？
p File.dirname("/home/work/ruby/ruby.rb", level=2) # => "/home/gumby"
p File.dirname("/home/work/ruby/ruby.rb", 4) # => "/"
