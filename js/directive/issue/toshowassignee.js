'use strict'

angular.module('BHF')
    .directive('assigneeshow', function ($rootScope, API) {
        return{
            templateUrl: "views/part/issue/to_show_assignee.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                var issue = $scope.item;
                var broadcast_data = {};
                broadcast_data.issue = {id:issue.id,owner_id:issue.owner,owner_name:issue.owner_name,due:issue.plan_finish_time};

                $scope.setowner_and_due = function ($event) {
                    var target = $($event.target);
                    var width = target.width();
                    var heigth = target.height();
                    var pagex = target.offset().left;
                    var pagey = target.offset().top;
                    var position = {left: width + pagex + 21, top: heigth + pagey - 122};
                    //console.log(position, $event, target.offset());
                    broadcast_data.position = position;
                    show(broadcast_data);

                }

                function show(_data) {
                    $rootScope.show_assigneebox = false;
                    $rootScope.$broadcast('assigneebox:show', _data);
                }

            }
        }
    })
