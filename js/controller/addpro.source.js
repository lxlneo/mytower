'use strict'

angular.module('BHF')
    .controller('C_addpro', function ($scope,API) {
        $scope.isshowlist = false;
        $scope.showmembers = function(){
            $scope.isshowlist = true;
        }
        $scope.hideMembers = function(){
            $scope.isshowlist = false;
        }
    })