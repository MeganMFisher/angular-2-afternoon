angular.module('devmtnTravel').controller('locationsCtrl', ($scope, mainSrvc) => {
    mainSrvc.getTravelInfo().then(response => {
        $scope.locations = response.data
    })
})