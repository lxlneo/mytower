'use strict'

angular.module('BHF')
    .directive('disdetailform', function (API,$rootScope) {
        return{
            templateUrl: "views/part/disdetailform.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                $scope.project_id = $scope.router.project_id;
                $scope.isShowDisForm = false;
                $scope.canceldisc = function () {
                    $scope.isShowDisForm = false;
                    $scope.title = "";
                    //清空simditor
                    $scope.$broadcast('simditor:clean');
                }
                $scope.tosumbitdisc = function () {
                    $scope.simditorvalue = "";
                    //获得值
                    $scope.$broadcast('simditor:getvalue');
                    var data = {};
                    data.title = $scope.title;
                    data.tag = 'project';
                    data.content = $scope.simditorvalue;
                    data.status = data.id ? data.status : 'new';
                    if ("" == data.title || undefined == data.title) {
                        alert("标题必填哦~");
                        return;
                    }
                    if ("" == data.content || undefined == data.content) {
                        alert("内容必填哦~");
                        return;
                    }
                    var url = "project/" + $scope.project_id + "/issue";
                    API.doAction(url, data, "POST", function (data) {
                        if(data.id) {
                            $rootScope.$broadcast('discusslist:update');
                            $scope.canceldisc();
                        }
                    })
                }
            }
        }
    })
    