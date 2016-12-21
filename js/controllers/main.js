app.controller('main', ['$scope', function($scope){
  $scope.view = {};
  $scope.view.active = 0;
  $scope.view.noWrapSlides = false;
  $scope.view.imageInterval = 3000;
  $scope.view.pictures = [
    {
      id: 1,
      title: "Pokemon Stay!",
      image: "images/pokestay1.png"
    },
    {
      id:2,
      title: "Digital Rolodex",
      image: "images/digidex1.png"
    },
    {
      id:3,
      title: "Rails Reddit Clone",
      image: "images/railsreddit.png"
    },
    {
      id:4,
      title: "Raspi Smart TV",
      image: "images/raspi.png"
    }
  ]
}])
