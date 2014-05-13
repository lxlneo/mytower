'use strict'

angular.module('BHF')
    .directive('addtodo', function(API){
        return{
            templateUrl: "views/part/issue/quick-editor.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $el) {
                //显示编辑器
                $scope.showEditor = function(display){
                    $scope.showform = display !== undefined ? display : !$scope.showform;
                }

                $scope.submit = function(){
                    //这种方式只是一个临时的解决方案，是不可行的
                    var tag = $el.parent().parent().parent().attr('data-tag')
                    if(!$scope.issue) return alert('亲，太没节操了，内容必需输入哇')

                    var api = 'project/' + $scope.router.id + '/issue'
                    var data = {
                        status: 'new',
                        title: $scope.issue,
                        tag: tag
                    }


                    API.doAction(api, data, 'POST', function(data){
                        $scope.$emit('issue:save')
                        $scope.showform = false
                    })
                }
            }
        }
    })
