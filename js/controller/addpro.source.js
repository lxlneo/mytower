'use strict'

angular.module('BHF')
    .controller('C_addpro', function ($scope,$routeParams,API) {
    	var project_id = $routeParams.project_id;
    	console.log(project_id)
    	//是否为项目编辑.为编辑时,project_id存在. else  is project create
    	var isEdit =  !!project_id;
    	$scope.isEdit = isEdit;
    	var doEdit = function(){
    		$scope.title = "修改项目";
    		$scope.tosumbittext = "修改项目";
    		API.doAction("project",{id: project_id}, "GET", function (data) {
                console.log(data);
                $scope.projectname = data.title;
                $scope.projectcontact = data.contact;
                $scope.projectrepos = data.repos;
                $scope.projectdesc =  data.description;
            });
    	}

    	var doCreate = function(){
    		$scope.title = "创建新项目";
    		$scope.tosumbittext = "修改项目";
    	}

    	if(isEdit){
    		doEdit();
    	}else{
    		doCreate();
    	}
    })