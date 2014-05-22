'use strict'
/**
 解决 浏览器自动填充登陆 表单 无法绑定model数据问题
 需在登陆动作触发autofill:update事件
*/
angular.module('BHF')
    .directive('formAutofill', function(){
        return{
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ngModel) {
                scope.$on("autofill:update", function() {
                    ngModel.$setViewValue(element.val());
                });
            }
        }
    })
