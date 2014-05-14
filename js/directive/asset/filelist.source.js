'use strict'

angular.module('BHF')
    .directive('filelist', function (API) {
        return{
            templateUrl: "views/part/asset/filelist.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $routeParams) {
                var project_id = $scope.router.project_id;
                $scope.project_id = project_id;
                var issue_id = $scope.router.issue_id;
                var api = 'project/' + project_id + '/assets';
                var data = {limit: 10}
                //刷新列表
                function refresh(_data) {
                    _data = angular.extend(data, _data);
                    API.doAction(api, data, function (result) {
                        $scope.filelist = result;
                    })
                }

                refresh();
                $scope.$on('asset:bhfupdate', function (event, _data) {
                    refresh(_data);
                });
                //删除文件
                $scope.delfile = function (event) {
                    var file_id = $(event.target).data('fileid');
                    API.doAction('project/' + project_id + '/asset/' + file_id, {}, 'DELETE', function () {
                    })
                }
            }
        }
    })
