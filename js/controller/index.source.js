'use strict'

angular.module('BHF')
    .controller('C_index', function ($scope, API) {
        API.doAction("project", {}, function (data) {
            $scope.prolist = data.items;
        })
    })