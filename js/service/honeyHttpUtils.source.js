'use strict'

angular.module('BHF')
    .factory('honeyHttpUtils', function ($http, $q, $timeout) {
        var host = "/api/",
            canceler;


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