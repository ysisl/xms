/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


demo.controller("ReportController",function($scope,SettingsService){
   
   $scope.report = {
            title: '报表链接路径',
            label: 'Demo',
            path: 'http://172.36.32.50:9988/mobile/viewer.jsp?_xma=%2FMobile%2FBIDEMO_IPHONE1.xma&id=weblogic&passwd=ADMIN123'
   };
   $scope.report = SettingsService.get("report");
   
   $scope.saveSetting = function(){
       SettingService.set("report",$scope.report);
   };
   
  
   
  
});