# bash

多くのUNIX系OSで標準的に用いられるシェルプログラムの1つ

Bash(Bourne Again SHell)はUnix系OSで使用されるコマンドラインインターフェース(CLI)の一種であり、シェルスクリプトを実行する為の主要なシェル。

`シェルとは？`

シェル(shell)とは、UNIX系OSでコマンド操作の基本的なルールを示すもののこと。

シェルにはsh, bash, tcsh, csh, zshなどいろいろある。

現在の環境で使用しているシェルを確認する方法
```bash
echo $SHELL
```
→/bin/zsh や /bin/bashと出てくる

`シェルスクリプトとは？`

OSを操作する為のシェル上で実行できる簡易なプログラミング言語(スクリプト言語)。

複数のOS言語や制御文などを組み合わせて作られる。

一般的にはUNIX系のOSのシェルで実行できるものを指す。

あらかじめコマンドや処理を1つのファイルにまとめておいて、実行したら書いてある内容を勝手にやってくれる便利なやつ。

`bash と zsh`

bashが一番よく使用されている歴史のあるシェル。

zshは他のシェル(bash, csh, sh, tcsh)の機能をほぼ網羅している最強のシェル。

MacOSではもともとbashを採用していたが、Catalina世代からデフォルトのシェルをzshに変更した。

---

- 基本的なbashシェルスクリプトの書き方

`シバン ジェバング(Shebang)`

シェルスクリプトの1行目によく記載されている`#!/bin/bash`みたいなやつ。

このシェルスクリプトはbashを使用しますよ〜と宣言するようなイメージ。

`コメントアウト`

`#`をつけるとコメントアウトできる。

`変数の定義`

変数名=値 の形。

注意点としては=の前後にスペースを入れないこと！
```bash
# OK
name=john

# NG
name = john
```
定義した変数を使用する時は`$`をつける！
```bash
name=じょん
echo $name
```

