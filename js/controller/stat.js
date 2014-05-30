'use strict'

angular.module('BHF')
    .controller('C_stat', function ($scope, $rootScope, $routeParams, API) {
        $scope.router = $routeParams;
        $scope.project_id = $scope.router.project_id

        var api = 'project/' +  $scope.project_id + '/stat'
        var dealWithContribute = function(data){
        	if(!angular.isArray(data))return;
        	var contributeTotal  = 0;
        	data.forEach(function(item,index){
        		//done * 100 + commit * 80 + 任务数 * 50 - 延误 * 70
        		item.stat.contribute = item.stat.done*100 + item.stat.commit*80 + item.stat.total*50 - item.stat.delay*70
        		contributeTotal += item.stat.contribute;
        	})
            if(contributeTotal !== 0){
                data.forEach(function(item,index){
                    item.stat.contributePercent= (item.stat.contribute* 100 / contributeTotal).toFixed(2) ;
                })
            }
            return contributeTotal;
        	
        }
        API.doAction(api, {}, function(data){
        	$scope.contributeTotal = dealWithContribute(data.members);
            $scope.stat = data
            $scope.today = moment().format('YYYY-MM-DD')
        })

    })