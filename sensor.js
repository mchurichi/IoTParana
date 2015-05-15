var b = require('bonescript');
// function printAIN1(x) {
//     // console.log('x.value = ' + x.value);
//     // console.log('x.err = ' + x.err);
//     return x.value;
// }

exports.read = function(callback) {
  b.analogRead('P9_40', callback);
};
