'use strict';

/*

Refactor the following functions. Use higher-order functions rather than for-loops.

Choose from the following higher-order functions: map, filter, reduce, every, some

Run the command 'mocha' to test. Tests check for expected output and absence of for-loops.

*/

module.exports = {

  sum: (arr, base) => {
    return arr.reduce(function(base, curr){
      return base + curr;
    }, base);
  },

  someObjsContainProp: (arr, prop) => {
    return arr.some(function(obj) {
       if(obj.hasOwnProperty(prop)){
         return true;
       }
       return false;
    });
  },

  convertNameArrayToObject: (arr) => {
    return arr.map(function(element, i, arr){
      var obj = {};
      obj.first = arr[i][0];
      obj.last = arr[i][1];
      return obj;
    });
  },

  objContainsProp: (arr, prop) => {
    return arr.every(function(obj) {
       if(obj.hasOwnProperty(prop)){
         return true;
       }
       return false;
    });
  },

  stringMatch: (arr, str) => {
    return arr.filter(function(element) {
      if(element.indexOf(str) !== -1){
        return element;
      }
    });
  },

};
