'use strict'

angular.module('BHF')
    .directive('uncompletedtodos', function(API){
        return{
            templateUrl: "views/part/uncompleted_todos.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                $scope.showform = false;
                var loadIssue = function(){
                    var url = 'project/' + $scope.router.id + '/issue'
                    var data = {
                        undone: true,
                        limit: 4,
                        offset: 0,
                        tag: $scope.tag
                    }

                    API.doAction(url, data, function(data){
                        $scope.data = data
                    })
                }

                //当issue被保存
                $scope.$on('issue:save', function(){
                    loadIssue()
                })
                $scope.finishedIssue = function(){

                }
                loadIssue();

                $scope.$on('issue:showedit',function(e,data){
                    $scope.$broadcast('issue:filledit',data);
                })
            }
        }
    })
