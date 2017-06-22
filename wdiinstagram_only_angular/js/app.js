"use strict";

(function(){
  angular
    .module("wdiInstagram", ["ui.router"])
    .config([
      "$stateProvider",
      Router
    ])
    .controller("WdiInstagramController", [
      "$stateParams",
      WdiInstagramControllerFunc
    ])
    .controller("WdiInstagramNewController", [
      "WdiIn"
    ])
    .controller("WdiInstagramIndexController", [
      "WdiInstagramFactory",
      WdiInstagramIndexControllerFunc
    ])
    .controller("WdiInstagramShowController", [
      "$stateParams",
      WdiInstagramShowControllerFunc
    ])
    .factory("WdiInstagramFactory", [
      WdiInstagramFactoryFunc
    ]);

  function WdiInstagramIndexControllerFunc(){
    console.log("I'm in the controller")
    this.instagrams = wdiInstagramData
    WdiInstagramFactory.helloWorld();
  }

  function WdiInstagramShowControllerFunc($stateParams){
    console.log("$stateParams")
    this.instagram = wdiInstagramData[$stateParams.id];
  }

  function WdiInstagramControllerFunc($state, $stateParams){
    this.instagrams = wdiInstagramData
  }

  function WdiInstagramFactoryFunc(){
    return {
      helloWorld: function(){
        console.log( "Hello world!");
      }
    }
  }
  function Router($stateProvider){
    $stateProvider
      .state("instagramIndex", {
        url: "/instagrams",
        controller: "WdiInstagramIndexController",
        controllerAs: "vm",
        templateUrl: "js/ng-views/index.html"
      })
      .state("instagramNew", {
        url: "/instagrams/new",
        templateUrl: "js/ng-views/new.html",
        controller: "WdiInstagramNewController",
        controllerAs: "vm"
      })
      .state("instagramShow", {
        url: "/instagrams/:id",
        controller: "WdiInstagramShowController",
        controllerAs: "vm",
        templateUrl: "js/ng-views/show.html"
      })
  }

  let wdiInstagramData = [
    {
      author: "Clark",
      body: "My other job.",
      photo_url: "http://vignette4.wikia.nocookie.net/superman/images/b/b1/Superman_Action_976_Gary_Frank.png/revision/latest/scale-to-width-down/288?cb=20170501140424"
    },
    {
      author: "Louise",
      body: "Have you ever tried fighting sexism in this outfit?",
      photo_url: "http://pm1.narvii.com/6310/35b20d479ed02e62e05d33f3eade72d3182d1a95_hq.jpg"
    },
    {
      author: "Tony",
      body: "Why not ditch the suit and tie for something else.",
      photo_url: "https://www.sideshowtoy.com/wp-content/uploads/2016/04/captain-america-civil-war-iron-man-xlvi-sixth-scale-marvel-silo-902708.png"
    }
  ]

})();
