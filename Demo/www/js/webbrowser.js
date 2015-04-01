/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


demo.controller("WebBrowserController",function($scope,BIDataService){
   
    BIDataService.getBIURL().then(function(data){
        console.log(data); 
    });

    
   $scope.targetUrl = 'http://baidu.com';
 //  $scope.targetUrl ='http://172.36.33.65:9988/mobile/viewer.jsp?_xma=%2FMobile%2FBIDEMO_IPHONE1.xma&id=weblogic&passwd=ADMIN123';
});


