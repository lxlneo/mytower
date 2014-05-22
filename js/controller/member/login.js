'use strict'

angular.module('BHF')
    .controller('C_login', function ($scope, API) {
        /*
        var remenberMember = function(data){
            $cookie.member = JSON.stringify(data);
        }
    */
        $scope.login = function(e){
            e.preventDefault();

            $scope.$broadcast("autofill:update");
            
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