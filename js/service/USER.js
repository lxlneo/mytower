'use strict'

angular.module('BHF')
    .factory('USER',function (API) {
            var service = {};
            service.user = null;
            
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
            service.getUser = function(fn){
                if(service.user){
                    fn(service.user)
                }else{
                    API.doAction("mine", {}, function (data) {
                        service.user = data;
                        fn(data)
                    });
                }
                return service.user;
            }
            var setUserHeadImag = function(data){
                var src = data && data.member_id ? data.member_id :"path";
                $('.account-info').find('img:first').attr('src','./images/member/@src@.png'.replace('@src@',src))
            }

            refresh();
            
            return service;
    })
