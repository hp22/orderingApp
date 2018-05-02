'use strict';

/**
 * @ngdoc service
 * @name orderApp.itemsFactory
 * @description
 * # itemsFactory
 * Factory in the orderApp.
 */
angular.module('orderApp')
  .factory('itemsFactory', function($http) {

    var retObj = {};
    // retObj.total = 0.0;
    // Public API here
    retObj.getItems1 = function() {
      return ($http.get("json-files/page1-items.json"));
    }

    return retObj;
  });
