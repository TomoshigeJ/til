# ヒアドキュメント
str = <<EOF
first text
second text
EOF
p str # => "first text\nsecond text\n"

#######################################

# 式展開
name = 'じょん'

str = <<EOF
私の名前は
#{name}
です。
EOF
p str # => "私の名前は\nじょん\nです。\n"

# シングルクォートだと式展開無効
name = 'じょん'

str = <<'EOF'
私の名前は
#{name}
です。
EOF
p str # => "私の名前は\n\#{name}\nです。\n"

# バッククォーとでコマンド
str = <<`EOF`
date +%Y/%m/%d
echo 'じょん'
EOF
p str # => "2023/07/06\nじょん\n"

#######################################

# <<~EOF
str = <<~EOF
          インデント
          インデント2
EOF
p str # => "インデント\nインデント2\n"

# おんなじの<<EOFでやると
str = <<EOF
          インデント
          インデント2
EOF
p str # => "          インデント\n          インデント2\n"
