angular.module('BHF')
    .directive('issueQuickeditor', function(API){
        return{
            templateUrl: "views/part/issue/quick-issue-editor.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                var oriValue = $scope.item.title;
                $scope.cancel = function(){
                	$scope.item.title = oriValue;
                	$scope.item.editstatus = false;
                }
                $scope.submit = function(){
                    if(!$scope.item.title || '' === $scope.item.title.replace(/(\ )+/g,"")) return alert('亲，太没节操了，内容必需输入哇');
                    var api = 'project/' + $scope.router.project_id + '/issue';
                    $scope.item.submitenable = true;
                    var issueId = $scope.item.id;
                    API.doAction(api, $scope.item, 'PUT', function(){
                        $scope.item.submitenable = false;
                        oriValue = $scope.item.title;
                        $scope.item.editstatus = false;
                        $scope.item.id = issueId;
                        console.log("submit after:",$scope.item);
                    })
                }
            }
        }
    })