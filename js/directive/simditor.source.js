'use strict'

angular.module('BHF')
    .directive('simditor', function(API){
        return{
            templateUrl: "views/part/simditor.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                var textarea = $element[0];
                var editor = new Simditor({
                    textarea: textarea,
                    placeholder: '说点什么吧',
                    defaultImage: 'images/image.png',
                    params: {},
                    upload: false,
                    tabIndent: true,
                    toolbar: true,
                    toolbarFloat: false,
                    pasteImage: true
                });
                //获得simditor的值 赋值给 $scope.$parent.simditorvalue
              $scope.$on('simditor:getvalue',function(){
                  $scope.simditorvalue = editor.getValue();
              })
                //清空 simditor的 内容
              $scope.$on('simditor:clean',function(){
                   editor.setValue("");
              })
            }
        }
    })
