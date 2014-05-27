'use strict'

angular.module('BHF')
    .controller('C_login', function ($scope,API) {
        var remenberMember,initLoginForm;
        $.cookie.json = true;
        
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

            API.doAction('mine', data, 'PUT', function(_data){       
                remenberMember(angular.extend(data,_data));
                location.href = '/'
            }); 
        }

        remenberMember = function(data){
            if(!$scope.remember){        
                $.removeCookie('member_id');
                $.removeCookie('member')
            }else{
                $.cookie('member_id',data.member_id, { expires: 365 });
                $.cookie('member',data,{expires:365})
            }

        }

        initLoginForm = function(){
            $scope.remember = true;
            var member = $.cookie("member");
            if(member === void(0)){
                return;
            }
            $scope.password = member.password || '';
            $scope.account = member.account || '';
        }

        initLoginForm();
    })