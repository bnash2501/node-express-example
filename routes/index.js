var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var headers = JSON.stringify(req.headers);
  var params = JSON.stringify(req.params);
  var query = JSON.stringify(req.query);
  var cookies = JSON.stringify(req.cookies);
  var signedCookies = JSON.stringify(req.signedCookies);
  var $title = 'Not logged in';

  // console.log(`current cookies in request: ${cookies}`);
  // console.log(`cookie ? ${req.cookies['testCookie']}`);
  var randomNumber=Math.random().toString();
  randomNumber=randomNumber.substring(2,randomNumber.length);
  res.cookie('testCookie',randomNumber, { maxAge: 900000 });
  // console.log('cookie have created successfully');

  if (typeof req.cookies['testCookie'] !== 'undefined') {
    console.log('logged in');
    $title = 'Logged in';
  }
  res.render('index', {
    title: $title,
    request : {
      headers: headers,
      params: params,
      query: query,
      cookies: cookies,
      signedCookies: signedCookies
    }
  });
});

module.exports = router;
