# raiseの引数は1:例外クラスのインスタンス、2:メッセージ
raise ArgumentError, '引数が不正です'
# => 引数が不正です (ArgumentError)

raise ArgumentError.new, 'こちらも不正'
# => こちらも不正 (ArgumentError)

err = ArgumentError.new('爆発した')
raise err
# => 爆発した (ArgumentError)

# メッセージの省略
raise ArgumentError
# => ArgumentError (ArgumentError)

# 例外クラスのインスタンスの省略
raise 'オリジナルエラーメッセージ'
# => オリジナルエラーメッセージ (RuntimeError)
