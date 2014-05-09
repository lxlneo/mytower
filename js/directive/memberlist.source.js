'use strict'

angular.module('BHF')
    .directive('memberlist', function(API){
        var memberList;

       API.getMemberList().then(
            function (_data) {
                memberList = _data.items;
            },
            function () {
                memberList = [
                    {
                        username: "",
                        realname: "没有成员"
                    }
                ]
            })

        return{
            templateUrl: "views/part/memberlist.html",
            restrict: "E",
            replace: true,
            link: function ($scope,$element) {
                           $scope.members = memberList;
            }
        }
    })
