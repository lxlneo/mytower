'use strict'

angular.module('BHF')
    .directive('addproform', function (API, $window) {
        return{
            templateUrl: "views/part/addproform.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                $scope.tosumbittext = "创建项目";
                $scope.tosumbit = function () {
                    $scope.tosumbittext = "正在创建……";
                 var pro = {}
                    pro.title = $scope.projectname;
                    if("" == pro.title || undefined == pro.title){
                        alert("项目名是必填的.");
                        return;
                    }
                    pro.contact = $scope.projectcontact;
                    if("" == pro.contact || undefined == pro.contact){
                        alert("联系人是必填的.");
                        return;
                    }
                    pro.description = $scope.projectdesc;
                    if("" == pro.description || undefined == pro.description){
                        alert("描述是必填的.");
                        return;
                    }
                    pro.repos = $scope.projectrepos;
                    if("" == pro.repos || undefined == pro.repos){
                        alert("gitlab地址是必填的.");
                        return;
                    }

                    API.doAction("project",pro, "POST", function (data) {
                        if (data.id) {
                            $scope.tosumbittext = "创建成功";
                            $window.location.href = "#/index";
                        } else {
                            $scope.tosumbittext = "创建失败！";
                        }
                    });
                }  　　
            }
        }
    })
