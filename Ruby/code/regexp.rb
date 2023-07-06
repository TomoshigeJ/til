# 正規表現オブジェクトの生成
p /Ruby/              # => /Ruby/
p %r(Ruby on Rails)   # => /Ruby on Rails/
p Regexp.new "regexp" # => /regexp/

# ===演算子とcase式
p /Ruby/ === "I love Ruby" # => true

p case "I love Ruby"
when /Ruby/ then; "Ruby!"
when /JavaScript/ then; "JavaScript!"
end
# => "Ruby!""

# =~演算子
p /Ruby/ =~ "I love Ruby" # => 7
p "I love Ruby" =~ /Ruby/ # => 7

p /Ruby/ =~ "I am super dog" # => nil

# 組み込み変数 $` $& $'
/bb/ =~ "aabbcc"
p $` # => "aa"
p $& # => "bb"
p $' # => "cc"

# 行頭は ^ で行末は $ で指定
reg = /^a/
p reg === "abc" # => true
p reg === "cba" # => false

reg = /a$/
p reg === "abc" # => false
p reg === "cba" # => true

# 選択
reg = /^(aa|bb)c$/
p reg === "aac" # => true
p reg === "bbc" # => ture
p reg === "abc" # => false
p reg === "aab" # => false
p reg === "ccc" # => false

# 文字クラス
reg = /a[bcd]e[fg]h/
p reg === "abefh" # => true
p reg === "adefh" # => true
p reg === "abegh" # => true
p reg === "abcde" # => false
