/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var host  = "192.165.9.1" ;//"172.36.32.50:9988";

demo.controller("WebBrowserController",function($scope){
   
 //  $scope.targetUrl = 'http://baidu.com';
   $scope.targetUrl ='http://172.36.33.65:9988/mobile/viewer.jsp?_xma=%2FMobile%2FBIDEMO_IPHONE1.xma&id=weblogic&passwd=ADMIN123';
});

/*
demo.config('$sceDelegateProvider',function($sceDelegateProvider) {
        
        
        $sceDelegateProvider.resourceUrlWhitelist([
       // Allow same origin resource loads.
       'self',
       // Allow loading from our assets domain.  Notice the difference between * and **.
       host]);        
});
*/