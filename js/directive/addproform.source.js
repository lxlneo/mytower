'use strict'

angular.module('BHF')
    .directive('addproform', function (API, $location) {
        return{
            templateUrl: "views/part/addproform.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                console.log(121212);
                $scope.tosumbittext = "创建项目";
                $scope.tosumbit = function () {
                    $scope.tosumbit_text = "正在创建……";
                 /*   var pro = {}
                    pro.title = $scope.projectname;
                    pro.contact = $scope.projectcontact;
                    pro.description = $scope.projectdesc;
                    pro.repos = $scope.projectrepos;
                    console.log(pro);*/
                    var data = {
                        status: "新建",
                        "title": "这是一个测试项目",
                        "description": "项目的介绍",
                        "contact": "易晓峰",
                        "start_date":new Date(),
                        "end_date": new Date(),
                        "repos": "https://github.com/hunantv-honey-lab/BHF-API"
                    }
                    API.doAction("project",data, "POST", function (data) {
                        console.log("result",data);
                        if (data.id) {
                            $scope.tosumbit_text = "创建成功";
                            $location.path() = "#/index";
                        } else {
                            $scope.tosumbit_text = "创建失败！";
                        }
                    });
                }  　　

            }
        }
    })
