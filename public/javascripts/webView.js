window.webView = (function() {
  var sendMessage = function(msg) {
    if (typeof msg === 'undefined') {
      msg = "Message from web";
    }
    console.log( msg);
    window.postMessage(msg, "*");
  }

  return {
    webviewMessage: sendMessage
  }
}());

document.addEventListener("message", function(data) {
  alert(data.data);
});

window.webView.webviewMessage('test message');
