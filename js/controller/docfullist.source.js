'use strict'

angular.module('BHF')
    .controller('C_doc_full_list', function ($scope, $rootScope, $routeParams, API) {
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
            obj =  angular.extend(comm,{id:i,title:title,content:'content'+i,timestamp:new Date().toString()},obj);
            console.log(obj);
            list.push(obj)
        }
        var data = {}
        data.items = list;
        data.pagination = {record_count:100};
        $scope.data = data;
    })