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

