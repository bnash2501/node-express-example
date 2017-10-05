var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var headers = JSON.stringify(req.headers);
  var params = JSON.stringify(req.params);
  var query = JSON.stringify(req.query);
  var cookies = JSON.stringify(req.cookies);
  var signedCookies = JSON.stringify(req.signedCookies);

  console.log(`current cookies in request: ${cookies}`)
  // var randomNumber=Math.random().toString();
  // randomNumber=randomNumber.substring(2,randomNumber.length);
  // res.cookie('cokkieName',randomNumber, { maxAge: 900000, httpOnly: true })
  // console.log('cookie have created successfully');

  res.render('index', {
    title: 'Users',
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
