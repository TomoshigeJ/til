# 文字列の場合
v1 = 'dog'
v2 = 'dog'
v3 = 'dog'
# v1~v3は別のオブジェクト
p v1.object_id
p v2.object_id
p v3.object_id

# シンボルの場合
v1 = :dog
v2 = :dog
v3 = :dog
# v1~v3は同じオブジェクト
p v1.object_id
p v2.object_id
p v3.object_id
