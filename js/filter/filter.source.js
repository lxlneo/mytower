'use strict'
angular.module('BHF')
    .filter('trustAsHtml',function($sec){
        return function(str){
            return $sce.trustAsHtml(str);
        }
    })
