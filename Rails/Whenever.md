# Whenever (gem)

cronの設定をrubyの簡単な文法で扱えるようにしたライブラリ。

通常crontabに記述する内容をruby言語で書けるので、お手軽にcronの実装ができる。

---

- 初期ファイル作成(gemインストール後)
```bash
bundle exec wheneverize .
```
→`config/schedule.rb` が作成される

`schedule.rb` には実際に定期実行したい処理の記述(処理内容は別ファイルで定義)や実行日時、間隔の指定などを行う。

こんな感じ
```Ruby
# config/schedule.rb
every 1.minutes do # 1分ごとに実行
  rake 'dog_task:bow'
end

every :hour do
  rake 'dog_task:walk'
end
```

---

- Rakeタスクファイルの作成

タスク処理したい内容を記述するファイル。

コマンドで作れる
```bash
rails g task dogs
```
→`lib/tasks/dogs.rake`というファイルが作成される
```Ruby
# lib/tasks/dogs.rake
namespace :dogs do
end→このファイルに処理を記述していく

→1つのファイルに複数のタスクを登録できるので複数形にする
```

記述のイメージ
```Ruby
namespace :タスクのファイル名 do
  desc '実行する処理の説明'
  task :タスクの名前 do
    実行する内容
  end
end
```
こんな感じ
```Ruby
namespace :dogs do
  desc 'クーロンのテスト用'
  task bow: do
    check_time = Time.current
    puts "実行時刻: #{check_time}"
    puts '実行処理: わんわん'
  end
end
```

---

- タスクファイルの実行

タスクファイル自体はクーロン(whenever)でなくコマンドでの単体実行もできる
```bash
# bundle exec rake タスクのファイル名
bundle exec rake dogs:bow
```
→dogs.rakeのbowが実行された

---

- Wheneverでcronに登録する

ここまでのおさらい

`config/schedule.rb`：スケジュール、実行するタスクファイル

`lib/tasks/dogs.rake`：タスクの内容のファイル

cronへの登録
```bash
bundle exec whenever --update-crontab
```

cronから削除
```bash
bundle exec whenever --clear-crontab
```

---

cron自体はUNIX系のOS(MacとかLinuxとか)に標準である機能。

→railsとか関係なしにコマンドで登録したり、削除もできる

現在登録されているクーロン一覧
```bash
crontab -l
```