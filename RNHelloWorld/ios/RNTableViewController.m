//
//  RNTableViewController.m
//  RNHelloWorld
//
//  Created by GrowingIO on 2018/8/10.
//  Copyright © 2018年 Facebook. All rights reserved.
//

#import "RNTableViewController.h"


@interface RNTableViewController ()<UITableViewDataSource, UITableViewDelegate>

@end

@implementation RNTableViewController{
  UITableView *_tableView;
}

- (void)viewDidLoad {
  [super viewDidLoad];
  // Do any additional setup after loading the view.
  self.title = @"TableView";
  self.view.backgroundColor = [UIColor whiteColor];
  
  _tableView = [[UITableView alloc] initWithFrame:self.view.bounds style:UITableViewStylePlain];
  _tableView.dataSource = self;
  _tableView.delegate = self;
  
  [self.view addSubview:_tableView];
  
}

- (void)didReceiveMemoryWarning {
  [super didReceiveMemoryWarning];
  // Dispose of any resources that can be recreated.
}

#pragma mark - DataSource

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
  return 20;
}

#pragma mark - Delegate

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
  UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"cell"];
  if (!cell) {
    cell = [[UITableViewCell alloc] initWithStyle:UITableViewCellStyleDefault reuseIdentifier:@"cell"];
  }
  
  cell.textLabel.text = [@"Native Cell" stringByAppendingFormat:@" - %@", @(indexPath.row)];
  
  return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
  [tableView deselectRowAtIndexPath:indexPath animated:YES];
}


@end
