'use strict'

angular.module('BHF')
    .factory('API', function(honeyHttpUtils, $q, $timeout, $sce, $rootScope, $http) {
        var api = '/api/',
            root = '/api/',
            canceler

        return {
            //执行ajax操作
            doAction: function(api, data, method, cb){
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
                 console.log(config);
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
            },
            getProjectsList:function(ajaxdata){
               return honeyHttpUtils.honeyGet("project",ajaxdata);
            },
            getMemberList:function(){
                return honeyHttpUtils.honeyGet("member");
            }
        }
           /* getAllProjects: function(toFreshData) {
                canceler = $q.defer()
                var
                request = $http.get(
                    api + 'project', {}, {
                        timeout: canceler.promise
                    }
                ),
                    sortProject = function(projects) {
                        var sortedProject = {
                            processing: [],
                            done: [],
                            rejected: [],
                            fresh: []
                        };
                        angular.forEach(projects, function(project, index) {
                            if (project.status == null) {
                                sortedProject.fresh.push(project);
                            }
                        })
                        return sortedProject
                    }

                return {
                    canceler: canceler,
                    then: function(_fn) {
                        if (toFreshData) { //如果需要刷新数据就重新获取
                            request.then(function(_data) {
                                $rootScope.allProject = _data.data.items;
                                _fn(sortProject($rootScope.allProject))
                            })
                        } else {
                            _fn(sortProject($rootScope.allProject))
                        }
                    }
                }
            },
            addProject: function(data) {
                canceler = $q.defer();
                var request = $http.post(
                    api + 'project', $.param(data), {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            },
            addIssue: function(projectID, data) {
                canceler = $q.defer();
                var request = $http.post(
                    api + 'project/' + projectID + '/issue', $.param(data), {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            },
            getIssue: function(projectID) {
                canceler = $q.defer();
                var request = $http.get(
                    api + 'project/' + projectID + '/issue', {}, {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            },
            getProject: function(projectID) {
                canceler = $q.defer();
                var request = $http.get(
                    api + 'project/' + projectID, {}, {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            },
            getComment: function(issueID) {
                canceler = $q.defer();
                var request = $http.get(
                    api + 'issue/' + issueID + '/comment', {}, {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            },
            postComment: function(issueID, data) {
                canceler = $q.defer();
                var request = $http.post(
                    api + 'issue/' + issueID + '/comment', $.param(data), {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            },
            getAsset: function(projectID){
                canceler = $q.defer();
                var request = $http.get(
                    api + 'project/' + projectID + '/asset', {}, {
                        timeout: canceler.promise
                    }
                )
                return {
                    canceler: canceler,
                    then: function(_fn) {
                        request.then(_fn)
                    }
                }
            }
        }*/
    })
