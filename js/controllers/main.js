app.controller('main', ['$scope','Image','$state', function($scope, Image, $state){
  $scope.view = {};
  $scope.view.active = 0;
  $scope.view.noWrapSlides = false;
  $scope.view.about = true;
  $scope.view.imageInterval = 5000;
  $scope.view.showAbout = function(){
    $scope.view.about = !$scope.view.about;
  }
  // $scope.view.pictures = [
  //   {
  //     id: 1,
  //     url: 'pokemonstay',
  //     title: "Pokemon Stay!",
  //     image: "images/pokemonstay/pokestay1.png"
  //   },
  //   {
  //     id:2,
  //     url: 'digitalrolodex',
  //     title: "Digital Rolodex",
  //     image: "images/digidex/digidex1.png"
  //   },
  //   {
  //     id:3,
  //     url: 'railsreddit',
  //     title: "Rails Reddit Clone",
  //     image: "images/railsreddit/railsreddit.png"
  //   },
  //   {
  //     id:4,
  //     url: 'raspi-tv',
  //     title: "Raspi Smart TV",
  //     image: "images/raspi/raspi.png"
  //   }
  // ]

  $scope.view.pokemonstay = [
    {
      id: 1,
      image: "images/pokemonstay/pokestay1.png"
    },
    {
      id: 2,
      image: "images/pokemonstay/pokestay2.png"
    },
    {
      id: 3,
      image: "images/pokemonstay/pokestay3.png"
    },
    {
      id: 4,
      image: "images/pokemonstay/pokestay4.png"
    },
    {
      id: 5,
      image: "images/pokemonstay/pokestay5.gif"
    },
    {
      id: 6,
      image: "images/pokemonstay/pokestay6.png"
    }

  ]

  $scope.view.raspi = [
    {
      id: 1,
      image: "images/raspi/raspi.png"
    },
    {
      id: 2,
      image: "images/raspi/raspi2.png"
    },
    {
      id: 3,
      image: "images/raspi/raspi3.png"
    },
    {
      id: 4,
      image: "images/raspi/raspi4.jpg"
    }
  ]

  $scope.view.digidex = [
    {
      id: 1,
      image: "images/digidex/digidex1.png"
    },
    {
      id: 2,
      image: "images/digidex/digidex2.png"
    },
    {
      id: 3,
      image: "images/digidex/digidex3.png"
    },
    {
      id: 4,
      image: "images/digidex/digidex4.gif"
    },
    {
      id: 5,
      image: "images/digidex/digidex5.png"
    },
    {
      id: 6,
      image: "images/digidex/digidex6.png"
    }
  ]

  $scope.view.railsReddit = [
    {
      id: 1,
      image: "images/railsreddit/railsreddit.png"
    },
    {
      id: 2,
      image: "images/railsreddit/railsreddit2.png"
    }
  ]
}])
