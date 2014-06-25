/*
Classe para gerar números aleatórios
*/
var crypto = require('crypto');

function gen(number) {
  var data = number ? ''+number : crypto.randomBytes(32);
  
  return crypto.createHash('sha256').update(data).digest('base64');
}

exports.generateString = function(number) {
  // return crypto.randomBytes(32).toString('hex');
  return gen(number);
}
exports.generateEscapedString = function(number) {
  // return crypto.randomBytes(32).toString('hex');
  return gen(number).replace(/\W/g,'');
}
