'use strict'

angular.module('BHF')
	.controller('C_index', function($scope, $rootScope, API) {
		$rootScope.pageName = "首页"

		/*API.getProjectsList("project").then(function(data){
            console.log(data);
            $scope.prolist = data.items;
        });*/
	})