'use strict'

angular.module('BHF')
    .directive('proheader', function(API,$rootScope){
        return{
            templateUrl: "views/part/project/header.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                  var url = "project/"+$scope.project_id||$scope.router.project_id;
                  API.doAction(url,{},'GET',function(data){
                        $scope.project = data;
                  });
                }
            }
    })
