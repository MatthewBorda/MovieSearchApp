"use strict";angular.module("workspaceApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/movielookup/:movielookupID",{templateUrl:"views/movielookup.html",controller:"MovielookupCtrl",controllerAs:"movielookup"}).when("/sunburst/:movieID",{templateUrl:"views/sunburst.html",controller:"SunburstCtrl",controllerAs:"sunburst"}).otherwise({redirectTo:"/"})}]),angular.module("workspaceApp").controller("MainCtrl",["$scope","moviesearch",function(a,b){a.moviesFound=b.find(),a.findMovies=function(){a.moviesFound=b.find({query:a.movieName}),a.searchQuery=a.movieName}}]),angular.module("workspaceApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").factory("current",["$resource",function(a){return a("http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:movieName",{},{query:{method:"GET",params:{movieName:"Seattle"},isArray:!1}})}]),angular.module("workspaceApp").factory("moviesearch",["$resource",function(a){return a("http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:query&language=en&include_adult=false",{},{find:{method:"GET",params:{query:""},isArray:!1}})}]),angular.module("workspaceApp").controller("SunburstCtrl",["$scope","$routeParams","sunburst",function(a,b,c){a.id=b.movieID,a.sunburstData=c.query({movieID:b.movieID})}]),angular.module("workspaceApp").factory("sunburst",["$resource",function(a){return a("http://api.themoviedb.org/3/movie/:movieID?api_key=0ee729f7a5162307774f1f09911d0b59&append_to_response=genre,keywords,credits,similar",{},{query:{method:"GET",params:{movieID:"858"},isArray:!1}})}]),angular.module("workspaceApp").factory("sunburstChart",function(){var a=42;return{someMethod:function(){return a}}}),angular.module("workspaceApp").factory("movieLookup",["$resource",function(a){return a("http://api.themoviedb.org/3/movie/:movielookupID?api_key=0ee729f7a5162307774f1f09911d0b59&append_to_response=genre,keywords,credits,similar,images,videos",{},{query:{method:"GET",params:{movielookupID:"858"},isArray:!1}})}]),angular.module("workspaceApp").controller("MovielookupCtrl",["$scope","$routeParams","movieLookup",function(a,b,c){a.id=b.movielookupID,a.movielookupData=c.query({movielookupID:b.movielookupID})}]),angular.module("workspaceApp").factory("moviedetail",["$resource",function(a){return a("http://api.themoviedb.org/3/search/movie?api_key=0ee729f7a5162307774f1f09911d0b59&query=:query&language=en&include_adult=false",{},{find:{method:"GET",params:{query:""},isArray:!1}})}]),angular.module("workspaceApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<!-- Basic search --> <div ng-controller="MainCtrl"> <!-- ng-style="{\'background-image\':\' url( http://image.tmdb.org/t/p/w1280\' + moviesFound.results[0].poster_path +\')\'}" --> <div class="navbar navbar-inverse"> <div class="container"> <div class="navbar-header"> <a class="navbar-brand" href="#">Movie Finder</a> </div> <div class="pull-right"> <form class="navbar-form" role="search" ng-init="movieName=\'Seattle\'"> <div class="input-group"> <label for="movieName"> <input id="searchText" type="text" name="movieName" ng-model="movieName"> </label> <div class="input-group-btn"> <button class="btn btn-default" ng-click="findMovies()"><i class="glyphicon glyphicon-search"></i></button> </div> </div> </form> </div> </div> </div> <!--  --> <div class="container resultsOutput"> <div class="container"> <div ng-if="searchQuery"> <div class="wide container" ng-style="{\'background-image\':\' url( http://image.tmdb.org/t/p/original\' + moviesFound.results[0].backdrop_path +\')\'}"> <div class="row"> <h2 class="primaryText"> {{moviesFound.results[0].original_title}}</h2> </div> <div class="row"> <div class="row col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"> <p class="primaryText"> {{moviesFound.results[0].overview}}</p> </div> <!--Overview end --> <div class="row col-xs-12 col-sm-12 col-md-2 col-md-offset-6 col-lg-2 col-lg-offset-6 col-xl-2 col-lg-offset-6"> <img img src="http://image.tmdb.org/t/p/w154/{{moviesFound.results[0].poster_path}}" alt="{{moviesFound.results[0].original_title}}"> <br> <a ng-href="/#/movielookup/{{moviesFound.results[0].id}}" class="btn btn-lg btn-primary">Find Similar</a> </div> </div> </div> <div class="altGrid"> <h1 class="gridHeader">Not it? Try one of these</h1> <div class="container secondaryResults"> <div ng-repeat="movies in moviesFound.results |limitTo:19:1 | filter:{poster_path:\'\'}"> <div class="row gridResults col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2"> <a ng-href="/#/movielookup/{{movies.id}}"> <img src="http://image.tmdb.org/t/p/w92/{{movies.poster_path}}" alt=" {{movies.original_title}}"></a> </div> </div> </div> </div> </div> </div> </div> </div> '),a.put("views/movielookup.html",'<div class="navbar navbar-inverse"> <div class="container"> <div class="navbar-header"> <a class="navbar-brand" href="#">Movie Finder</a> </div> </div> </div> <div ng-if="movielookupData"> <div class="wide container" ng-style="{\'background-image\':\' url( http://image.tmdb.org/t/p/original\' + movielookupData.images.backdrops[2].file_path +\')\'}"> <div class="row"> <h2 class="primaryText"> {{movielookupData.original_title}}</h2> </div> <div class="row"> <div class="row col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4"> <p class="primaryText"> {{movielookupData.tagline}}</p> </div> <!--Overview end --> <div class="row col-xs-12 col-sm-12 col-md-2 col-md-offset-6 col-lg-2 col-lg-offset-6 col-xl-2 col-lg-offset-6"> <img img src="http://image.tmdb.org/t/p/w154/{{movielookupData.poster_path}}" alt="{{moviesFound.results[0].original_title}}"> </div> </div> </div> <div ng-if="movielookupData"> <!--   put sections here --> <div class="container searchContainer"> <div class="row categories col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> <button ng-click="show =1">Cast</button> <button ng-click="show =2">Crew</button> <button ng-click="show =3">Genres</button> <button ng-click="show =4">Keywords</button> <button ng-click="show =5">Similar</button> </div> <div class="form-group" ng-show="show==1"> <h1>Cast</h1> <div class="container"> <div ng-repeat="castFound in movielookupData.credits.cast | filter:{profile_path:\'\'}"> <div class="row gridOutputResults col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2"> <p>{{castFound.character}}: {{castFound.name}}</p> <a ng-href="/#/!!!!/{{castFound.id}}"> <img src="http://image.tmdb.org/t/p/w185/{{castFound.profile_path}}" alt=" {{castFound.name}}"></a> </div> </div> </div> </div> </div> <div class="form-group" ng-show="show==2"> <h1>Crew</h1> <div class="container"> <div ng-repeat="crewFound in movielookupData.credits.crew  | filter:{profile_path:\'\'}"> <div class="row gridOutputResults col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2"> <a ng-href="/#/!!!!/{{crewFound.id}}"> <img src="http://image.tmdb.org/t/p/w185/{{crewFound.profile_path}}" alt=" {{crewFound.name}}"></a> <p>{{crewFound.job}}: {{crewFound.name}}</p> </div> </div> </div> </div> <div class="form-group" ng-show="show==3"> <h1>Genres</h1> <div class="container"> <div ng-repeat="generesFound in movielookupData.genres"> <div class="row gridTextResults col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2"> <button type="button" class="btn btn-outline-secondary">{{generesFound.name}}</button> </div> </div> </div> </div> <div class="form-group" ng-show="show==4"> <h1>Keywords</h1> <div class="container"> <div ng-repeat="keywordsFound in movielookupData.keywords.keywords"> <div class="row gridTextResults col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2"> <button type="button" class="btn btn-outline-secondary">{{keywordsFound.name}}</button> </div> </div> </div> </div> <div class="form-group" ng-show="show==5"> <h1>Similar results</h1> <div class="container"> <div ng-repeat="similarFound in movielookupData.similar.results  | filter:{poster_path:\'\'}"> <div class="row row-centered gridOutputResults col-xs-12 col-sm-3 col-md-2 col-lg-2 col-xl-2"> <a ng-href="/#/!!!!/{{similarFound.id}}"> <img src="http://image.tmdb.org/t/p/w185/{{similarFound.poster_path}}" alt=" {{similarFound.name}}"></a> </div> </div> </div> </div> </div> </div>'),a.put("views/sunburst.html",'<h1>{{sunburstData.original_title}} </h1> <h1>Generes</h1> <div ng-if="sunburstData"> <div class="results" ng-repeat="generesFound in sunburstData.genres"> <p>{{generesFound.name}}</p> </div> </div> <h1>Cast</h1> <div ng-if="sunburstData"> <div class="results" ng-repeat="castFound in sunburstData.credits.cast"> <p>{{castFound.name}}</p> </div> </div> <h1>Crew</h1> <div ng-if="sunburstData"> <div class="results" ng-repeat="castFound in sunburstData.credits.crew"> <p>{{castFound.name}}</p> </div> </div> <h1>Keywords</h1> <div ng-if="sunburstData"> <div class="results" ng-repeat="keywordsFound in sunburstData.keywords.keywords"> <p>{{keywordsFound.name}}</p> </div> </div> <h1>Similar results</h1> <div ng-if="sunburstData"> <div class="results" ng-repeat="similarFound in sunburstData.similar.results"> <p>{{similarFound.original_title}}</p> </div> </div> <!--Leave it all in one call and let the user include / exclude generes/keywords/cast/other (defualt just being generes). Leave sunburst on this page and have it update automatically as selections are made  -->')}]);