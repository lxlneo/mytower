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
               var issue_obj = {};
                //显示编辑器
                $scope.showEditor = function(display){
                    $scope.showform = display !== undefined ? display : !$scope.showform;
                    $scope.new_issue_btn = "添加新任务";
                    $scope.issue_textarea = "";
                    $scope.newissue = true;
                }

                var submit = function($scope){
                    //这种方式只是一个临时的解决方案，是不可行的
                    //var tag = $el.parent().parent().parent().attr('data-tag');
                    if(!$scope.issue_textarea) return alert('亲，太没节操了，内容必需输入哇')
                    var api = 'project/' + $scope.router.project_id + '/issue'
                    var data = {
                        status: 'new',
                        title: $scope.issue_textarea,
                        tag: $scope.tag||$scope.router.tag
                    }
                    var _data = angular.extend({},data);
                    for(var x in issue_obj){
                        angular.extend(_data,issue_obj);
                        angular.extend(_data,{
                            title: $scope.issue_textarea,
                            tag: $scope.tag||$scope.router.tag
                        })
                        break;
                    }                 

                    var method = _data.id ? 'PUT' :'POST'
                    API.doAction(api, _data, method, function(data){
                        $scope.$emit('issue:save')
                        reset_edit();
                    })
                }
                
                $scope.submit = function(){
                    submit($scope);
                }

                $scope.$on('issue:filledit',function(e,data){
                    $scope.showform = true;
                    $scope.newissue = false;
                    $scope.new_issue_btn = "保存任务";
                    $scope.issue_textarea = data.title;
                    issue_obj = data;
                })

                $scope.enterSubmit = function(e){
                    if(e.keyCode !== 13){
                        return;
                    }
                    //console.log($scope.issue_textarea);
                    submit($scope);
                }

                function reset_edit(){
                    $scope.issue_textarea = "";
                    $scope.showform = false;
                }
            }
        }
    })
