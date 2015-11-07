'use strict';

module.exports = function(babel) {
  var t = babel.types;

  return {
    visitor: {
      exit: function(path) {
        console.log('Yay!');
      }
    }
  };
}
