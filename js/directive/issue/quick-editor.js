'use strict'

angular.module('BHF')
    .directive('addtodo', function(API){
        return{
            templateUrl: "views/part/issue/quick-editor.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $el) {
                $scope.newissue = true;
                $scope.new_issue_btn = "添加新任务";
                $scope.issue_obj = {};
                //显示编辑器
                $scope.showEditor = function(display){
                    $scope.showform = display !== undefined ? display : !$scope.showform;
                    $scope.new_issue_btn = "添加新任务";
                    $scope.issue_textarea = "";
                    $scope.newissue = true;
                }

                $scope.submit = function(){
                    //这种方式只是一个临时的解决方案，是不可行的
                    var tag = $scope.item.tag;
                    if(!$scope.issue) return alert('亲，太没节操了，内容必需输入哇')

                    var api = 'project/' + $scope.router.id + '/issue'
                    var data = {
                        status: 'new',
                        title: $scope.issue,
                        tag: tag
                    }
                    data = angular.extend($scope.issue_obj,data);
                    API.doAction(api, data, 'POST', function(data){
                        $scope.$emit('issue:save')
                        $scope.showform = false;

                    })
                }
                $scope.$on('issue:filledit',function(e,data){
                    $scope.showform = true;
                    $scope.newissue = false;
                    $scope.new_issue_btn = "保存任务";
                    $scope.issue_textarea = data.title;
                    $scope.issue_obj = data;
                })

                function reset_edit(){
                    $scope.issue_textarea = "";
                }
            }
        }
    })
