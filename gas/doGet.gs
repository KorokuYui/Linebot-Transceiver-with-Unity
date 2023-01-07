// Unity側でGetを使うと呼び出される
// スプレッドシート上のデータ取得
function doGet(e) {  
  var sheet = SpreadsheetApp.getActive().getSheetByName('log');
  var lastRow = sheet.getLastRow();

// データを全て格納
  var data_range = sheet.getRange(1,1,lastRow,4);
  var data_set = data_range.getValues();

  var response = {};
  var data = [];
  for(var row = 1; row < lastRow; row++) {
    data.push({userId: data_set[row][0], name: data_set[row][1], message: data_set[row][2], date: data_set[row][3]})
  };
  response.events = data;

  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(ContentService.MimeType.JSON);
}
