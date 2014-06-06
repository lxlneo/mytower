'use strict'

angular.module('BHF')
    .controller('C_myself', function ($scope,$routeParams,API,USER) { 
        var refresh = function(){
        	API.doAction("myself", {my:true}, function (data) {
	            $scope.data = data;
	            $scope.router = $routeParams;
        	});
        }
        USER.getUser(function(user){
        	$scope.user = user;
        })
        refresh();
        $scope.$on('issue:save',function(e,data){
        	refresh();
        });
        $scope.$on('report:refresh',function(e,data){
        	var _data = {};  //start_time=1399790723523&end_time=1400136323523
            _data.start_time = data.starttime;
            _data.end_time = data.endtime;
            USER.getUser(function(user){
            	data.member_id = user.member_id;
            	API.doAction('report/myreport', _data, 'GET', function (data) {
                	var items = {
                		completed:[],
                		uncompleted:[]
                	}
                	for(var index = 0; index < data.length; index++){
                		if(data[index].status === 'done'){
                			items.completed.push(data[index])
                		}else{
                			items.uncompleted.push(data[index])
                		}
                	}
                	$scope.report = items;
            	})
            });
        });
        var setView = function(view){
        	if(view === void(0)){
        		$scope.view = "Tasks";//Schedule,WeekReport
        	}else{
        		$scope.view = view;
        	}
        }

        var isShow = function(view){
        	return $scope.view === view;
        }

        $scope.setView = setView;
        $scope.isShow = isShow;
        setView();

    })