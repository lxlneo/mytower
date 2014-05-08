'use strict'

angular.module('BHF')
    .factory('API', function(honeyHttpUtils, $q, $timeout, $sce, $rootScope) {
        var api = '/api/',
            canceler

        return {
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
