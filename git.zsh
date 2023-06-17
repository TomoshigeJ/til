#!/bin/zsh
### お遊び
### まとめて今日の日付でコミットしてプッシュ
###########################################

# 変数定義
DATE=` date '+%Y%m%d' `

# 関数定義
function gitCommitAndPush {
  git add .
  git commit -m '$DATE'
  git push origin main
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
    echo 'Yes'
    gitCommitAndPush
    ;;
  * )
    echo '処理を中止しました。'
    ;;
esac

# 指定URLを開く
#open https://github.com/TomoshigeJ

