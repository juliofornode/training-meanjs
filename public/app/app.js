(function () {

    'use strict';

    angular.module('miApp', [
            'ui.router',
            'directive001',
            'widgetDirectives',
            'widget001',
            'decoratorDirectives',
            'decorator001',
            'decorator002',
            'transclusionDirectives',
            'transclusion001',
            'transclusion002',
            'structuralDirectives',
            'structural001',
            'structural002',
            'constantFunction',
            'qService',
            'routingServices',
            'cookies',
            'log',
            'httpService',
            'resourceService',
            'ngResource',
            'cachingSharing',
            'caching',
            'sharing',
            'serviceDecorators'
            ])

        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/home');

            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'app/services/home/home.html'
                })
                .state('providers', {
                    url: '/providers',
                    templateUrl: 'app/services/providerFunction/providers.html'
                })
                .state('widget001', {
                    url: '/widget001',
                    templateUrl: 'app/services/providerFunction/widget001/widget001.html'
                })
                .state('decoratorDirectives', {
                    url: '/decoratorDirectives',
                    templateUrl: 'app/services/factoryFunction/decorator-directives.html'
                })
                .state('decorator001', {
                    url: '/decorator001',
                    templateUrl: 'app/services/factoryFunction/decorator001/decorator001.html'
                })
                .state('decorator002', {
                    url: '/decorator002',
                    templateUrl: 'app/services/factoryFunction/decorator002/decorator002.html'
                })
                .state('transclusionDirectives', {
                    url: '/transclusionDirectives',
                    templateUrl: 'app/services/serviceFunction/transclusion-directives.html'
                })
                .state('transclusion001', {
                    url: '/transclusion001',
                    templateUrl: 'app/services/serviceFunction/transclusion001/transclusion001.html'
                })
                .state('transclusion002', {
                    url: '/transclusion002',
                    templateUrl: 'app/services/serviceFunction/transclusion002/transclusion002.html'
                })
                .state('structuralDirectives', {
                    url: '/structuralDirectives',
                    templateUrl: 'app/services/valueFunction/structural-directives.html'
                })
                .state('structural001', {
                    url: '/structural001',
                    templateUrl: 'app/services/valueFunction/structural001/structural001.html'
                })
                .state('structural002', {
                    url: '/structural',
                    templateUrl: 'app/services/valueFunction/structural002/structural002.html'
                })
                .state('constantFunction', {
                    url: '/constantFunction',
                    templateUrl: 'app/services/constantFunction/constant-function.html'
                })
                .state('dependency-anotations', {
                    url: '/dependency-anotations',
                    templateUrl: 'app/services/dependency-anotations.html'
                })
                .state('qService', {
                    url: '/qService',
                    templateUrl: 'app/builtinServices/qService/q-service.html'
                })
                .state('routingServices', {
                    url: '/routingServices',
                    templateUrl: 'app/builtinServices/routingServices/routing-services.html'
                })
                .state('cookies', {
                    url: '/cookies',
                    templateUrl: 'app/builtinServices/cookies/cookies.html'
                })
                .state('log', {
                    url: '/log',
                    templateUrl: 'app/builtinServices/log/log.html'
                })
                .state('httpService', {
                    url: '/httpService',
                    templateUrl: 'app/networkingServices/httpService/http-service.html'
                })
                .state('getAll', {
                    url: '/getAll',
                    templateUrl: 'app/networkingServices/httpService/getAll/get-all.html'
                })
                .state('updateOne', {
                    url: '/updateOne/:bookId',
                    templateUrl: 'app/networkingServices/httpService/updateOne/update-one.html'
                })
                .state('createOne', {
                    url:'/createOne',
                    templateUrl: 'app/networkingServices/httpService/createOne/create-one.html'
                })
                .state('transformations', {
                    url: '/transformations',
                    templateUrl: 'app/networkingServices/transformations-and-interceptors/transformations-and-interceptors.html'
                })
                .state('resourceService', {
                    url: '/resourceService',
                    templateUrl: 'app/networkingServices/resourceService/resource-service.html'
                })
                .state('cachingSharing', {
                    url: '/cachingSharing',
                    templateUrl: 'app/cachingSharing/caching-sharing.html'
                })
                .state('caching', {
                    url: '/caching',
                    templateUrl: 'app/cachingSharing/caching/caching.html'
                })
                .state('sharing', {
                    url: '/sharing',
                    templateUrl: 'app/cachingSharing/sharing/sharing.html'
                })
                .state('serviceDecorators', {
                    url: '/serviceDecorators',
                    templateUrl: 'app/serviceDecorators/service-decorators.html'
                })

        });



}());


