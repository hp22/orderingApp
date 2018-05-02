'use strict';

angular.module('orderApp')
  .factory('itemsFactory', function($http) {

    var retObj = {};
    retObj.itemObject = {};
    retObj.flag = false;

    var filenameList = [
      "json-files/page1-items.json",
      "json-files/page2-items.json",
      "json-files/page3-items.json"
    ];

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
      retObj.flag = !retObj.flag;
      retObj.itemObject = item;

    }

    return retObj;
  });
