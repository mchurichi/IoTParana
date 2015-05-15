var fs = require("fs");


module.exports = bonescript = {};

bonescript.analogRead = function(pin, cb) {
  var pindata = JSON.parse(fs.readFileSync( __dirname + "/pindata.json", "utf8"));
  if(pindata[pin]) {
    cb(pindata[pin]);
  } else {
    cb({err: "dato no disponible en pindata.json"});
  }

}
