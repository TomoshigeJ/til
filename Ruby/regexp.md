# 正規表現

- 正規表現オブジェクト

文字列では両端を`””`(もしくは’’)で囲んだが、正規表現では`//`で囲む。

パーセント記法では`%r`を指定する。

これらの値はRegexpクラスのインスタンス。

正規表現オブジェクトの生成

```ruby
p /Ruby/              # => /Ruby/
p %r(Ruby on Rails)   # => /Ruby on Rails/
p Regexp.new "regexp" # => /regexp/
```

`===演算子`と`case式`

```ruby
p /Ruby/ === "I love Ruby" # => true

p case "I love Ruby"
when /Ruby/ then; "Ruby!"
when /JavaScript/ then; "JavaScript!"
end
# => "Ruby!""
```

マッチした箇所を取得するには`=~演算子`を使用。

正規表現と文字列がマッチした場合は文字列のインデックスを返す。

マッチしなかった場合はnil。

(=~はStringクラスでも定義されているので両者を入れ替えてもok)

```ruby
p /Ruby/ =~ "I love Ruby" # => 7
p "I love Ruby" =~ /Ruby/ # => 7

p /Ruby/ =~ "I am super dog" # => nil
```

正規表現の組み込み変数

マッチした文字列を取り出すには=~演算子と同じスコープで組み込み変数 `$&` を参照する。

マッチした文字列の前の文字列を参照するには `$`` (バッククォート)

マッチした文字列より後の文字列を参照するには`$’` (シングルクォート)

前：`$``

中：`$&`

後：`$’`

``&'` の形で記憶...

```ruby
/bb/ =~ "aabbcc"
p $` # => "aa"
p $& # => "bb"
p $' # => "cc"
```

行頭は `^` で行末は `$` で指定する。

```ruby
reg = /^a/
p reg === "abc" # => true
p reg === "cba" # => false

reg = /a$/
p reg === "abc" # => false
p reg === "cba" # => true
```

選択

並列条件のように、いずれかを満たす場合は `|` を使用。

`|` は優先度が低いので、選択パターンをカッコで囲む。

```ruby
reg = /^(aa|bb)c$/
p reg === "aac" # => true
p reg === "bbc" # => ture
p reg === "abc" # => false
p reg === "aab" # => false
p reg === "ccc" # => false
```

→この場合aac か bbcで構成されているとマッチする

文字クラス(文字の集合を指定)

`[]`で囲む。

```ruby
reg = /a[bcd]e[fg]h/
p reg === "abefh" # => true
p reg === "adefh" # => true
p reg === "abegh" # => true
p reg === "abcde" # => false
```
