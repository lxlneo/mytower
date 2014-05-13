'use strict'

angular.module('BHF')
    .controller('C_index', function ($scope, API) {
        function getprolist(){
            API.doAction("project", {}, function (data) {
                $scope.prolist = data.items;
            });
        }
        getprolist();

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