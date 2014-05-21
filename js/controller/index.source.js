'use strict'

angular.module('BHF')
    .controller('C_index', function ($scope, API,USER) {
        function getprolist(){
            API.doAction("project", {}, function (data) {
                $scope.prolist = data.items;
            });
        }
        getprolist();

        function getuserInfo(){
            API.doAction("mine", {}, function (data) {
                console.log(data)
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
    })