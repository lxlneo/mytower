'use strict'

angular.module('BHF')
    .directive('weekselector', function (API, $rootScope) {
        return{
            templateUrl: "views/part/report/weekselector.html",
            restrict: "E",
            replace: true,
            link: function ($scope, $element) {
                function initWeekSelector(date) {
                    var fmd, fweek, today, thisweek, monday, sunday, result, now, starttime, endtime;
                    now = moment();　//现在的时间　判断　是否有下一周
                    fmd = "M月D日";
                    fweek = "YYYY年第WW周";
                    //当前操做日期时间
                    today = moment(date);

                  　//当前星期
                    thisweek = moment(today, 'YYYY-MM-DD HH:mm:ss Z').format(fweek);
    　　　　　　　　　  monday = moment(today).day(1);
                    sunday = moment(monday).add('d', 6);
                    starttime = moment(monday).format('X') * 1000;
                    endtime = moment(sunday).format('X') * 1000;
                    result = {
                        today: today,
                        week: thisweek,
                        day: monday.format(fmd) + '~' + sunday.format(fmd),
                        right: !sunday.isAfter(now),
                        starttime: starttime,
                        endtime: endtime
                    }
                    $scope.weekday =  result;
                    $scope.$broadcast('report:refresh',result);
                }

                initWeekSelector();
                $scope.changeweek = function (day) {
                    var today = $scope.weekday.today;
                    today = today.add('week', day);
                    initWeekSelector(today);
                }
            }
        }
    })