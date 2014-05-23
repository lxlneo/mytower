'use strict'

angular.module('BHF')
    .controller('C_login', function ($scope,$cookies,API) {
        var remenberMember,initLoginForm;

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

            remenberMember(data)

            API.doAction('mine', data, 'PUT', function(){
                location.href = '/'
            }); 
        }

        remenberMember = function(data){
            if(!$scope.remember){
                $cookies.member = void(0);
                return;
            }
            $cookies.member = JSON.stringify(data);
        }

        initLoginForm = function(){
            $scope.remember = true;
            var member = $cookies.member;
            if(member === void(0)){
                return;
            }
            try{
                member = JSON.parse(member);
                $scope.password = member.password || '';
                $scope.account = member.account || '';
            }catch(e){
                $cookies.member = void(0);
            }
        }

        initLoginForm();
    })