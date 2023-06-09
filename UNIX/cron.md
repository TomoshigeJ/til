# cron

Unix系OSで使用されるジョブスケジューラー

cronはあらかじめ定義された時間間隔や指定した時刻に定期的に実行されるジョブ(タスク)を管理する。自動的にコマンドやスクリプトを実行することができる。

定期的にバックアップを取ったり、不要なファイルを定期的に削除したりなど…しかし

`cronはPCの電源が入っていないと実行されない`

ので注意。(電源入れっぱなしのサーバーとかなら問題なさそう)

---

- crontab (cron table)

crontabはcronジョブを定義する為の設定ファイル。

ジョブのスケジュールや実行などのコマンドがある。

`crontab -l`：設定されたクーロンの一覧

`crontab -e`：クーロンの設定

`crontab -r`：クーロンの削除

→実行すると全ての登録されたクーロンが削除されるので注意

---

- cronの設定

(分)(時)(日)(月)(曜日) 実行するコマンドのパス(スクリプト) みたいな記述方法

```bash
30 15 10 * * /Users/kery/workspace/scp/test.sh
```
→毎月10日、15:30にtest.shが実行される

`記述のルール`

コマンドのパスはフルパスで記述する必要あり。

`*`は指定なしの意味。(無視される)

分：0~59

時：0~23(24時間表記)

日：1~31

月：1~12

曜日：0~7(0または7は日曜日、1が月,2が火曜…)

リストにしたい時：,で区切る
```bash
15,45, 9,21 * * * 実行コマンド
```
→毎日9時と21時の15分と45分に実行

範囲を指定したい時：-で範囲を指定
```bash
00 12-15 * * * 実行コマンド
```
→毎日12~15時に実行

間隔を指定したい時：/数値で指定
```bash
*/10 * * * * 実行コマンド
```
→10分置きに実行

```bash
00 0-23/3 * * * 実行コマンド
```
→3時間ごとに実行

リストや範囲を組み合わせることもできる
```bash
00 1,6,9-11 * * * 実行コマンド
```
→AM 1:00 6:00 9:00 10:00 11:00に実行











