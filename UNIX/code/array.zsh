#!/bin/zsh

list=(dog1 dog2 dog3 dog4 dog5)

echo $list[@]
echo $list[1]
echo $list[-2]
echo $list[2,4]
echo $list[3,0]
echo $#list[@]
