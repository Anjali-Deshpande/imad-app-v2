var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config = {
  host: 'localhost:5432',
  user: 'anjali-deshpande',
  password: 'db-anjali-deshpande-88012',
  database: 'anjali-deshpande',
};
var app = express();
app.use(morgan('combined'));

var pool = new Pool(config);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});


 pool.query('SELECT * FROM Student', function(err, result) {
      // handle an error from the query
      if(err) return onError(err);
      res.writeHead(200, {'content-type': 'text/plain'});
      res.end('You are visitor number ' + result.rows[0].count);  });