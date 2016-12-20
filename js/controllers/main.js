app.controller('main', ['$scope', function($scope){
  $scope.view = {};
  $scope.view.active = 0;
  $scope.view.noWrapSlides = false;
  $scope.view.imageInterval = 3000;
  $scope.view.pictures = [
    {
      id: 1,
      image: "images/pokestay1.png"
    },
    {
      id:2,
      image: "images/digidex1.png"
    },
    {
      id:3,
      image: "images/railsreddit.png"
    },
    {
      id:4,
      image: "images/raspi.png"
    }
  ]
}])
