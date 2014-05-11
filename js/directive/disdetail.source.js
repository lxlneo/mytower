'use strict'

angular.module('BHF')
    .directive('disdetailform', function(API){
        return{
            templateUrl: "views/part/disdetailform.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                $scope.isShowDisForm = false;
                $scope.canceldisc = function(){
                    $scope.isShowDisForm = false;
                    $scope.title = "";
                    //清空simditor
                    $scope.$broadcast('simditor:clean');
                }
                $scope.tosumbitdisc = function(){
                    $scope.simditorvalue = "";
                    //获得值
                    $scope.$broadcast('simditor:getvalue');
                    var data = {};
                    data.title = $scope.title;
                    data.tag = $scope.tag;
                    data.contnet = $scope.simditorvalue;
                    if("" == data.title||undefined==data.title){
                        alert("标题必填哦~");
                        return;
                    }
                    if("" == data.contnet||undefined==data.contnet){
                        alert("内容必填哦~");
                        return;
                    }
                    if("" == data.tag||undefined==data.tag){
                        alert("标签必填哦~");
                        return;
                    }
                    console.log(data);
                    //API.doAction("project",data,"POST",function(){})
                }
            }
        }
    })
