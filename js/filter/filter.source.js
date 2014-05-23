'use strict'
angular.module('BHF')
    .filter('toHtml',function($sce){
        return function(str){
            console.log($sce.trustAsHtml(str).toString());
            console.log(typeof $sce.trustAsHtml(str));
            return $sce.trustAsHtml(str);
        }
    })

angular.module('BHF')
    .filter('toWeekday',function(){
    	var week = ['周末','周一','周二','周三','周四','周五','周六']
        return function(time){
            if(!time || !angular.isNumber(time)){
            	return '';
            }
            var date = new Date(time);
            return week[date.getDay()]
        }
    })