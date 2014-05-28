'use strict'

angular.module('BHF')
    .controller('C_dis_single_page', function ($scope, $routeParams, $rootScope,API,USER,$sce) {
        var params = $routeParams;
        $rootScope.project_id = params.project_id;
        $rootScope.router = $routeParams
        var data = {"limit": 20};
        var url = "project/" + params.project_id + "/issue/" + params.issue_id;
        API.doAction(url, {}, "GET", function (_data) {
            $scope.single_issue = _data;
            refresh(data);
        })
        //刷新评论列表
        function refresh(data) {
            API.doAction(url+"/comment", data, "GET", function (data) {
                $scope.commits = data.items;
            })
        }

        //提交评论
        $scope.submitcomment=function(){
            $scope.simditorvalue = "";
            //获得值
            $scope.$broadcast('simditor:getvalue');
            var _data = {};
            _data.content = $scope.simditorvalue;
            if(_data.content == ""){
                alert('必须输入内容的~');
                return;
            }
            API.doAction(url+"/comment",_data,"POST",function(_data){
                if(_data.id){
                    $scope.$broadcast('simditor:clean');
                    refresh(data);
                }
            });
        }
        $scope.tohtml = function(str){
           return $sce.trustAsHtml(str);
        }

        USER.getUser(function(user){
            $scope.user = user;
        });
    })