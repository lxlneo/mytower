'use strict'

angular.module('BHF')
    .factory('API', function ($http) {
        var api = '/api/',
            root = '/api/',
            canceler

        return {
            //执行ajax操作
            doAction: function (api, data, method, cb, options) {
                var url = root + api
                options = options || {}

                //如果method不是string，则method为get
                if (typeof method !== 'string') {
                    cb = method
                    method = 'GET'
                }

                //restful api的id进行处理
                if (data.id) {
                    url += '/' + data.id
                    delete data.id
                }

                var config = {
                    url: url,
                    method: method || 'GET'
                }

                var key = 'params'
                if(/post|put/i.test(config.method)) key = 'data'
                config[key] = data

                $http(config).success(function (res) {
                    cb(res.data)
                    //交给回调处理
                    //if(options.onComplete) return options.onComplete(res)
                }).error(function(data, status){
//以后再处理
                    console.log(data)
                    switch (status) {
                        case 400:
                            alert('找不到文件啦')
                            break
                        case 500:
                            alert('大事不好了，服务器发生错误啦')
                            break
                        case 406:
                            alert('提示：' + data)
                            break
                        case 401:
                            alert('未经授权的访问')
                            break
                        default:
                            //以后再考虑不同的处理
                            alert('未知错误')
                            break
                    }
                })
            }
        }
    })
