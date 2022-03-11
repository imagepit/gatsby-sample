---
title: GmailAPIで迷惑メールにならずメール送信できるWordpressプラグイン「PostmanSMTP」の使い方
date: 2021-01-19
published: false
thumbnail: "../images/no-image.png"
thumbnailAlt: "猫ねこネコ"
---

![](https://www.image-pit.com/img/wp-postman-aouth2-image.png)

最近Gmailのセキュリティも高まっているのか、今まで使っていたSMTP送信のプラグインでWordpressからメール送信しても迷惑メールに入る場合が出てきました。そこで色々他のプラグインを探していたらAOuth2.0を使ってセキュリティを高めてメール送信できるプラグインを見つけましたのでご紹介いたします。

## Gmail APIとは

Gmail APIとはGmailをAPI（プログラムから呼び出すインターフェース）で制御できるようにするものです。
Gmail APIはGoogle Developer Consoleにアクセスして設定をして利用できるようにします。

## Google Developer Consoleとは

Googleの開発者向けに提供されている管理画面でGoogleの様々なサービスのAPIを利用するための設定を行います。

## OAuth2.0とは

限定的なHTTPリクエストを行うためのフレームワークです。
今回はGmail APIをOAuth認証を行なって利用できるようにし、GmailAPI経由でメールを送るようにします。

OAuth2.0認証を使ってメール送信する流れの図は下記のようになります。

![](https://www.image-pit.com/img/wp-postman-aouth2-image.png)

## PostmanSMTPのインストール

PostmanSMTPも通常のプラグインと同じようにWordpressにインストールできます。
Wordpressの管理画面で「プラグイン」の「新規追加」をクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-01.png)

キーワード部分に「Postman SMTP」を入力して「Postman SMTP Mailer/Email Log」の「今すぐインストール」ボタンをクリックします。
**※似たような名前のプラグインがありますので間違えないように注意しましょう。**

![](https://www.image-pit.com/img/wp-postman-smtp-usag-02.png)

インストールしたら「有効か」しましょう。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-03.png)

## PostmanSMTPの設定方法

PostmanSMTPは基本英語ではありますが、非常に親切な操作でメール送信の設定を行うように工夫されています。
基本的な設定の流れは下記のとおりで、それをウィザード形式で一つずつ設定していきますのでとても簡単です。

- SMTPサーバの指定
- SMTPサーバの認証設定（GoogleのGmail APIのOAuth2.0認証機能設定）
- Postman SMTP経由でのAOuth2.0認証してメール送信許可
- テストメール送信

それでは設定方法について一から順に説明していきます。
まずは下図の場所にPostmanSMTPの設定メニューがありますのでクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-05.png)

「Start the Wizard」ボタンがありましすのでそれをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-06.png)

### SMTPサーバの指定

`Email Address`の箇所にメール送信元のメールアドレス、`Name`の箇所をメール送信元の送信者名を入力して「Next」をクリックします。
**※GmailもしくはGoogle Appsに登録しているドメインのメールアドレスを設定してください。**

![](https://www.image-pit.com/img/wp-postman-smtp-usag-07.png)

送信元のメールアドレスにGoogleのSMTPサーバのアドレスが表示されますのでそのまま「Next」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-08.png)

メールサーバとの接続チェック処理が始まります。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-09.png)

メールサーバの接続確認がとれると下図が表示されます。自動的に推奨する設定がされていますので、そのまま「Next」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-10.png)

### SMTPサーバの認証設定（GoogleのGmail APIのOAuth2.0認証機能設定）

次にGoogle Developer ConsoleでGmail APIの設定をしてWordperssと連携するようにしていきます。
下図矢印の箇所のリンクをクリックしてGoogle Developer Consoleを表示させます。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-11.png)

Gmail APIのアプリケーション登録の画面が表示されます。下図のようにチェックボックスを「はい」に選択して「同意して実行」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-12.png)

APIが有効化された画面が表示されます。「認証情報に進む」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-13.png)

