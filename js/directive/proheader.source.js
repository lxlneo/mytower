'use strict'

angular.module('BHF')
    .directive('proheader', function(API,$rootScope){
        return{
            templateUrl: "views/part/proheader.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                  var url = "project/"+$rootScope.project_id;
                  API.doAction(url,{},'GET',function(data){
                        $scope.project = data;
                  });
                }
            }
    })
