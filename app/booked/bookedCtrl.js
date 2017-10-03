angular.module('devmtnTravel').controller('bookedCtrl', ($scope, mainSrvc, $stateParams) => {
    mainSrvc.getPackagesInfo().then(response => {
        $scope.allPackages = response.data;
        console.log($scope.allPackages)

        if($stateParams.id) {
            $scope.packageIndex = $scope.allPackages.findIndex(package => {
                return package.id === parseInt($stateParams.id)
            })
        }
        if($scope.packageIndex !== -1) {
            $scope.package = $scope.allPackages[$scope.packageIndex]
        }
    })
})