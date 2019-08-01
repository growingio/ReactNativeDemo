import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, NativeModules } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import {
  createNavigator,
  NavigationState,
  SafeAreaView,
  TabRouter,
} from 'react-navigation';
import { createAppContainer } from 'react-navigation';
import { NavigationScreenProp } from 'react-navigation';
import { Button } from './commonComponents/ButtonWithMargin';
import SampleText from './SampleText';

const MyNavScreen = ({
  navigation,
  banner,
}: {
  navigation: NavigationScreenProp<NavigationState>;
  banner: string;
}) => (
  <ScrollView>
    <SafeAreaView forceInset={{ horizontal: 'always' }}>
      <SampleText>{banner}</SampleText>
      <Button
        onPress={() => {
          NativeModules.GrowingIO.track('testEventId', {'卖家Id': 'xxxxxx', '地点': '北京'});
        }}
        title="GIO 自定义事件 track"
      />
      <Button
        onPress={() => {
          NativeModules.GrowingIO.setEvar({ "registered": true, "fee": "200" });
        }}
        title="GIO 设置转化变量 setEvar"
      />
      <Button
        onPress={() => {
          NativeModules.GrowingIO.setPeopleVariable({ "name": "Danny", "Age": 20 });
        }}
        title="GIO 设置用户变量 setPeopleVariable"
      />
      <Button
        onPress={() => {
          //setUserId 设置登录用户名称
          NativeModules.GrowingIO.setUserId("Gioer");
        }}
        title="GIO 设置登录用户名称 setUserId"
      />

      <Button
        onPress={() => {
         //clearUserId 清除登录用户名称
        NativeModules.GrowingIO.clearUserId();
        }}
        title="GIO 清除登录用户名称 clearUserId"
      />

      <Button
        onPress={() => {
          //setVisitor 设置访问用户变量
          NativeModules.GrowingIO.setVisitor({ "age": 20, "gender": "male" });
        }}
        title="GIO 设置访问用户变量 setVisitor"
      />

    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
);

const MyHomeScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<NavigationState>;
}) => <MyNavScreen banner="Home Screen" navigation={navigation} />;

const MyNotificationsScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<NavigationState>;
}) => <MyNavScreen banner="Notifications Screen" navigation={navigation} />;

const MySettingsScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<NavigationState>;
}) => <MyNavScreen banner="Settings Screen" navigation={navigation} />;

const CustomTabBar = ({
  navigation,
}: {
  navigation: NavigationScreenProp<NavigationState>;
}) => {
  const { routes } = navigation.state;
  return (
    <SafeAreaView style={styles.tabContainer}>
      {routes.map(route => (
        <BorderlessButton
          onPress={() => navigation.navigate(route.routeName)}
          style={styles.tab}
          key={route.routeName}
        >
          <Text>{route.routeName}</Text>
        </BorderlessButton>
      ))}
    </SafeAreaView>
  );
};

// @todo - how does the type definition for a custom navigator work?
class CustomTabView extends React.Component<any> {
  render() {
    const { navigation, descriptors } = this.props;
    const { routes, index } = navigation.state;
    const descriptor = descriptors[routes[index].key];
    const ActiveScreen = descriptor.getComponent();
    return (
      <SafeAreaView forceInset={{ top: 'always' }}>
        <CustomTabBar navigation={navigation} />
        <ActiveScreen navigation={descriptor.navigation} />
      </SafeAreaView>
    );
  }
}

const CustomTabRouter = TabRouter(
  {
    Home: {
      path: '',
      screen: MyHomeScreen,
    },
    Notifications: {
      path: 'notifications',
      screen: MyNotificationsScreen,
    },
    Settings: {
      path: 'settings',
      screen: MySettingsScreen,
    },
  },
  {
    // Change this to start on a different tab
    initialRouteName: 'Home',
  }
);

const CustomTabs = createAppContainer(
  createNavigator(CustomTabView, CustomTabRouter, {})
);

const styles = StyleSheet.create({
  tab: {
    alignItems: 'center',
    borderColor: '#ddd',
    borderRadius: 4,
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    margin: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    height: 48,
  },
});

export default CustomTabs;
