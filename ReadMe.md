# GrowigIO React Native Demo

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

##### 注意： 无埋点SDK没有页面的概念，所以不能发送页面级别变量。


### 二、 Demo 运行

### Android端

1. 首先需要安装 Android Studio，强烈建议用户安装
2. 到工程目录下执行 npm install --save https://github.com/growingio/GIORNHook.git


Mac:

打开命令行
进入到node_modules/react-native-autotrack-growingio/目录下

执行 ./hook.js -run




Windows:

在电脑上安装node

打开命令行

进入到node_modules/react-native-autotrack-growingio/目录下
执行 node npm -i
执行 node ./hook.js -run



>  注意： 每次执行 npm build 之后，都需要按照上面步骤，执行 ./hook.js -run


3. 执行 adb reverse tcp:8081 tcp:8081
4. 执行 yarn install
5. 在 android studio 中点击运行 app

### IOS端

1，安装react native相关的运行环境

2，下载示例Demo代码

3，进入/ReactNativeDemo/RNHelloWorld目录下安装依赖包：
   npm install
   
4,进入到node_modules/react-native-autotrack-growingio/目录下集成GIO RN打点事件
 执行 ./hook.js -run
 
5，命令行运行示例：
   /ReactNativeDemo/RNHelloWorld$react-native run-ios
   
6,xcode运行示例
  通过xcode打开ios文件夹中的项目，点击运行即可。
  
