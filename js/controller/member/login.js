'use strict'

angular.module('BHF')
    .controller('C_login', function ($scope, API) {
        $scope.login = function(e){
            e.preventDefault()

            var data = {
                password: $scope.password || '',
                account: $scope.account || ''
            }


            if(data.password.length == 0 || data.account.length == 0){
                return alert('用户名和密码必需输入')
            }

            API.doAction('mine', data, 'PUT', function(){
                location.href = '/'
            });
        }
    })