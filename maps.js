/*
Aqui eu criei um objeto para representar um "map"
*/

function Map() {
  var values = {};
  
  this.get = function(key) {
    return values[key];
  }
  
  this.put = function(key, value) {
    var oldValue = values[key];
    values[key] = value;
    return oldValue;
  }
  
  this.remove(key) {
    delete values[key];
  }
  
  this.containsKey = function(key) {
    //return this.values.hasOwnProperty(key);
    return key in values;
  }
  
  this.toString = function() {
    var keys = Object.keys(values);
    var result = '';
    for(var i in keys) {
      result += Utilities.formatString(", %s: [%s]", keys[i], values[keys[i]]);
    }
    return result.substring(1);
  }
  
  this.keys = function() {
    return Object.keys(values);
  }
}

module.exports.create = function() {
  return new Map();
};
