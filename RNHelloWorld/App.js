/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//测试导航
import React, { Component } from 'react';
import CstmEventTest from "./ManTrack/CstmEventTest"

import MainUI from "./UIElementsTest/MainUI"

//import UserEventTest from "./ManTrack/UserEventTest"
import UserEventTestExp from "./ManTrack/UserEventTestExp"
//import PvarEventTest from "./ManTrack/PvarEventTest"
import PvarEventTestExp from "./ManTrack/PvarEventTestExp"

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
//导入react-native-tab-navigator方式：
//cmd项目路径下执行npm install react-native-tab-navigator --save
import TabNavigator from 'react-native-tab-navigator'
export default class Tabnavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Event'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
            //设置选中的位置
            selected={this.state.selectedTab === 'Event'}
            //标题
            title="Cstm事件"
            //标题样式
            titleStyle={styles.tabText}
            //选中时标题文字样式
            selectedTitleStyle={styles.selectedTabText}
            //图标
            renderIcon={() => <Image style={styles.icon} source={require("./img/bugs.png")} />}
            //选中时图标
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={require("./img/bugs.png")} />}
            //点击Event
            onPress={() => this.setState({ selectedTab: 'Event' })}>
            {/* <View style={styles.page0}>
              <Text style={{ fontSize: 18, padding: 15, color: 'blue' }}>This is Event Page</Text>
            </View> */}
            <CstmEventTest />
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Log'}
            title="PPL事件"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("./img/API.png")} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={require("./img/API.png")} />}
            onPress={() => this.setState({ selectedTab: 'Log' })}>
            {/* <View style={styles.page0}>
              <Text style={{ fontSize: 18, padding: 15, color: 'blue' }}>This is Log Page</Text>
            </View> */}
            {/* <PvarEventTest /> */}
            <PvarEventTestExp/>

          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'Device'}
            title="UserEvent"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("./img/agree.png")} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={require("./img/agree.png")} />}
            onPress={() => this.setState({ selectedTab: 'Device' })}>
            {/* <View style={styles.page1}>
              <Text style={{ fontSize: 18, padding: 15, color: '#fff' }}>This is Device Page</Text>
            </View> */}
            {/* <UserEventTest /> */}
            <UserEventTestExp/>

          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'User'}
            title="简单控件"
            titleStyle={styles.tabText}
            selectedTitleStyle={styles.selectedTabText}
            renderIcon={() => <Image style={styles.icon} source={require("./img/fire.png")} />}
            renderSelectedIcon={() => <Image style={[styles.icon, { tintColor: 'red' }]} source={require("./img/fire.png")} />}
            onPress={() => this.setState({ selectedTab: 'User' })}>
            {/* <View style={styles.page1}>
              <Text style={{ fontSize: 18, padding: 15, color: '#fff' }}>This is User Page</Text>
            </View> */}
            <MainUI />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
  //获取Promise对象处理

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  tabText: {
    fontSize: 10,
    color: 'black'
  },
  selectedTabText: {
    fontSize: 10,
    color: 'red'
  },
  icon: {
    width: 22,
    height: 22
  },
  page0: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  page1: {
    flex: 1,
    backgroundColor: 'blue'
  }
});

// AppRegistry.registerComponent('Tabnavigator', () => Tabnavigator);