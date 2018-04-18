angular.module('mainApp')
    .controller('page1Ctrl', function($scope, $http, $window) {
        $scope.msg = "test";
        $scope.filename = "data/pictures/a.png"
        $scope.pic_dimension = "position:relative;width:100px; height:100px;"

        $scope.msg = $window.innerWidth;
        $scope.grid_width = $window.innerWidth / 12;
        //out of 12 columns ui-view uses 8 columns

        $scope.getStyle = function(index){
            var style = $scope.pic_dimension + "top:"+($scope.grid_width * Math.floor(index/4))+"px;"+"left:"+$scope.grid_width * (index)+"px;";
            return style;
        }

        $scope.getlabelStyle = function(index){
            var style = "position:relative;" + "top:"+($scope.grid_width * (1+Math.floor(index/4))/1.2)+"px;"+"left:"+(($scope.grid_width/2 * index))+"px;";
            // $scope.msg = style;
            return style;
        }

        $scope.addItem = function(price){
            $scope.msg = price;
        }
        //read json file
        $http.get('data/page1_content.json').success(function(data) {
            $scope.pictures = data;
        });


    });
