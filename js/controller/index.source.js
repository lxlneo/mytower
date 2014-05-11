'use strict'

angular.module('BHF')
    .controller('C_index', function ($scope, API) {
        /*API.doAction("project", {}, function (data) {
            $scope.prolist = data.items;
        })*/
        $scope.prolist = [
            {
                "id":1,
                "title": "test",
                "description": "text",
                "contact": "text",
                "start_date": "dateTime",
                "end_date": "dateTime",
                "repos": "12121",
                "creator": "integer",
                "timestamp": "dateTime",
                "status": "进行中"
            }
        ]
    })