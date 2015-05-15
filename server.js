var app = require('express')();
var sensor = require('./sensor.js');
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(9090);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


io.on('connection', function (socket) {
  var loop = setInterval(function() {
    sensor.read(function(x){
      socket.emit('news', { fuerza: x.value  });
    });
  }, 10);


  // socket.on('my other event', function (data) {
  //   console.log("");
  // });
});
