'use strict'

angular.module('BHF')
    .directive('addproform', function(API){

        return{
            templateUrl: "views/part/addproform.html",
            restrict: "E",
            replace: true,
            link:function ($scope,$element) {
                var pro = {
                    "title":"",
                    "description":"",
                    "contact":"",
                    "repos":""
                }
                 $scope.tosumbit = function(){
                   pro.title = $scope.project-title;
                   pro.contact = $scope.project-contact;
                   pro.description = $scope.project-desc;
                   pro.repos = $scope.project-repos;
                     
                 }  　　

            }
        }
    })
