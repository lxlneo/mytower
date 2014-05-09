'use strict'

angular.module('BHF')
    .factory('honeyHttpUtils', function ($http, $q, $timeout) {
        var root = "/api/",
            host = '/api/',
            canceler;

        //执行ajax操作
        function doAction(api, data, method, cb){
            var url = root + api

            //如果method不是string，则method为get
            if(typeof method !== 'string'){
                cb = method
                method = 'GET'
            }

            //restful api的id进行处理
            if(data.id){
                url += '/' + data.id
                delete data.id
            }

            var config = {
                url: url,
                method: method || 'GET',
                data: data
            }

            $http(config).then(function(res){
                //以后再处理
                switch(res.status){
                    case 400:
                        alert('找不到文件啦')
                        break
                    case 500:
                        alert('大事不好了，服务器发生错误啦')
                        break
                    case 406:
                        alert('貌似你提交的数据有点不对' + JSON.stringify(res.data))
                        break
                    case 401:
                        alert('未经授权的访问')
                        break
                    default:
                        //以后再考虑不同的处理
                        cb(res.data)
                        break
                }
            });
        }

        function get(url, ajaxdata) {
            var _url = host + url,
                ajaxdata = angular.extend({}, ajaxdata);
            canceler = $q.defer();
            return{
                canceler: canceler,
                then: function (_success,_error) {
                    $http.get(_url, ajaxdata).then(function(response){
                        if(response.status<300){
                            _success(response.data);
                        }else{
                            _error();
                            console.log(111);
                            console.log(response);
                        }
                    });
                }
            }
        }

        function post(url, ajaxdata, callback) {
            var _url = host + url,
                ajaxdata = angular.extend({}, ajaxdata);
            canceler = $q.defer();
            return{
                canceler: canceler,
                then: function (_fn) {
                    $http.post(_url, ajaxdata).then(function(response){
                        if(response.status<300){
                            _fn(response.data);
                        }else{
                            console.log(111);
                            console.log(response);
                        }
                    });
                }
            }
        }

        return{
            honeyGet: function (url, ajaxdata) {
                return get(url, ajaxdata);
            },
            honeyPost: function (url, ajaxdata) {
                return post(url, ajaxdata);
            }
        }

    })