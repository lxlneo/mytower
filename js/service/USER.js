'use strict'

angular.module('BHF')
    .factory('USER',function ($filter,API) {
            var service = {};
            service.user = {};
            
            var refresh = function(){
                API.doAction("mine", {}, function (data) {
                    service.user = data;
                    setUserHeadImag(data);
                });
            }
            service.refresh = refresh;

           console.log($filter('uppercase')('h'));
          // console.log(nameToImageSrcFilter('H'))
            service.setUser = function(data){
                service.user = data;
                setUserHeadImag(data);
               
            }

            var setUserHeadImag = function(data){
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
                var src = _nameToImageSrc(data.username);
                $('.account-info').find('img:first').attr('src','./images/member/@src@.png'.replace('@src@',src))
            }

            refresh();
            
            return service;
    })
