'use strict'
angular.module('BHF')
    .filter('trustAsHtml',function($sce){
        return function(str){
            return $sce.trustAsHtml(str);
        }
    })
