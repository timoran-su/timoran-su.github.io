
(function(){
    'use strict';
    let app = angular.module('app', ['ui.router']);

    app.run(function($rootScope, $state, $document, $stateParams){ 
        $rootScope.$state = $state; 
        $rootScope.$stateParams = $stateParams; 
        $rootScope.$on('$stateChangeSuccess', function() { 
            $document[0].body.scrollTop = $document[0].documentElement.scrollTop = 0; 
        }); 
    })
    
    app.config(function($stateProvider) {
        $stateProvider
            .state('home', {
                url: '',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl'
            })
            .state('work', {
                url: '/work',
                templateUrl: 'views/work.html',
                controller: 'workCtrl'
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'views/resume.html',
                controller: 'resumeCtrl'
            })

            .state('contact', {
                url: '/contact',
                templateUrl: 'views/contact.html',
                controller: 'contactCtrl'
            })

            //Create a state called 'post' that an ID can be passed to as a parameter, 
            //representing a unique ID of an Instagram post
            .state('digitaldirector', {
                url: '/work/digitaldirector',
                templateUrl: 'views/digitaldirector.html',
                controller: 'digitaldirectorCtrl'
            })

            .state('asstfashion', {
                url: '/work/asstfashion',
                templateUrl: 'views/asstfashion.html',
                controller: 'asstfashionCtrl'
            })

            .state('seo', {
                url: '/work/seo',
                templateUrl: 'views/seo.html',
                controller: 'seoCtrl'
            })

            .state('cuddleparty', {
                url: '/work/cuddleparty',
                templateUrl: 'views/cuddleparty.html',
                controller: 'cuddlepartyCtrl'
            })

            .state('socialmedia', {
                url: '/work/socialmedia',
                templateUrl: 'views/socialmedia.html',
                controller: 'socialmediaCtrl'
            })

            .state('jerkclips', {
                url: '/work/jerkclips',
                templateUrl: 'views/jerkclips.html',
                controller: 'jerkclipsCtrl'
            })

            .state('spoonuniversity', {
                url: '/work/spoonuniversity',
                templateUrl: 'views/spoonuniversity',
                controller: 'spoonuniversityCtrl'
            })

            .state('personalization', {
                url: '/work/personalization',
                templateUrl: 'views/personalization.html',
                controller: 'personalizationCtrl'
            })

            .state('shrinefest', {
                url: '/work/shrinefest',
                templateUrl: 'views/shrinefest.html',
                controller: 'shrinefestCtrl'
            })

            .state('traceproject', {
                url: '/work/traceproject',
                templateUrl: 'views/traceproject.html',
                controller: 'traceprojectCtrl'
            })

            .state('travel', {
                url: '/work/travel',
                templateUrl: 'views/travel.html',
                controller: 'travelCtrl'
            })

    });

    app.controller('homeCtrl', function($scope){

    });

    app.controller('resumeCtrl', function($scope){
        $scope.config = {
            header: 'Resume'
        };
    });

    app.controller('workCtrl', function($scope){
        $scope.config = {
            header: 'Works'
        };
    });

    app.controller('contactCtrl', function($scope){
        $scope.config = {
            header: 'Contact'
        };
    });

    app.controller('digitaldirectorCtrl', function($scope){
        $scope.config = {
            header: 'Jerk Digital Director'
        };
    });

    app.controller('asstfashionCtrl', function($scope){
        $scope.config = {
            header: 'Asst Fashion Editor'
        };
    });

    app.controller('seoCtrl', function($scope){
        $scope.config = {
            header: 'SEO Editorial Intern'
        };
    });

    app.controller('cuddlepartyCtrl', function($scope){
        $scope.config = {
            header: 'Cuddle Party Feature Story'
        };
    });

    app.controller('socialmediaCtrl', function($scope){
        $scope.config = {
            header: 'Social Media Intern'
        };
    });

    app.controller('jerkclipsCtrl', function($scope){
        $scope.config = {
            header: 'Writer for Jerk Magazine'
        };
    });

    app.controller('spoonuniversityCtrl', function($scope){
        $scope.config = {
            header: 'Writer for Spoon University'
        };
    });

    app.controller('personalizationCtrl', function($scope){
        $scope.config = {
            header: 'Personalization for EPIX'
        };
    });

    app.controller('shrinefestCtrl', function($scope){
        $scope.config = {
            header: 'Putting Together Shrine Fest 2019'
        };
    });

    app.controller('traceprojectCtrl', function($scope){
        $scope.config = {
            header: 'Coder for TRACE'
        };
    });

    app.controller('travelCtrl', function($scope){
        $scope.config = {
            header: 'Travel & Adventures'
        };
    });

    app.component('mainHeader', {
        templateUrl: 'components/main-header.html'
    });

    app.component('mainFooter', {
        templateUrl: 'components/main-footer.html'
    });

    

})();

