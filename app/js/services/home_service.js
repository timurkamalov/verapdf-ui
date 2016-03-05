angular.module("app").factory("HomeService", function($q, $http) {

  var validatePdf = function(file, profileId) {
    var uploadUrl = "/api/validate/" + profileId + '/';

    var fd = new FormData();
    fd.append('file', file);

    return $http.post(uploadUrl, fd, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined,
        'Accepts': 'application/json'
      }
    })
    .success(function (response) {
      return response;
    })
    .error(function(){
    });

  };

  var getProfile = function(profileId) {
    var uploadUrl = "/api/profiles/" + profileId + '/';

    return $http.get(uploadUrl, {
      transformRequest: angular.identity,
      headers: {
        'Content-Type': undefined,
        'Accepts': 'application/json'
      }
    })
    .success(function (response) {
      return response;
    })
    .error(function(){
    });

  };

  return {
    validatePdf: validatePdf,
    getProfile: getProfile
  };
});
