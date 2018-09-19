//
//  GrowingAutoTrackKit.h
//  GrowingAutoTrackKit
//
//  Created by GrowingIO on 2018/5/14.
//  Copyright © 2018年 GrowingIO. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <GrowingCoreKit/GrowingCoreKit.h>

#ifndef __cplusplus
@import Foundation;
@import WebKit;
#endif

@interface Growing (AutoTrackKit)

// SDK版本号
+ (NSString*)autoTrackKitVersion;

// 设置数据后台服务器地址
+ (void)setHybridJSSDKUrlPrefix:(NSString*)urlPrefix;

// 设置为 NO，可以不采集任何关于 UIWebView / WKWebView 的统计信息
+ (void)enableAllWebViews:(BOOL)enable;
// 设置为 YES, 将启用 HashTag
+ (void)enableHybridHashTag:(BOOL)enable;
// 是否开启了trackingWebView选项
+ (BOOL)isTrackingWebView;

// 设置是否发送元素的展现次数（浏览量、曝光量）
+ (void)setImp:(BOOL)imp;

/// !!!: V2.0埋点相关API，请在主线程里调用.
/**
 设置页面级变量
 
 @param variable ：页面级变量, 变量不能为nil
 @param viewController ： 目标 UIViewController
 */
+ (void)setPageVariable:(NSDictionary<NSString *, NSObject *> *)variable
       toViewController:(UIViewController *)viewController;
/**
 页面级变量
 
 @param key : 变量名称, 变量名称不能为nil或者""
 @param stringValue : 字符串变量, 变量不能为nil或者""
 @param viewController : 目标 UIViewController
 */
+ (void)setPageVariableWithKey:(NSString *)key
                andStringValue:(NSString *)stringValue
              toViewController:(UIViewController *)viewController;
/**
 页面级变量
 
 @param key : 变量名称, 变量名称不能为nil或者""
 @param numberValue : 数值类型变量, 变量不能为nil
 @param viewController : 目标 UIViewController
 */
+ (void)setPageVariableWithKey:(NSString *)key
                andNumberValue:(NSNumber *)numberValue
              toViewController:(UIViewController *)viewController;

// 以下方法将来有可能会废弃, 请谨慎使用
+ (void)setAppVariable:(NSDictionary<NSString *, NSObject *> *)variable;
+ (void)setAppVariableWithKey:(NSString *)key andStringValue:(NSString *)stringValue;
+ (void)setAppVariableWithKey:(NSString *)key andNumberValue:(NSNumber *)numberValue;
@end

// 该属性setter方法均使用 objc_setAssociatedObject实现
// 如果是自定义的View建议优先使用重写getter方法来实现 以提高性能
@interface UIView(GrowingAttributes)

// 手动标识该view不要追踪，请在该view被初始化后立刻赋值
@property (nonatomic, assign) BOOL      growingAttributesDonotTrack;

// 手动标识该view不要追踪它的值，默认是NO，特别的UITextView，UITextField，UISearchBar默认是YES
@property (nonatomic, assign) BOOL      growingAttributesDonotTrackValue;

// 手动标识该view的取值  比如banner广告条的id 可以放在banner按钮的任意view上
@property (nonatomic, copy)   NSString* growingAttributesValue;

// 手动标识SDCycleScrollView组件的bannerIds  如若使用,请在创建SDCycleScrollView实例对象后,立即赋值;(如果不进行手动设置,SDK默认会采集banner的imageName或者imageURL)
@property (nonatomic, strong) NSArray<NSString *>
* growingSDCycleBannerIds;

// 手动标识该view的附加属性  该值可被子节点继承
@property (nonatomic, copy)   NSString* growingAttributesInfo;

// 手动标识该view的tag
// 这个tag必须是全局唯一的，在代码结构改变时也请保持不变
// 这个tag最好是常量，不要包含流水id、SKU-id、商品名称等易变的信息
// 请不要轻易设置这个属性，除非该view在view-tree里的位置不稳定，或者该view在软件的不同版本的view-tree里的位置不一致
@property (nonatomic, copy)   NSString* growingAttributesUniqueTag;

@end

// 该属性setter方法均使用 objc_setAssociatedObject实现
// 如果是自定义的UIViewController不要使用重写getter方法来实现,因为SDK在set方法内部有逻辑处理
@interface UIViewController(GrowingAttributes)

// 手动标识该vc的附加属性  该值可被子节点继承
@property (nonatomic, copy)   NSString* growingAttributesInfo;

// 手动标识该页面的标题，必须在该UIViewController显示之前设置
@property (nonatomic, copy)   NSString* growingAttributesPageName;

@end

