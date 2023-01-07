var CHANNEL_ACCESS_TOKEN = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

function pushMessage(USERID, text) {
  var postData = {
    "to" : USERID,
    "messages" : [
      {
        'type':'text',
        'text':text,
      }
    ]
  };

  var url = "https://api.line.me/v2/bot/message/push";
  var headers = {
    "Content-Type": "application/json; charset=UTF-8",
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

  var options = {
    "method": "post",
    "headers": headers,
    "payload": JSON.stringify(postData)
  };

  var response = UrlFetchApp.fetch(url, options);
}