プロジェクトへの認証情報追加の画面が表示されます。
「*APIを呼び出す場所*」を「ウェブサーバ（node.js、Tomcatなど）」
「*アクセスするデータの種類*」は「ユーザデータ」を選択して「必要な認証情報」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-14.png)

OAuth2.0クライアントIDの作成画面が表示されます。
この画面ではWordpressのPostman SMTPの設定画面に表示されている`Authoraized Javascript origins`に記載してあるURLを「承認済みのJavascript生成元」にコピーし、`Authorized redirect URI`のURLを「承認済みリダイレクトURI」の箇所にコピーします。
そしてGoogle Developer Console画面の「クライアントIDの作成」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-15.png)

OAuth2.0の同意画面の設定の入力項目が表示されます。ユーザに表示するサービス名を任意で入力します。
通常はWordpressのサイト名を入力すればOKです。入力したら「次へ」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-16.png)

「認証情報をダウンロードする」エリアが表示されます。
その箇所にCliant IDが表示されていますのでWordpressのPostmanSMTPの`Ciant ID`欄にコピーします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-17.png)

コピーしたら「ダウンロード」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-18.png)

ダウンロードフォルダに`client_id.json`ファイルがダウンロードされますのでそれをテキストエディタなどで開きます。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-19.png)

`client_secret`の次の文字列をコピーして、WordpressのPostman SMTPの`Client Secret`欄にペーストします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-20.png)

これでPostman SMTPの入力欄が全て埋まりましたので、「Next」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-21.png)

これで設定完了です。「Finish」ボタンをクリックしてください。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-22.png)

### Postman SMTP経由でのAOuth2.0認証してメール送信許可

最初の画面に戻ります。今設定した情報を元にGoogleにOAuth2.0の認証をしてパーミッション追加をします。
下図矢印の箇所の`Grant permission with Google`のリンクをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-23.png)

送信元のメールアドレスでのログイン画面が表示されるはずですのでパスワードを入力してログインしてください。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-24.png)

ログインできると下図のとおり許可リクエストの画面が表示されます。「許可」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-25.png)

### テストメール送信

下図のとおりOAuth2.0の認証が成功するメッセージが表示されるはずです。
それでは最後にテストメールを送って見ます。`Send a Test Email`をクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-26.png)

テスト送信したいメールアドレスを入力して「Next」ボタンをクリックします。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-27.png)

下図のように正常に送信できれば`Sending the message: Success`と表示されます。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-28.png)

実際に送信先に設定したメールアドレスにもメールが届きます。

![](https://www.image-pit.com/img/wp-postman-smtp-usag-29.png)

## PostmanSMTPの使い方

メール送信テストで問題が出なければ、あとは普通にWordpressを使ってメール送信するだけです。
例えば送信フォームを組み込む定番プラグインである「Contact Form 7」も今後フォーム送信時のメール送信もPostmanSMTP経由で（つまりはGmail API）経由でメール送信されるというわけです。

Gmail APIからのメール送信は、信頼された送信元として送信されますので、セキュリティレベルが高くなったGmailも迷惑メールにならず正常にメールが送信されるようになります。

## メールアカウントの送信制限には注意

いくらPostmanSMTPで正常にメール送信できるようになったとしても、一時に大量のメールを送るのは避けたほうがいいでしょう。
特にGmail APIでもメール送信には一定の制限事項がありますので、その制限に合わせて利用する必要があります。

Gmail APIのメール送信制限については下記ページが該当しますのでこちらをご覧頂ければと思います。

<iframe class="hatenablogcard" style="width:100%;height:155px;" title="https://support.google.com/a/answer/166852?hl=ja&vid=0-533504966302-1489133855357" src="https://hatenablog-parts.com/embed?url=https://support.google.com/a/answer/166852?hl=ja&vid=0-533504966302-1489133855357" width="300" height="150" frameborder="0" scrolling="no"></iframe>

Wordpressをビジネスに使う場合にはフォーム送信からのメールが正常に届くかはとても大事な事ですのでPostman SMTPを使って迷惑メールにならず正常にメールを送れるようにしましょう。