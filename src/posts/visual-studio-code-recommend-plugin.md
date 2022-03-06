---
title: "[随時更新]Visual Studio Codeのおすすめエクステンション（拡張機能）紹介"
date: 2021-01-19
thumbnail: "../images/cat.jpg"
thumbnailAlt: Visual Studio Codeのおすすめエクステンション
---


![](https://www.image-pit.com/img/terakoya/posts/visual-studio-code-recommend-plugin/2bec72f467ee32b682f32248f13dbba5.png)

Visual Studio Codeのエクステンション（拡張機能）について紹介します。
まだ新しいエディタソフトなので、これからどんどん充実していくと思います。
色々試し次第随時更新していきます。


## Markdown関連

エディタといったらまずはMarkdownですね。下記がおすすめです。

### Paste Image

<a href="https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image" target="_blank">https://marketplace.visualstudio.com/items?itemName=mushan.vscode-paste-image</a>

Markdownファイル上でクリップボードにコピーした画像を`Cmd+Alt+V`で貼り付ける事ができます。
Markdownの場合、結構画像を表示させるのは面倒なのでこう言ったプラグインは非常に助かります。

![](https://raw.githubusercontent.com/mushanshitiancai/vscode-paste-image/master/res/vscode-paste-image.gif)

### PlantUML

<a href="https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml" target="_blank">https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml</a>

Makdownのように簡単な記述でUMLの様々なダイアグラムを作成できるプラグイン。
**設計書を気軽に作成したい、設計書をGitなどのバージョン管理したい場合に非常におすすめです。**

### Auto-Open Markdown Preview

若干地味ではありますが、このプラグインを入れておくと、markdownファイルを新規作成した場合に自動的にプレビュー画面を表示してくれます。

<a href="https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview" target="_blank">https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview</a>

## Webアプリ開発関連

### Preview HTML file in browser

名前のとおり、HTMLファイルをブラウザで開いてくれるプラグイン。
Windowsなら`Ctrl+Alt+O`、Macなら`Cmd+Alt+O`のショートカットでブラウザで表示確認できます。

<a href="https://marketplace.visualstudio.com/items?itemName=coderfee.open-html-in-browser" target="_blank">https://marketplace.visualstudio.com/items?itemName=coderfee.open-html-in-browser</a>

### ftp-sync

リモート環境とFTPまたはSFTPで同期する場合の定番プラグインです。

<a href="https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync" target="_blank">https://marketplace.visualstudio.com/items?itemName=lukasz-wronski.ftp-sync</a>

![](http://i.imgur.com/W9h4pwW.gif)

### docker

Dockerの開発を協力にサポートするプラグイン。

<a href="https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker" target="_blank">https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker</a>

- `Dockerfile`、`docker-compose.yml`ファイルの自動生成
- `Dockerfile`、`docker-compose.yml`ファイルでのシンタックスハイライト
- `Dockerfile`のスニペット機能
- Dockerhub.comからのイメージを検索して候補としてリストアップしてくれる
- `Dockerfile`の文法チェック
- dockerコマンド呼び出し

## その他

### Sublime Text Keymap for VS Code

Sublime Textを使っている人には非常に嬉しいプラグイン。このプラグインをインストールするとSublime Textと同等のショートカットキーでVisual Studio Codeを操作できるようになります。

<a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings" target="_blank">https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings</a>

### Git History

Git機能は標準でも実装されていますが、それをさらに高機能にするプラグインです。
グラフィカルなGit history表示、コミット差分表示などできます。

<a href="https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory" target="_blank">https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory</a>

### gitflow

Visual Studio Code上で手軽にgitflowを操作できるプラグイン。

<a href="https://marketplace.visualstudio.com/items?itemName=vector-of-bool.gitflow" target="_blank">https://marketplace.visualstudio.com/items?itemName=vector-of-bool.gitflow</a>

これからも随時おすすめのプラグインを見つけたら更新してきます！


<!--
// この記事を日本語化
https://scotch.io/tutorials/best-of-visual-studio-code-features-plugins-acting-like-atom-and-sublime
-->