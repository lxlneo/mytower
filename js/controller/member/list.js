'use strict'

angular.module('BHF')
    .controller('C_member_list', function ($scope, API) {
        API.doAction('member', {}, function(data){
            $scope.memberList = data
        });
    })