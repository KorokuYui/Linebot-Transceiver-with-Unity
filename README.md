UnityでLINE botのメッセージを送受信できるソースコード。  
データベースはGoogleスプレッドシートを使用。  
Source code to send and receive LINE bot messages in Unity. The database uses Google Spreadsheets.

# 仕様
実行環境: Unity 2021.3.16f1

# 準備
## スプレッドシート
LINEメッセージ履歴を残すためのデータベースを用意する。今回はgoogleスプレッドシートを用いる。  
シート名を`log`にして、以下のようなラベルを作成しておく（名前はなんでもOK）  
<img src="https://user-images.githubusercontent.com/82018274/211153664-0f211706-5cc3-4b8c-ade3-47326d5af4f5.png" width="400px">  
Google Apps Scriptを起動し、`gas`内のスクリプトを置く。 
- `spreadsheetId`を`https://docs.google.com/spreadsheets/d/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/edit`で書き替える。
- デプロイで発行したURLでunity側のスクリプトを書き替える。   
`
UnityWebRequest www = UnityWebRequest.Get("https://script.google.com/macros/s/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/exec");
`  

## Linebot
[LINE Developer](https://developers.line.biz/ja/)からアカウントを作成し、チャネルアクセストークンを発行する。  
webhookを先ほどデプロイで発行したURLにする。  

## Unity
`Asset` を 所定の位置に配置。

# 使い方
サンプルシーン`LINEtext`では、LINEトーク画面を再現。  
ユーザの選択、トーク履歴の表示、テキストの送受信が可能。
1. LINE botをともだちに追加。任意のテキストを送ってもらうと、スプレッドシートに会話履歴が記入される。
1. Unityのシーンを起動し、reloadを押すと、会話したユーザが表示される。各ユーザのボタンを押すとトーク履歴が表示される。
1. テキストボックスに文章を入力すると、LINE botとしてテキストを送信できる。
