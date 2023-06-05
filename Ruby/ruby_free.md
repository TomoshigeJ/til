# Rubyのいろいろ

---

- nilガード ||=

変数や式がnilの時にエラーを回避する手法。
```ruby
number ||= 0
```
numberがあればnumberを返す。

numberがnilかfalseの場合、0を代入してnumberを返す。

→nilやfalseによる予期せぬエラーを防ぐことができる。

---
