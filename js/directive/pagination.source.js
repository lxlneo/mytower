'use strict'

angular.module('BHF')
    .directive('pagination', function(){
        return{
            templateUrl: "views/pagination.html",
            restrict: "E",
            replace: true,
            link: function ($scope) {
                var generateArray = function(number,start){
                    start = start || 0;
                    var array = [];
                    for(var index = 0; index < number; index++){
                        array.push(index+1+start)
                    }
                    return array;
                }
                $scope.getNumber = function(num) {
                    return new Array(num);   
                }
                $scope.gotoPage = function(pageIndex){
                    if(pageIndex === '...'){
                        return;
                    }
                    var pager = angular.extend({},$scope.pager);
                    pager.pageIndex = pageIndex;
                    delete(pager.offset);
                    $scope.$emit("pagination:goto",pager);
                }
                $scope.equals = function(o1,o2){
                    return angular.equals(o1,o2);
                }

                $scope.$on('pagination:do',function(e,data){
                    console.log('pagination:do accept', data);
                    data.pageNumber = dealwithPaginationData(data);
                    $scope.pager = data;
                })

                var dealwithPaginationData = function(data){
                    var prefix = 7, suffix = 7, minPrefix = 3, minSuffix = 3, maxPage = 15, middle = 5;
                    var pageCount = data.pageCount;
                    var pageIndex = data.pageIndex;
                    var pageNumber = null;
                    if(pageCount < maxPage){
                        pageNumber = generateArray(pageCount);
                        return pageNumber;
                    }

                    if($scope.bigger === void(0)){ //init bigger
                        $scope.bigger = pageIndex < pageCount / 2;
                    }
                    if(pageIndex < prefix){
                        pageNumber = generateArray(prefix);
                        pageNumber.push('...');
                        pageNumber = pageNumber.concat(generateArray(minSuffix,pageCount-minSuffix));
                    }else if(pageIndex > (pageCount - suffix + 1)){
                        pageNumber = generateArray(minPrefix)
                        pageNumber.push('...');
                        pageNumber = pageNumber.concat(generateArray(suffix,pageCount-suffix));
                    }else{
                        pageNumber = generateArray(minPrefix);
                        pageNumber.push('...');
                        pageNumber = pageNumber.concat(generateArray(middle,pageIndex - parseInt((middle-1)/2) - 1))
                        pageNumber.push('...');
                        pageNumber = pageNumber.concat(generateArray(minSuffix,pageCount-minSuffix))
                    }
                    return pageNumber;
                    
                }


            }
        }
    })