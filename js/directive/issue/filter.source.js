'use strict'

angular.module('BHF')
    .directive('issuefilter', function(API) {
        return{
            templateUrl: "views/part/issue/filter.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                API.doAction('member', {}, function(data){
                    $scope.memberList = data
                });
               // var data = {tag:"",status:""};
                var data = {
                    tag:$scope.filter_tag,
                    status:$scope.filter_status
                }
                $scope.$watch('filter_status',function(newValue, oldValue){
                    data.status = newValue;
                    if(newValue !== oldValue){
                        $scope.$emit("issue:filter",data);
                    }
                })
                $scope.$watch('filter_tag',function(newValue, oldValue){
                    data.tag = newValue;
                    if(newValue !== oldValue){
                        $scope.$emit("issue:filter",data);
                    }
                })
                
                $scope.$on('filter:init',function(){
                    console.log('filter init emit')
                    $scope.$emit("issue:filter",data);
                })

                //触发 filter过滤 初始化. 由于自定义指令编译顺序问题,主view编译完成触发事件后,todos未编译完成,因此无法监听事件
                $scope.$emit("issue:filter",data);
            }
        }
    })
