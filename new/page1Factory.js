angular.module('mainApp')
    .factory('page1Factory', function($http) {
        var retVal = {};
        var data;

        // $http.get('data/page1_content.json').success(function(items) {
        //     data = items;
        // });
        retVal.getData = function(){
            return data;
        };

        return retVal;


    });
