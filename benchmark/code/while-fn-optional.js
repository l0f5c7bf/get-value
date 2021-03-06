
var isObject = require('isobject');

module.exports = function getValue(obj, str, fn) {
  if (obj == null || !isObject(obj)) {
    return {};
  }

  if (str == null || typeof str !== 'string') {
    return obj;
  }

  var paths;

  if (fn && typeof fn === 'function') {
    paths = fn(str);
  } else {
    paths = str.split('.');
  }

  var len = paths.length;
  var i = 0;
  var last;

  while (i < len) {
    var key = paths[i];
    last = obj[key];
    if (last == null) {
      return {};
    }
    if (typeof last === 'object') {
      obj = last;
    }
    i++;
  }
  return last;
};
