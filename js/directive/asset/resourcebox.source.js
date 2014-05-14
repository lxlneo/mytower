'use strict'
angular.module("BHF")
    .filter('findFileType', function() {
        return function(input) {
            var tmp = input.split("."),
                type = tmp[tmp.length - 1].toLowerCase(),
                iconType = "others";

            switch (type) {
                case 'png':
                    iconType = "png";
                    break;
                case 'bmp':
                    iconType = "bmp";
                    break;
                case 'gif':
                    iconType = "gif";
                    break;
                case 'jpg':
                    iconType = "jpg";
                    break;
                case 'jpeg':
                    iconType = "jpeg";
                    break;
                case 'rar':
                    iconType = "rar";
                    break;
                case '7z':
                    iconType = "7z";
                    break;
                case 'zip':
                    iconType = "zip";
                    break;
                case 'psd':
                    iconType = "psd";
                    break;
                case 'doc':
                    iconType = "doc";
                    break;
                case 'docx':
                    iconType = "doc";
                    break;
                case 'txt':
                    iconType = "txt";
                    break;
                default:
                    iconType = "others"
            }
            return iconType;
        };
    })
    .filter('formartFilesize',function(){
        return function(size){
            return size/1024/1024
        }
    })
    .directive("resourcebox", function($rootScope, API, $fileUploader) {
        var posting = false;
        return {
            templateUrl: "views/part/asset/resource_box.html",
            restrict: "E",
            replace: true,
            link: function($scope, $element, $attrs) {
                var project_id = $scope.router.project_id;

                //创建文件上传对象
                var uploader = $scope.uploader = $fileUploader.create({
                    scope: $scope,
                    url: '/api/project/' + project_id + '/assets',
                    alias: "assets"
                });

                uploader.bind('complete', function( event, item, progress ) {
                    //uploader.clearQueue();
                    //$scope.updatePanelShow = false;
                    //getAsses();
                    console.log(event,item,progress);
                });

                uploader.bind('error', function( event, item, progress ) {
                    alert("发生错误了！");
                });

                var assetSelectedArr = [];

                $scope.updatePanelShow = false;

                $scope.close = $scope.show = function() {
                    $(".post-box").toggle();
                    $("#callpb-btn").toggle();
                    window.smoothScroll($("#post-box").offset().top - 50);
                }

                $scope.updateAssetBtn = function() {
                    $(".update-panel").addClass("update-panel-show");
                }

                $scope.showfileupdate = function(show) {
                    $scope.updatePanelShow = show;
                    if(!show){
                        uploader.clearQueue();
                    }
                }

                $scope.assetSelect = function($event) {
                    var assetId = this.asset.id,
                        target = $event.currentTarget;
                    if ($(target).hasClass("selected")) {
                        $(target).removeClass("selected");
                        var index = assetSelectedArr.indexOf(assetId);
                        if (index > 0) {
                            assetSelectedArr.splice(index, 1);
                        }
                    } else {
                        $(target).addClass("selected");
                        assetSelectedArr.push(assetId);
                    }
                }

                $scope.t_keydown = function($event) {
                    $($event.currentTarget).attr("rows", 10)
                }

                $scope.t_keyup = function($event) {
                    if ($($event.currentTarget).val() == "") {
                        $($event.currentTarget).attr("rows", 3)
                    }
                }

                function getAsses() {
                    $scope.$broadcast('asset:bhfupdate')
                }
                getAsses();
            }
        }
    })


