'use strict'

angular.module('BHF')
    .factory('USER',function (API) {
            var service = {};
            service.user = {};
            
            var refresh = function(){
                API.doAction("mine", {}, function (data) {
                    service.user = data;
                    setUserHeadImag(data);
                });
            }
            service.refresh = refresh;
            service.setUser = function(data){
                service.user = data;
                setUserHeadImag(data);
               
            }

            var setUserHeadImag = function(data){
                var src = data && data.member_id ? data.member_id :"path";
                $('.account-info').find('img:first').attr('src','./images/member/@src@.png'.replace('@src@',src))
            }

            refresh();
            
            return service;
    })
