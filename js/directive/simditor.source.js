'use strict'

angular.module('BHF')
    .directive('simditor', function($location,$window,API){
        return{
            templateUrl: "views/part/simditor.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                var uploadUrl = '/api/project/project_id/attachment'.replace('project_id',$scope.router.project_id);       
                var host = $window.location.protocol + "//"+$window.location.host;
                var verifyContent;
                var textarea = $element[0];
                var editor = new Simditor({
                    textarea: textarea,
                    placeholder: '说点什么吧',
                    defaultImage: 'images/image.png',
                    params: {},
                    upload: {
                      url:uploadUrl,
                      params:{
                        host:host
                      },
                      connectionCount: 3,
                      leaveConfirm: '正在上传文件，如果离开上传会自动取消'
                    },
                    tabIndent: true,
                    toolbar: true,
                    toolbarFloat: false,
                    pasteImage: true,
                    maxImageHeight:2000,
                    maxImageWidth:2000
                });
                //获得simditor的值 赋值给 $scope.$parent.simditorvalue
                $scope.$on('simditor:getvalue',function(){
                  $scope.simditorvalue = verifyContent(editor.getValue());
                })
                //清空 simditor的 内容
                $scope.$on('simditor:clean',function(){
                   editor.setValue("");
                })

                //检验内容
                verifyContent = function(content){
                    content = content.replace(new RegExp(host,'g'),"");
                    return content;
                }
            }
        }
    })
