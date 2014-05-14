'use strict'

angular.module("BHF", ["ngRoute", "angularFileUpload"])
    .config(function($routeProvider, $httpProvider){
        $routeProvider
            .when('/index', {
                templateUrl: "views/index.html",
                controller: "C_index"
            })
            .when('/addpro', {
                templateUrl: "views/addpro.html",
                controller: "C_addpro"
            })
            .when('/project/:project_id', {
                templateUrl: "views/project.html",
                controller: "C_project"
            })
            .when('/disfulllist/:project_id', {
                templateUrl: "views/dis_full_list.html",
                controller: "C_dis_full_list"
            })
            .when('/project/:id/issue', {
                templateUrl: "views/dis_full_list.html",
                controller: "C_dis_full_list"
            })
            .when('/project/:project_id/issue/:issue_id', {
                templateUrl: "views/dis_single_page.html",
                controller: "C_dis_single_page"
            })
            .when('/projectsort/:sort', {
                templateUrl: "views/project-sort.html",
                controller: "C_project_sort"
            })
            .when('/report', {
                templateUrl: "views/report.html",
                controller: "C_report"
            })
            .when('/filelist/:project_id', {
                templateUrl: "views/file_full_list.html",
                controller: "C_file_full_list"
            })
            .when('/doclist/:pid', {
                templateUrl: "views/doc_full_list.html",
                controller: "C_doc_full_list"
            })
            .when('/docsingle/:pid', {
                templateUrl: "views/doc_singlel_page.html",
                controller: "C_doc_single_page"
            })
            .when('/report', {
                templateUrl: "views/report.html",
                controller: "C_report"
            })
            .when('/login', {
                templateUrl: 'views/part/member/login.html',
                controller: 'C_login'
            }).when('/member', {
                templateUrl: 'views/part/member/list.html',
                controller: 'C_member_list'
            })
        $routeProvider.otherwise({      
            redirectTo: '/index'            
        })

        /*
        $httpProvider.defaults.transformRquest = function(obj){
            var str=[];
            for(var p in obj) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]))
            }
            return str.join("&");
        }

        $httpProvider.defaults.headers.post = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        */
})