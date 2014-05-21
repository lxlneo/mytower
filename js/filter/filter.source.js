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
    .filter('nameToImageSrc',function(USER){
        return function(name){
        	var nameMap = {
        		'廖正东':'1',
				'薛潋':'2',
				'李雪龙':'3',
				'赵子璇':'4',
				'周萍':'5',
				'兰斌':'6',
				'易晓峰':'7',
				'胡瀛寰':'8'
        	}
        	var src = nameMap[name] || 'path';
            return src;
        }
    })