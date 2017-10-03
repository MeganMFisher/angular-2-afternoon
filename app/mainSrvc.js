angular.module('devmtnTravel').service('mainSrvc', function($http) {

    this.getTravelInfo = () => {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/travel/travel-info'
        })
    }

    this.getPackagesInfo = () => {
        return $http({
            method: 'GET',
            url: 'https://practiceapi.devmountain.com/api/travel/package-info'
          });
    }
    
  
});