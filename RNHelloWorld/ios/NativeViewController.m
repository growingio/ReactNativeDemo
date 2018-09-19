//
//  NativeViewController.m
//  RNHelloWorld
//
//  Created by GrowingIO on 2018/8/9.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "NativeViewController.h"

@interface NativeViewController ()

@end

@implementation NativeViewController

- (void)viewDidLoad {
  [super viewDidLoad];
  self.view.backgroundColor = [UIColor lightGrayColor];
  // Do any additional setup after loading the view.
  self.navigationItem.leftBarButtonItem = [[UIBarButtonItem alloc] initWithTitle:@"back" style:UIBarButtonItemStylePlain target:self action:@selector(onClickBackButton)];
  UIImage *image=[UIImage imageNamed:@"test.jpg"];
  [self.ImgShow setImage:image];
  
  
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

- (IBAction)GetMsg:(id)sender {
  NSString *uName=self.UserName.text;
  NSString *uPsd=self.UserPsd.text;
  if ([uName isEqualToString:@"admin"] && [uPsd isEqualToString:@"admin"])
  {
    NSLog(@"Welcome %@ ,You had login sucessful!",uName);
  }
  else
  {
    NSLog(@"Sorry,You had wrong name or password,please try again!");
  }
}


- (void)onClickBackButton {
  [self dismissViewControllerAnimated:YES completion:nil];
}



@end
