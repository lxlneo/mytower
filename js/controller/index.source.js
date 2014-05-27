'use strict'

angular.module('BHF')
    .controller('C_index', function ($scope,$location, API,USER) {
        function getprolist(){
            API.doAction("project", {}, function (data) {
                $scope.prolist = data.items;
            });
        }
        getprolist();

        function getuserInfo(){
            API.doAction("mine", {}, function (data) {
                $scope.user = data;
                USER.setUser(data);
            });
        }

        getuserInfo();

        $scope.delproject = function($event){
            $event.preventDefault();
            var project_id = $($event.target).data('pid');
            var _project_id = parseInt(project_id,10);
            if(confirm("确认要删除这个项目吗？")){
                API.doAction("project/"+_project_id,{},"DELETE",function(data){
                    getprolist();
                })
            }
        }

        $scope.editproject = function($event){
            $event.preventDefault();
            var project_id = $($event.target).data('pid');
            var _project_id = parseInt(project_id,10);
            $location.path('/editpro/'+_project_id)
        }
    })