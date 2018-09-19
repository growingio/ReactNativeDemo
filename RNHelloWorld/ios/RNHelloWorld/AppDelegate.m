/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import "Growing.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"RNHelloWorld"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  
  //添加控制RN返回VC的代码
  _navController=[[UINavigationController alloc] initWithRootViewController:rootViewController];
  _navController.navigationBarHidden=YES;
  
  self.window.rootViewController = _navController;
  [self.window makeKeyAndVisible];
  
  //URL scheme
  [Growing startWithAccountId:@"0a1b4118dd954ec3bcc69da5138bdb96"];
  //开启日志输出
  [Growing setEnableLog:YES];
  //[Growing setEnableLog:NO];
  
//  //弹出圈选按钮
//  id drag = NSClassFromString(@"GrowingLocalCircleWindow");
//  [drag performSelector:@selector(startCircle)];
//  
  return YES;
}


- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  if ([Growing handleUrl:url])
  {
    return YES;
  }
  return NO;
}

@end
