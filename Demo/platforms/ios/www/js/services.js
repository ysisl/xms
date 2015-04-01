/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



demo.factory('DataService', function ($http) {
    
    dataService ={
        getBIData : function(){
        var requestURL= "http://portal.sogal.net:8083/api/rest/error/all?_dc=1427779575941&page=1&start=0&limit=10&filtersRaw=[{%22id%22%3Anull%2C%22property%22%3A%22code%22%2C%22value%22%3A%22BIDemoHost%22%2C%22operator%22%3A%22%22%2C%22sql%22%3Anull}]";
      //  var requestURL = "http://portal.sogal.net:8083/api/rest/"
        $http.get(requestURL).then(function (response) {
               
            
            clientDataObject = response;
            var params = { host :clientDataObject.result[0].exception,
                           url: clientDataObject.result[0].msg
                       };
            return params;
        });
    }};

    return dataService;
        
});