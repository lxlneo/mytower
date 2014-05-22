'use strict'
angular.module('BHF')
    .filter('toHtml',function($sce){
        return function(str){
            console.log($sce.trustAsHtml(str).toString());
            console.log(typeof $sce.trustAsHtml(str));
            return $sce.trustAsHtml(str);
        }
    })