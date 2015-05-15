var app = require('express')();
var sensor = require('./sensor.js');
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9090);

var options = {
  root: __dirname + '/'
};

app.get('/', function (req, res) {
  res.sendFile('index.html', options);
});

io.on('connection', function (socket) {
  var loop = setInterval(function() {
    sensor.read(function(x){
      socket.emit('news', { fuerza: x.value  });
    });
  }, 100);


  // socket.on('my other event', function (data) {
  //   console.log("");
  // });
});
