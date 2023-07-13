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
  echo message: git commit の結果
  echo -----------------------------------------------------------------
  git commit -m $DATE
  echo -----------------------------------------------------------------

  # git push
  echo message: git push の結果
  echo -----------------------------------------------------------------
  git push origin main
  echo -----------------------------------------------------------------

  # 完了
  echo message: コミットしてプッシュしました!
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

# 待機
echo message: 指定URLを開きます...
sleep 2

# 指定URLを開く
open https://github.com/TomoshigeJ

