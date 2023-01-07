function doPost(e) {
  // 投稿されたメッセージを取得
  if (JSON.parse(e.postData.contents).events){ // LINE側からの場合
    var json = JSON.parse(e.postData.contents).events[0];
    if (json.source.type == "group") {
      var lineUserId = json.source.groupId;
    } else if (json.source.type == "room") {
      var lineUserId = json.source.roomId;
    } else {
      var lineUserId = json.source.userId;
    }
    var postMsg = json.message.text;
    var sendTime = json.timestamp;
    
    // ユーザー名の取得
    var playerName = getUsername(lineUserId);
  }else{ // Unity側からの場合
    var json = JSON.parse(e.postData.getDataAsString());
    var lineUserId = json.userId;
    var postMsg = json.message;
    var sendTime = new Date();
    var playerName = "Line_bot";
    
    // 返信を実行
    pushMessage(lineUserId, postMsg);
  }  
   
  // スプレッドシートへ保存=======================================
  var spreadsheetId = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
  var sheetName = "log";
  var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
  var sheet = spreadsheet.getSheetByName(sheetName);

  // スプレッドシートに記入する配列
  sendTime = new Date(sendTime);
  sendTime.setHours(sendTime.getHours() + 9);
  var arr = [lineUserId, playerName, postMsg, sendTime];
  //arr.push(new Date(sendTime));
 
  // セルの最下部に配列を転記
  sheet.appendRow(arr);
  // =======================================

  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
