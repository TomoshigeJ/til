/*
- Numberオブジェクトの定数
`POSITIVE_INFINITY`：正の無限大 
`NEGATIVE_INFINITY`：不の無限大
→JavaScriptでは表現可能な数値の範囲を超えた場合の戻り値として利用される

`NaN`：Not a Number → 数値として表現できない
→NaNは自分自身を含む全ての数値と等しくない性質を持つ
→NaNかどうか判断する際は`Number.isNaNメソッド`を使用する

`MAX_SAFE_INTEGER / MIN_SAFE_INTEGER`
→JavaScriptで安全に演算できる範囲の整数値の上限と下限を表す
→上限下限を超えた演算は結果も保証されない
→より大きな整数を演算するには`BigInt`の利用を検討する


*/