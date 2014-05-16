'use strict'

angular.module('BHF')
    .directive('assigneebox', function (API) {
        return{
            templateUrl: "views/part/issue/assigneebox.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {

                //显示assigneebox
                $scope.$on('assigneebox:show', function (event, data) {
                    $scope.show_assigneebox = true;
                    $scope.top = data.top;
                    $scope.left = data.left;
                });

                // 隐藏assigneebox
                $scope.hideassigneebox = function () {
                    $scope.show_assigneebox = false;
                }
                // 向后台提交数据
                $scope.set_owner_due = function () {

                }
                //清除选定的信息
                $scope.clean_assginee = function (type) {
                    type == 'due' ? $scope.assigninfo.due = "" : $scope.assigninfo.owner = "";
                }
                // 责任人和预计时间
                $scope.assigninfo = {
                    owner: "",
                    due: ""
                }

            }
        }
    })
