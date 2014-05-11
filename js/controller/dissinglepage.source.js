'use strict'

angular.module('BHF')
    .controller('C_dis_single_page', function ($scope, $routeParams, API) {

        var comm = {
                type: "bug",
                target_id: 1,
                creator: 1,
                content: "what you saied",
                timestamp: new Date(),
                parent_id: 1
            },
            data = {};
            data.items = [];
        for (var i = 0; i < 6; i++) {
            var obj = angular.extend({}, comm, {'content': "what you saied" + i});
            data.items.push(obj);
        }
        $scope.data = data;
    })