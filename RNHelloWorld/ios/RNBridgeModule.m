//
//  RNBridgeModule.m
//  RNHelloWorld
//
//  Created by GrowingIO on 2018/8/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNBridgeModule.h"
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>
#import "AppDelegate.h"
#import "NativeViewController.h"

@implementation RNBridgeModule

//@synthesize bridge = _bridge;

RCT_EXPORT_MODULE(RNBridgeModule)

//RN传参数调用原生OC,并且返回数据给RN  通过CallBack
RCT_EXPORT_METHOD(RNInvokeOCCallBack:(NSDictionary *)dictionary callback:(RCTResponseSenderBlock)callback){
  NSLog(@"接收到RN传过来的数据为:%@",dictionary);
  NSArray *events = [[NSArray alloc] initWithObjects:@"张三",@"李四", nil];
  callback(@[[NSNull null], events]);
}
//RN传参数调用原生OC,并且返回数据给RN  通过Promise
RCT_EXPORT_METHOD(RNInvokeOCPromise:(NSDictionary *)dictionary resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject){
  NSLog(@"接收到RN传过来的数据为:%@",dictionary);
  NSString *value=[dictionary objectForKey:@"name"];
  if([value isEqualToString:@"jiangqq"]){
    resolve(@"回调成功啦,Promise...");
  }else{
    NSError *error=[NSError errorWithDomain:@"传入的name不符合要求,回调失败啦,Promise..." code:100 userInfo:nil];
    reject(@"100",@"传入的name不符合要求,回调失败啦,Promise...",error);
  }
}

//OC调用RN
RCT_EXPORT_METHOD(VCOpenRN:(NSDictionary *)dictionary){
  NSString *value=[dictionary objectForKey:@"name"];
  if([value isEqualToString:@"jiangqq"]){
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":[NSString stringWithFormat:@"%@",value],@"errorCode":@"0",@"msg":@"成功"}];
  }else{
    [self.bridge.eventDispatcher sendAppEventWithName:@"EventReminder" body:@{@"name":[NSString stringWithFormat:@"%@",value],@"errorCode":@"0",@"msg":@"输入的name不是jiangqq"}];
  }
}

//RN打开VC页面
RCT_EXPORT_METHOD(openNativeVC) {
  NSLog(@"执行RN打开VC函数！");
  //  dispatch_async(dispatch_get_main_queue(), ^{
  //    AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
  //    UINavigationController *rootNav = delegate.navController;
  //    NativeViewController *nativeVC = [[NativeViewController alloc] init];
  //    [rootNav pushViewController:nativeVC animated:YES];
  //  });
  
  dispatch_async(dispatch_get_main_queue(), ^{
    AppDelegate *delegate = (AppDelegate *)([UIApplication sharedApplication].delegate);
    UIViewController *rootVC = delegate.window.rootViewController;
    //NativeViewController *nativeVC = [[NativeViewController alloc] init];
    UIStoryboard *SB=[UIStoryboard storyboardWithName:@"Storyboard" bundle:nil];
    NativeViewController *nativeVC = [SB instantiateViewControllerWithIdentifier:@"GIO_Native_View"];
    UINavigationController *nav = [[UINavigationController alloc] initWithRootViewController:nativeVC];
    [rootVC presentViewController:nav animated:YES completion:nil];
  });
}
@end
