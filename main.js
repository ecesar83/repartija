var express = require('express')
var app = express()
app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname+'/public'))

app.get('/login', function (req, res) {
  res.render('cesar');
})

app.get('/cuenta', function(req, res){
  res.render('cuenta');
})

app.get('/evento', function(req, res){
  res.render('evento')
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http:/%s:%s', host, port)

})
