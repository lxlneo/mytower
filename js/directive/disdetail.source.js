'use strict'

angular.module('BHF')
    .directive('disdetailform', function(API){
        return{
            templateUrl: "views/part/disdetailform.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                var show =$scope.showtitle;
                var e = $($element).find("[type='title']");
                show ? e.show(): e.hide();
                var textarea =  $element.find('textarea');
                var editor = new Simditor({
                    textarea: textarea
                });
                $scope.isShowDisForm = false;
                $scope.canceldisc = function(){
                    $scope.isShowDisForm = false;
                }

                $scope.tosumbitdisc = function(){
                    var data = {};
                    data.title = $scope.title;
                    data.tag = $scope.tag;
                    data.contnet = $scope.content;
                    API.doAction("project",data,"POST",function){

                    }
                }
            }
        }
    })
