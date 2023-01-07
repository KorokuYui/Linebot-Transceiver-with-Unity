var CHANNEL_ACCESS_TOKEN = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'

function getUsername(userId) {
  var response = UrlFetchApp.fetch('https://api.line.me/v2/bot/profile/' + userId, {
  headers: {
  Authorization: 'Bearer ' + CHANNEL_ACCESS_TOKEN
  }
  });
  return JSON.parse(response.getContentText()).displayName;
}
