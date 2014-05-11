'use strict'

angular.module('BHF')
    .directive('filelist', function(API){
        return{
            templateUrl: "views/part/dislist.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var api = 'project/' + $scope.router.id + '/comment';
                $scope.project_id = $scope.router.id;
                var data = {limit: 6}
                var comm = {
                    "id":"0",
                    "title": "测试0",
                    "content": "text",
                    "tag": "",
                    "owner": "",
                    "creator": "integer",
                    "status": "",
                    "timestamp": "dateTime",
                    "finish_time": "dataTime",
                    "project_id": "1"
                    },
                    list = [];
                for (var i = 0; i < 10; i++) {
                    var title = "测试"+i;
                    var obj = new Object();
                     obj =  angular.extend(comm,{id:i,project_id:1,title:title,content:'content'+i,timestamp:new Date().toString()},obj);
                    console.log(obj);
                    list.push(obj)
                }
                var data = {}
                data.items = list;
                data.pagination = {record_count:100};
                $scope.data = data;
                console.log(data);
                /*API.doAction(api, data, function(data){
                    $scope.data = data;
                })*/
            }
        }
    })
