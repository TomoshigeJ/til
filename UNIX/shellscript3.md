# シェルスクリプトを作ってみる

作ってみたやつ
- git add & commit & pushするやつ
- あくまで練習用
- tilのルートディレクトリで使用
- 変更ファイルはすべてaddされる(git add . 使用の為)
- コミットメッセージは全ファイル本日日付(20230621 みたいなの)で固定。
- 変更ファイルはすべてコミットされてプッシュされる。
- 一応、実行前にやるかどうかの確認をする。(yes or no)

```bash
#!/bin/zsh
### お遊び
### まとめて今日の日付でコミットしてプッシュ
###########################################

# 変数定義
DATE=` date '+%Y%m%d' `

# 関数定義
function gitCommitAndPush {
  # git add
  git add .

  # git commit
  echo git commit の結果
  echo -----------------------------------------------------------------
  git commit -m $DATE
  echo -----------------------------------------------------------------

  # git push
  echo git push の結果
  echo -----------------------------------------------------------------
  git push origin main
  echo -----------------------------------------------------------------

  # 完了
  echo コミットしてプッシュしました!
}

# 画面クリア
clear

# git status
echo message: 以下のファイルをコミットしてプッシュしますか？
echo message: コミットメッセージは $DATE です。
echo message: git statusの結果
echo -----------------------------------------------------------------
git status
echo -----------------------------------------------------------------

# 入力待ち
echo -n '実行しますか？ [y/n]: '
read ANSWER

case $ANSWER in
  [y] )
    echo '処理を開始します。'
    echo -----------------------------------------------------------------
    gitCommitAndPush
    ;;
  * )
    echo '処理を中止しました。'
    ;;
esac

# 指定URLを開く
#open https://github.com/TomoshigeJ
```

---

- 関数定義

JavaScriptみたいに関数を定義して呼び出せる。

今回はadd, commit, pushの処理を関数として定義。

yes選択時に関数を実行。

```bash
# 関数定義
function 関数名 {
  ...処理たち
}

# 呼び出し
関数名
```

cshで言う`goto`みたいな動きをしたい時に関数で代用するといいみたい。

→bashにgotoはない…

---

- 入力待ち

```bash
echo -n 何か入力せい:

read str

echo $str
```

echoコマンドのnオプションは出力文字の最後を改行しない。

→ターミナル状で処理がとまるので、`:`の後ろに入力した内容が入る。

readコマンドで標準入力から受け取った内容を1行単位で変数に格納。

もしくは
```bash
read -p "ok? (y/N): " yn
case "$yn" in [yY]*) ;; *) echo "abort." ; exit ;; esac
```
みたいなのでもok。

→readコマンドの最後のynは変数。入力値がynに代入される。
