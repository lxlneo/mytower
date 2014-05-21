'use strict'

angular.module('BHF')
    .factory('USER',function ($filter,API) {
            var service = {};
            service.user = {};
            service.refresh = function(){
                API.doAction("mine", {}, function (data) {
                    service.user = data;
                });
            }

            //console.log($filter('nameToImageSrc')('h'));

            var _nameToImageSrc = function(name){
                var nameMap = {
                    '廖正东':'1',
                    '薛潋':'2',
                    '李雪龙':'3',
                    '赵子璇':'4',
                    '周萍':'5',
                    '兰斌':'6',
                    '易晓峰':'7',
                    '胡瀛寰':'8'
                }
                var src = nameMap[name] || 'path';
                return src;
            }

            service.setUser = function(data){
                service.user = data;
                console.log('setUser'+data.username)
                console.log(data)
                var src = _nameToImageSrc(data.username);
                console.log(src);
                $('.account-info').find('img:first').attr('src','./images/member/@src@.png'.replace('@src@',src))
            }
            return service;
    })
