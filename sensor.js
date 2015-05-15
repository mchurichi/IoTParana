
var isBB = process.arch === 'arm';
var b =  isBB ? require('bonescript') : require('./bonescriptmock');

exports.read = function(callback) {
  b.analogRead('P9_40', callback);
};
