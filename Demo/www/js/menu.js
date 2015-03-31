/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


demo.controller("MenuController", function ($scope, SettingsService) {
    $scope.gotoReport = function () {

        $scope.myNavigator.pushPage("html/web.html");

    };


    $scope.logout = function () {

        $scope.myNavigator.pushPage("login.html");

    };

    $scope.reportSetting = function () {

    /*    if (!SettingsService.get("report")) {
            SettingsService.set("report", {
                title: '报表链接路径',
                label: 'Demo',
                path: 'http://172.36.32.50:9988/mobile/viewer.jsp?_xma=%2FMobile%2FBIDEMO_IPHONE1.xma&id=weblogic&passwd=ADMIN123'
            });
        }
        */
        $scope.myNavigator.pushPage("reportSetting.html");

    };


});