angular.module('devmtnTravel').controller('packagesCtrl', ($scope, $stateParams, mainSrvc) => {
    
    mainSrvc.getPackagesInfo().then(response => {
        $scope.allPackages = response.data


        if($stateParams.country) {
            $scope.packages = $scope.allPackages.filter(function(package) {
                return package.country === $stateParams.country;
            })
        }
    })

})