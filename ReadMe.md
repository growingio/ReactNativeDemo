# GrowigIO React Native Demo

兼容版本：
> 
兼容 react native 版本：0.46-0.56 , 0.59.9 
>
兼容组件 react-navigation 版本：^2.7.4 , ^3.11.0
>
兼容组件 react-native-navigation 版本：^1.1.486


### 一、 介绍

GrowingIO React Native SDK 有两个版本：

1. 无埋点 SDK 功能：

    |自动采集事件名称   |事件类型   |
    |---|---|
    |用户访问事件   |发送自定义事件   |
    |页面浏览事件   |page   |
    |元素展示事件   |clck (click)   |
    |点击事件   |发送用户变量   |
    |输入框内容变化事件   |chng （change）   |
    |...|...   |
  - 提供埋点API：

    |埋点API   |功能   |
    |---|---|
    |track   |发送自定义事件   |
    |setPageVariable   |发送页面级变量   |
    |setEvar   |发送转化变量   |
    |setPeopleVariable   |发送用户变量   |
    |setUserId   |设置登录用户ID API   |
    |clearUserId   |清除登录用户ID API   |

2. 埋点 SDK 功能：
   只提供部分埋点API：

    |埋点API   |功能   |
    |---|---|
    |track   |发送自定义事件   |
    |~~setPageVariable~~  |~~发送页面级变量~~   |
    |setEvar   |发送转化变量   |
    |setPeopleVariable   |发送用户变量   |
    |setUserId   |设置登录用户ID API   |
    |clearUserId   |清除登录用户ID API   |

<<<<<<< HEAD
##### 注意： 埋点SDK没有页面的概念，所以不能发送页面级别变量。
=======
##### 注意： *埋点* SDK没有页面的概念，所以不能发送页面级别变量。
>>>>>>> 806422602fd4d3e8bc6bbbca501a92d9909fda25


### 二、 Demo 运行

```
npm install 
```


### Android端  

```
react-native run-andrid
```

### IOS端
 
```
$react-native run-ios
```
   
### 集成 SDK 
请进入 GrowingIO 官网登录您的账号后选择 -> 新建应用   

根据步骤可以顺利集成SDK，这里友情贴出截图：
![install](https://github.com/growingio/ReactNativeDemo/blob/master/screenshots/install.png)  
![step1](https://github.com/growingio/ReactNativeDemo/blob/master/screenshots/1.png)    
![step2](https://github.com/growingio/ReactNativeDemo/blob/master/screenshots/2.png)    
![step3](https://github.com/growingio/ReactNativeDemo/blob/master/screenshots/3.png)    
![step4](https://github.com/growingio/ReactNativeDemo/blob/master/screenshots/4.png)    


