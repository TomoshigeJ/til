#!/bin/bash

list=(dog1 dog2 dog3)

echo ${list[@]}
echo ${list[1]}
echo ${!list[@]}
echo ${#list[@]}
