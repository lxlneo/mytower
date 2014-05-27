'use strict'

angular.module('BHF')
    .directive('addproform', function ($window,$routeParams,API ) {
        return{
            templateUrl: "views/part/project/editor.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var verify = function(){
                    var pro = {}
                    pro.title = $scope.projectname;
                    if ("" == pro.title || undefined == pro.title) {
                        alert("项目名是必填的.");
                        return false;
                    }
                    pro.contact = $scope.projectcontact;
                    if ("" == pro.contact || undefined == pro.contact) {
                    //    alert("联系人是必填的.");
                        pro.contact = "";
                    }
                    pro.description = $scope.projectdesc;
                    if ("" == pro.description || undefined == pro.description) {
                        //alert("描述是必填的.");
                        pro.description = "";
                    }
                    pro.repos = $scope.projectrepos;
                    if ("" == pro.repos || undefined == pro.repos) {
                        //alert("gitlab地址是必填的.");
                        pro.repos = "";
                    }
                    return pro;
                }

                var doCreateSubmit = function(){
                    $scope.tosumbittext = "正在创建……";
                    var pro = verify();
                    if(!pro){
                        return;
                    }
                    API.doAction("project", pro, "POST", function (data) {
                        if (data.id) {
                            $scope.tosumbittext = "创建成功";
                            $window.location.href = "#/index";
                        } else {
                            $scope.tosumbittext = "创建失败！";
                        }
                    });
                }

                var doEditSubmit = function(){
                    $scope.tosumbittext = "正在修改……";
                    var pro = verify();
                    
                    if(!pro){
                        return;
                    }
                    pro.id = $routeParams.project_id;
                    API.doAction("project", pro, "PUT", function (data) {
                        $scope.tosumbittext = "修改成功";
                        $window.location.href = "#/index";
                    });
                }
                $scope.tosumbit = function () {
                    if($scope.isEdit){
                        doEditSubmit();
                    }else{
                        doCreateSubmit();
                    }
                } 　　
            }
        }
    })
