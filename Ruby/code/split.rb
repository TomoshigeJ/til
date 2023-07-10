str = "1;2:3;4"
p str.split(/;|:/)

url = 'https://youtu.be/Jtk-ta8qW8o'
p url.split('/')      # => ["https:", "", "youtu.be", "Jtk-ta8qW8o"]
p url.split('/').last # => "Jtk-ta8qW8o"
