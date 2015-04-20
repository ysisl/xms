'use strict';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


demo.controller('ContactController',function ($rootScope,$scope,DataService,SettingsService) {
    
    $scope.smallImg = "http://p3.wmpic.me/article/2015/04/02/1427939279_arAQzhqP.jpeg";
    $scope.person = SettingsService.get("person");
    
    // 绑定URL
    var _url = "/rest/user/all?page=1&start=0&limit=50";
    DataService.getData(_url).then(function(data){
        $scope.items = data["result"];
        
    });
   
    $scope.showDetail = function(targetPage,item){
        SettingsService.set("person",item);
        $scope.nav.pushPage(targetPage);
       
    };
    
     $scope.saveSetting = function(){
  
         SettingService.set("path",$scope.reportpath);
    };
    
    $scope.items = [
        {
            title: '测试联系人',
            label: '4h',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            title: 'Another Item Title',
            label: '6h',
            desc: 'Ut enim ad minim veniam.'
        },
        {
            title: 'Yet Another Item Title',
            label: '1day ago',
            desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            
            title: '报表链接路径',
            label: 'Demo',
            desc: 'http://172.36.32.50:9988/mobile/viewer.jsp?_xma=%2FMobile%2FBIDEMO_IPHONE1.xma&id=weblogic&passwd=ADMIN123'
        }
    ];
    
    
    ons.createPopover('popover.html').then(function(popover) {
            $scope.popover = popover;
          });
    
    $scope.showpop = function(e){
        $scope.popover.show(e);
    }
    
});
