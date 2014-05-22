'use strict'

angular.module('BHF')
    .controller('C_header', function ($scope,USER) {
        //每次刷新页面获取头像
        USER.refresh();
    })