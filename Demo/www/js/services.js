/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



demo.factory('BIDataService', function ($http,$q) {
    
    dataService ={
        
        getBIURL: function () {
            var deferred = $q.defer();
            var requestURL= "http://portal.sogal.net:8083/api/rest/error/all?_dc=1427779575941&page=1&start=0&limit=10&filtersRaw=[{%22id%22%3Anull%2C%22property%22%3A%22code%22%2C%22value%22%3A%22BIDemoHost%22%2C%22operator%22%3A%22%22%2C%22sql%22%3Anull}]";
          
            $http.get(requestURL).success(function (data, status, headers, config) {
                
                    console.log('request config: ' + angular.toJson(config, true));
                    //  console.log('success get data: ' + angular.toJson(data, true));
                
                deferred.resolve(data);
            }).error(function (resp) {
                
                    console.log('server return error: ' + angular.toJson(resp));
                
                deferred.reject(resp);
            });
            return deferred.promise;
        }
    };

    return dataService;
        
});

demo.factory('DataService', function ($http,$q) {
    
    dataService ={
        
        getData: function (_url) {
            var requestURL= rootConfig.reqHost + _url;
            console.log('DEBUG - Request URL: '+ requestURL);
            var deferred = $q.defer();
            $http.get(requestURL).success(function (data, status, headers, config) {
                deferred.resolve(data);
                console.log('DEBUG - server return : ' + angular.toJson(data));
            }).error(function (resp) {
    
                deferred.reject(resp);
            });
            return deferred.promise;
        }
    };

    return dataService;
        
});