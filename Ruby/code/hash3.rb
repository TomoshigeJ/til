# ロケット
a = {"dog1" => 1, "dog2" => 2, "dog3" => 3}
p a["dog1"] # => 1
p a["dog2"] # => 2
p a         # => {"dog1"=>1, "dog2"=>2, "dog3"=>3}
p a["dog5"] # => nil

# シンボルは : で区切る
b = {dog1: 1, dog2: 2, dog3: 3}
p b # => {:dog1=>1, :dog2=>2, :dog3=>3}

# デフォルト値
c = Hash.new(5)
p c[:dog1] # => 5
p c[:dog5] # => 5

# []によるハッシュ生成
d = Hash[:dog1, 1, :dog2, 2, :dog3, 3]
p d # => {:dog1=>1, :dog2=>2, :dog3=>3}

# 2次元配列からのハッシュ
e = [[:dog1, 1], [:dog2, 2], [:dog3, 3]].to_h
p e # => {:dog1=>1, :dog2=>2, :dog3=>3}

# ハッシュ引数
def dog x, y, z
  z
end
p dog(1, 2, :dog1=>1, :dog2=>2) # => {:dog1=>1, :dog2=>2}

def rabbit r, rr, rrr
  rr
end
p rabbit('rabbit', {r1: 1, r2: 2, r3: 2}, 222) # => {:r1=>1, :r2=>2, :r3=>2}
