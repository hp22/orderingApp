angular.module('mainApp')
    .factory('itemsFactory',function($http) {
        var retVal = {};
        retVal.msg = 'hellllo';

        // var data = $http.get("data/page1_content.json");
        //get page1 items
        retVal.getPage1Items = function(){
            return $http.get('data/page1_items.json');
            // return data;
        }

        //get page2 items
        retVal.getPage2Items = function(){
            return $http.get('data/page2_items.json');
            // return data;
        }

        //get page3 items
        retVal.getPage3Items = function(){
            return $http.get('data/page3_items.json');
            // return data;
        }

        // retVal.getData = function(){
        //      $http.get('data/page1_content.json').then(function(response){
        //         return response.data;
        //     });
        // }
        return retVal;


    });
