/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

//controller 逻辑控制
//登陆页面Controller
var cancelFlag = false;

demo.controller('loginController', function ($scope) {
    var usernameString = window.localStorage.getItem("username");
    var passwordString = window.localStorage.getItem("password");
    $scope.username = usernameString;
    $scope.password = passwordString;
    var loginBtn = document.getElementById("loginBtn");
    var loginOutBtn = document.getElementById("loginOutBtn");
   
    
    
    $scope.login = function () {
        
      $scope.myNavigator.pushPage('html/main.html', {animation: "fade"});
        
        
    };
     /*
    $scope.cancelLogin = function () {
        cancelFlag = true;
        loginBtn.style.display = "block";
        loginOutBtn.style.display = "none";
        return;
    };

    function doLogin() {
        
        if (isEmpty($scope.username) || isEmpty($scope.password)) {
            showAlert("提示", "用户名和密码不能为空！");
            return;
        }
        var user = {
            username: $scope.username,
            password: $scope.password,
            appVersion: rootConfig.currentVersion,
            pkgIdentifier: rootConfig.pkgIdentifier,
            pnsId: pnsId,
            model: model,
            osType: osType,
            osVer:osVer,
            deviceType: deviceType
        };
        loginBtn.style.display = "none";
        loginOutBtn.style.display = "block";
        loginBtn.setAttribute("disabled", true);
        loginBtn.innerHTML = "登录中...";
        console.log("angular.toJson(user):" + angular.toJson(user));
        LoginService.login(angular.toJson(user)).success(function (response) {
            loginBtn.removeAttribute("disabled");
            loginBtn.innerHTML = "登录";
            console.log("登陆 response.data:" + response.code);
            if (response.code === "SUCCESS") {
                var roleCodeList = new Array();
                userService.getUser().then(function (response) {
                    var user = response.data;
                    $rootScope.user = user;
                    for (var i = 0; i < user.roles.length; i++) {
                        roleCodeList.push(user.roles[i].roleCode);
                        console.log("get the roleCodeList1 = " + roleCodeList);
                    }
                    SettingsService.set("roleCodeList", roleCodeList);
                    if (!contains(roleCodeList, "Early Users")) {
                        showAlert("提示", "您的角色尚未开通权限，请联系系统管理员！");
                        $scope.username = "";
                        $scope.password = "";
                    } else {
                        window.localStorage.setItem("username", $scope.username);
                        window.localStorage.setItem("password", $scope.password);
                        var hash = CryptoJS.MD5($scope.password);
                        if(rootConfig.debug) {
                            console.log("passwordDigest: " + hash);
                        }
                        window.localStorage.setItem("passwordDigest", hash);
                        window.localStorage.setItem("basicAuthHeaderValue", "Basic " + window.btoa($scope.username + ":" + $scope.password));
                        basicAuthHeaderValue = "Basic " + window.btoa($scope.username + ":" + $scope.password);
                        
                      //  $scope.checkVersion();
                    }
                });
            }
        }).error(function (response, status) {
            loginBtn.removeAttribute("disabled");
            loginBtn.innerHTML = "登录";
            if (status === 401) {
                showAlert("提示", "登录失败，用户名或密码错误！");
            } else {
                showAlert("提示", "登录失败，网络连接错误！");
            }
            cancelFlag = false;
            loginBtn.style.display = "block";
            loginOutBtn.style.display = "none";
        });
    }

    $scope.checkVersion = function () {
        LoginService.checkVersion().then(function (data) {
            if (data.newVersion === rootConfig.currentVersion) {
                changeToMainPage();
            } else {
                $scope.confirmUpdateVersion(data.downloadUrl);
            }
        }, function (data) {
            changeToMainPage();
        });
    }

    //版本更新的提示的提示
    $scope.confirmUpdateVersion = function (downloadUrl) {
        ons.notification.confirm({
            message: '程序有了新版本1，请下载更新！',
            callback: function (idx) {
                switch (idx) {
                    case 0:
                        break;
                    case 1:
                        var ref = window.open(downloadUrl, '_system', 'location=yes');
                        break;
                }
            }
        });
    };

    function changeToMainPage() {
        setTimeout(function () {
            if (cancelFlag === true) {
                cancelFlag = false;
                return;
            }
            else
                $scope.ons.navigator.pushPage('myMainPage', {animation: "fade"});
        }, 100);
    }
    */
});

