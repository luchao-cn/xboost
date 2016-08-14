var app = angular.module('app', ['ui.router', 'ionic']);

app.controller('phoneListCtrl', function($scope, $http) {
  $scope.phones = [{
    "name": "Nexus S",
    "snippet": "Fast just got faster with Nexus S.",
    "age": 0
  }, {
    "name": "Motorola XOOM™ with Wi-Fi",
    "snippet": "The Next, Next Generation tablet.",
    "age": 1
  }, {
    "name": "MOTOROLA XOOM™",
    "snippet": "The Next, Next Generation tablet.",
    "age": 2
  }];

  // $http.get('example/phones').success(function(data) {
  // $scope.phones = data;
  // });
});

app.controller('mallController', function($scope) {
  $scope.options = {
    loop: false,
    effect: 'fade',
    speed: 500,
  }

  $scope.$on("$ionicSlides.sliderInitialized", function(event, data) {
    // data.slider is the instance of Swiper
    $scope.slider = data.slider;
  });

  $scope.$on("$ionicSlides.slideChangeStart", function(event, data) {
    console.log('Slide change is beginning');
  });

  $scope.$on("$ionicSlides.slideChangeEnd", function(event, data) {
    // note: the indexes are 0-based
    $scope.activeIndex = data.activeIndex;
    $scope.previousIndex = data.previousIndex;
  });
});

app.controller('memberController', function($scope, $http) {

  $http.get('/user/get').success(function(user) {
    $scope.user = user;
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('/', '/main').otherwise('/error');

  $stateProvider.state("main", {
    url: "/main",
    templateUrl: "/view/main.html"
  }).state('main.mall', {
    url: "/mall",
    views: {
      'mainContent': {
        controller: 'mallController',
        templateUrl: "view/mall.html"
      }
    }
  }).state("error", {
    url: "/error",
    templateUrl: "/view/error.html"
  }).state("main.phones", {
    url: "/phones",
    views: {
      'mainContent': {
        controller: "phoneListCtrl",
        templateUrl: "/view/examples/phones.html",
      }
    }
  }).state("main.member", {
    url: "/member",
    views: {
      'mainContent': {
        controller: "memberController",
        templateUrl: 'view/member.html'
      }
    }
  }).state("main.textInput", {
    url: "/textInput",
    views: {
      'mainContent': {
        controller: "memberController",
        templateUrl: 'view/demo/textInput.html'
      }
    }
  })
});
