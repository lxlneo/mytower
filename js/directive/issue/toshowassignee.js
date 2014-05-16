'use strict'

angular.module('BHF')
    .directive('assigneeshow', function ($rootScope, API) {
        return{
            templateUrl: "views/part/issue/to_show_assignee.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var issue_id = $scope.item.id;

                $scope.setowner_and_due = function ($event) {
                    var target = $($event.target);
                    var width = target.width();
                    var heigth = target.height();
                    var pagex = target.offset().left;
                    var pagey = target.offset().top;
                    var position = {left: width + pagex + 21, top: heigth + pagey - 122};
                    //console.log(position, $event, target.offset());
                    show(position);

                }
                function show(position) {
                    $rootScope.show_assigneebox = false;
                    $rootScope.$broadcast('assigneebox:show', position);
                }
            }
        }
    })
