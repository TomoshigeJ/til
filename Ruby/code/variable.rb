# 自己代入におけるオブジェクトの参照先
v1 = 'dog1'
v2 = v1
v1 += 'dog2'
p v1 # => "dog1dog2"
p v2 # => "dog1"
