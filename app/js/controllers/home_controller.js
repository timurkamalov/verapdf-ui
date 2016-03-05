angular.module("app").controller('HomeController', function($scope, $location, HomeService) {
  $scope.title = "Home";

  $scope.profileIds = ["1b", "2b", "3b"];

  $scope.currentProfileId = $scope.profileIds[0];

  $scope.validatePdf = function() {
    var file = $scope.pdfFile;
    HomeService.validatePdf(file, $scope.currentProfileId).then(function(responseStr) {
      $scope.validationResult = JSON.stringify(responseStr, undefined, 4);
    });
  };

  $scope.getProfile = function() {
    HomeService.getProfile($scope.currentProfileId).then(function(responseStr) {
      $scope.validationResult = JSON.stringify(responseStr, undefined, 4);
    });
  };
});
