'use strict'

angular.module('BHF')
    .controller('C_dis_full_list', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $rootScope.project_id = $scope.router.project_id;
       // $scope.$broadcast("discusslist:update",{limit:20});
        //触发 分页动作.通过事件 自定义指令无法接收
        //pagination: {pageSize:20, offset:0, limit:20, pageIndex:1, count:9, recordCount:9, pageCount:1}
       	$scope.C_dis_full_list_refresh ={pageSize:20,pageIndex:1}
    })