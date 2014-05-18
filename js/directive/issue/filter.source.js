'use strict'

angular.module('BHF')
    .directive('issuefilter', function(API) {
        return{
            templateUrl: "views/part/issue/filter.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                API.doAction('member', {}, function(data){
                    $scope.memberList = data
                });
                var data = {tag:"",status:""};
                $scope.$watch('filter_status',function(newValue, oldValue){
                    data.status = newValue;
                    if(newValue !== oldValue){
                        $scope.$emit("issue:filter",data);
                    }
                })
                $scope.$watch('filter_tag',function(newValue, oldValue){
                    data.tag = newValue;
                    if(newValue !== oldValue){
                        $scope.$emit("issue:filter",data);
                    }
                })
            }
        }
    })
