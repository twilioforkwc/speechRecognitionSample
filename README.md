# Speech Recognition サンプル

## 目的

TwilioのSpeech Recognitionを体感していただくためのプログラムです。
いわゆるオウム返しで、話した内容をオウム返しします。

## しくみ

- Twilio Functionsを使い、サーバーレスで動作します。
- Gather動詞とSay動詞を組み合わせて利用します。
- Gather動詞のactionパラメータを省略することで、再度自分自身を呼び出します。
- なるべく自然な会話になるようにTimeoutを2秒で設定しますが、タイムアウトになった場合は5秒に伸ばして、再度聞くようにしています。
- それでも答えなかった場合は終了します。

## 注意点

- 050番号着信料（1円/分）に加えて、１変換あたり3円がかかります。

## 実装方法

1. Twilioの管理コンソールにログインします。
2. ボタンアイコンを押して、スライドメニューからRuntimeを選択します。
3. Functionsの中のManageを選択します。
4. 新しいFunctionsを作成します（テンプレートはBlankでOKです）。
5. FUNCTION NAMEに「音声認識」を入れます（なんでも良いです）。
6. PATHの欄には、「/speechRecognition」と入れます（なんでも良いです）。
7. ACCESS CONTROLにチェックを入れます。
8. EVENT欄は、「Incoming Voice Calls」を選択します。
9. functions.jsの中身をすべてコピーし、CODE欄に貼り付けします。
10. Saveボタンを押して保存します。
11. ボタンアイコンを押して、スライドメニューから電話番号を選択します。
12. 電話番号の中の「番号を購入」を選択します。
13. 何か一つ050番号を購入します。
14. 購入した電話番号を設定します。
15. A CALL COMES INは、「Voice Calls」を選択してください。
16. CONFIGURE WITHは、「Webhooks, or TwiML Bins or Functions」を選択します。
17. A CALL COMES INは、「Function」を選択し、さらに先程作成した「音声認識」という名前のFunctionsを選択します。
18. 保存ボタンを押して設定を反映させます。

以上で終了です。
後は購入した電話番号に電話を掛けて、２秒以内に話かけるとオウム返しをしてくれます。
