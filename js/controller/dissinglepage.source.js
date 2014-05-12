'use strict'

angular.module('BHF')
    .controller('C_dis_single_page', function ($scope, $routeParams, $rootScope, API) {
        var params = $routeParams;
        $rootScope.project_id = params.project_id;
        var data = {"limit": 20};
        var url = "project/" + params.project_id + "/issue/" + params.issue_id;
        API.doAction(url, {}, "GET", function (_data) {
            $scope.issue = _data;
            refresh(data);
        })
        //刷新评论列表
        function refresh(data) {
            API.doAction(url+"/comment", data, "GET", function (data) {
                $scope.commits = data.items;
            })
        }

        //提交评论
        $scope.submitcommit=function(){
            $scope.simditorvalue = "";
            //获得值
            $scope.$broadcast('simditor:getvalue');
            var _data = {};
            _data.content = $scope.simditorvalue;
            API.doAction(url+"/comment",_data,"POST",function(_data){
                if(_data.id){
                    $scope.$broadcast('simditor:clean');
                    refresh(data);
                }
            });
        }
    })