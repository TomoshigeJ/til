## コードメモ用

# tag_list(カンマ区切り)
tag_list = 'tag1,tag2'
p tag_list
p '--------------------'

# splitメソッドで配列に
tags = tag_list.split(',')
p tags
p '--------------------'
######################################################

# nethttp.rb
require 'uri'
require 'net/http'

uri = URI('https://github.com/TomoshigeJ')
res = Net::HTTP.get_response(uri)
puts res.code
######################################################

# みかん
rescue StandardError
######################################################
