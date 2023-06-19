# シェルスクリプト変数・配列

- 変数

`=`を使用する。

文字列は`’’`か`””`で囲む。

=の前後に`スペースを入れない`点が注意。

変数呼び出し時には`$`をつける。

```bash
#!/bin/bash
name='じょん'
echo こんちにちは${name}さん。
# => こんにちはじょんさん。
```
```bash
#!/bin/zsh
name='じょん'
echo こんにちは$nameさん。
```
→Bashの時は変数展開時に`{}`でかこむ必要あり

コマンドを```(バッククォート)`でかこむことで、実行結果を変数に代入することもできる。

→$(command)でも代用できる

```bash
result=`ls -ltr`
echo $result
# => ls -ltrの実行結果が表示される

# これでもok(同じ結果)
result2=$(ls -ltr)
echo $result2
```

---

- 配列(BashとZshで微妙に違う)

複数の要素を1つに定義する。`()`でかこむ。

```bash
#!/bin/bash

## 配列の定義
list=(dog1 dog2 dog3)

## 出力いろいろ
echo ${list[@]} # dog1 dog2 dog3
echo ${list[1]} # dog2
echo ${!list[@]} # 0 1 2
echo ${#list[@]} # 3
```
→これはBashの場合。

Bashではインデックス番号は`0`から、Zshではインデックス番号は`1`から。

`${!list[@]}`はzshだと使用できなかった…(エラー出た)

Zshだとこんか感じ
```bash
#!/bin/zsh

list=(dog1 dog2 dog3 dog4 dog5)

echo $list[@] # 全要素
echo $list[1] # インデックス1の要素(zshは1始まり)
echo $list[-1] # マイナスは後ろから
echo $list[2,4] # 2~4番目を取得
echo $list[3,-2] # 3~後ろから2番目まで
echo $#list[@] # 要素数を取得
```

配列の追加・削除・変更あれこれ
```bash
#!/bin/zsh

list=(dog1 dog2 dog3 dog4 dog5)

### 追加 ###

## 先頭に追加
list=(john $list)
echo $list[@]
# => john dog1 dog2 dog3 dog4 dog5

## 末尾に追加
list=($list john2)
echo $list[@]
# => john dog1 dog2 dog3 dog4 dog5 john2

## 末尾に追加②
list+=(+john)
echo $list[@]
# => john dog1 dog2 dog3 dog4 dog5 john2 +john


### 削除 ###

## 先頭を削除
shift list
echo $list[@]
# => dog1 dog2 dog3 dog4 dog5 john2 +john

## 末尾を削除 ##
list=($list[1,-2])
echo $list[@]
# => dog1 dog2 dog3 dog4 dog5 john2
```
Bashだと`unset`を使用して末尾削除できる。

`unset list[1] # 配列のインデックス１を削除`
