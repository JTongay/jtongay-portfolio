app.controller('main', ['$scope','Image','$state', function($scope, Image, $state){
  $scope.view = {};
  $scope.view.active = 0;
  $scope.view.noWrapSlides = false;
  $scope.view.about = true;
  $scope.view.imageInterval = 3000;
  $scope.view.showAbout = function(){
    $scope.view.about = !$scope.view.about;
  }
  $scope.view.pictures = [
    {
      id: 1,
      url: 'pokemonstay',
      title: "Pokemon Stay!",
      image: "images/pokemonstay/pokestay1.png"
    },
    {
      id:2,
      url: 'digitalrolodex',
      title: "Digital Rolodex",
      image: "images/digidex/digidex1.png"
    },
    {
      id:3,
      url: 'railsreddit',
      title: "Rails Reddit Clone",
      image: "images/railsreddit/railsreddit.png"
    },
    {
      id:4,
      url: 'raspi-tv',
      title: "Raspi Smart TV",
      image: "images/raspi/raspi.png"
    }
  ]

  $scope.view.raspi = [
    {
      id: 1,
      image: "images/raspi.png"
    }
  ]
console.log("not single page");
}])
