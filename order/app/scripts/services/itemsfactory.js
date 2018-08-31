'use strict';

angular.module('orderApp')
  .factory('itemsFactory', function($http) {

    var retObj = {};
    retObj.itemObject = {};
    retObj.flag = false;
    retObj.user = "_";

    // Public API here
    retObj.getItems1 = function() {
      return ($http.get("json-files/page1-items.json"));
    }
    retObj.getItems2 = function() {
      return ($http.get("json-files/page2-items.json"));
    }
    retObj.getItems3 = function() {
      return ($http.get("json-files/page3-items.json"));
    }

    retObj.getItemObject = function() {
      return retObj.itemObject;
    }
    retObj.setItemObject = function(item) {
      //flag to tell cost.js that there has been changes
      retObj.flag = !retObj.flag;
      retObj.itemObject = item;

    }

    return retObj;
  });
