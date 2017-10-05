document.addEventListener("message", function(data) {
  alert(data.data);
});

window.webView.webviewMessage('test message');