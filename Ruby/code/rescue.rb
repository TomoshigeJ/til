# 例外処理
begin
  1 / 0 # 例外が発生
  p 1
rescue
  p 0 # ここが実行
end
# => 0

# 実行順序確認
begin   # begin節は実行される
  p 1
rescue  # 例外がないのでrescue節は実行されない
  p 0
else    # rescue節が実行されないのでelse節は実行される
  p 2
ensure  # ensure節は必ず実行
  p 3
end
# => 1, 2, 3 が出力

# rescue修飾子
1 / 0 rescue p 'れすきゅー' # => "れすきゅー"

# メソッド内部のrescue節
def dog
  -1 / 0
rescue
  p '例外感知'
end
dog # => "例外感知"

# 例外オブジェクトの取得
begin
  1 / 0
rescue ZeroDivisionError => e
  p e.backtrace # => ["rescue.rb:35:in `/'", "rescue.rb:35:in `<main>'"]
  p e.message   # => "divided by 0"
end

# 例外の再発生
begin
  1 / 0
rescue ZeroDivisionError
  p $!.class # => ZeroDivisionError
#  raise # => divided by 0 (ZeroDivisionError)
end

# retry
a = 0
begin
  b = 1 / a
rescue ZeroDivisionError
  a += 1
  retry
ensure
  p b # => 1
end

# 実行順
begin
  1 / 0
rescue
  p 1
rescue ZeroDivisionError # この例外処理は実行されない
  p 2
end
# => 1
