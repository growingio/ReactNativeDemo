import React from 'react';
import {
  Animated,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text, 
  TouchableHighlight,
  View,
} from 'react-native';
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from 'react-navigation';
import CustomTabs from './src/CustomTabs';
import CustomTabUI from './src/CustomTabUI';
import Drawer from './src/Drawer';
import ModalStack from './src/ModalStack';
import SimpleStack from './src/SimpleStack';
import SimpleTabs from './src/SimpleTabs';
import StacksInTabs from './src/StacksInTabs';
import StacksOverTabs from './src/StacksOverTabs';
import StacksOverTopTabs from './src/StacksOverTopTabs';
import StacksAndKeys from './src/StacksAndKeys';
import StackWithCustomHeaderBackImage from './src/StackWithCustomHeaderBackImage';
import StackWithHeaderPreset from './src/StackWithHeaderPreset';
import StackWithTranslucentHeader from './src/StackWithTranslucentHeader';
import SwitchWithStacks from './src/SwitchWithStacks';
import TabsInDrawer from './src/TabsInDrawer';
import PizzaTranslator from './src/GIOTestChng'

const ExampleInfo: any = {
  PizzaTranslator:{
    description: '测试输入框输入事件采集',
    name: 'GrowingIO chng 事件'
  },
  CustomTabUI: {
    description: 'GIO 兼容 ^3.11.0 react-navigation',
    name: '点击事件和页面浏览事件，元素展现事件采集测试',
  },
  CustomTabs: {
    description: 'GIO 测试埋点事件',
    name: '演示自定义事件和变量的调用',
  },
  CustomTransitioner: {
    description: 'Custom transitioner with stack router',
    name: 'Custom Transitioner',
  },
  Drawer: {
    description: 'Android-style drawer navigation',
    name: 'Drawer Example',
  },
  InactiveStack: {
    description:
        'An inactive route in a stack should be given the opportunity to handle actions',
    name: 'Navigate idempotently to stacks in inactive routes',
  },
  KeyboardHandlingExample: {
    description:
        'Demo automatic handling of keyboard showing/hiding inside StackNavigator',
    name: 'Keyboard Handling Example',
  },
  LinkStack: {
    description: 'Deep linking into a route in stack',
    name: 'Link in Stack',
  },
  LinkTabs: {
    description: 'Deep linking into a route in tab',
    name: 'Link to Settings Tab',
  },
  ModalStack: {
    description:
        Platform.OS === 'ios'
            ? 'Stack navigation with modals'
            : 'Dynamically showing and hiding the header',
    name:
        Platform.OS === 'ios'
            ? 'Modal Stack Example'
            : 'Stack with Dynamic Header',
  },
  SimpleStack: {
    description: 'A card stack',
    name: 'Stack Example',
  },
  SimpleTabs: {
    description: 'Tabs following platform conventions',
    name: 'Tabs Example',
  },
  StackWithCustomHeaderBackImage: {
    description: 'Stack with custom header back image',
    name: 'Custom header back image',
  },
  StackWithHeaderPreset: {
    description: 'Masked back button and sliding header items. iOS only.',
    name: 'UIKit-style Header Transitions',
  },
  StackWithTranslucentHeader: {
    description: 'Render arbitrary translucent content in header background.',
    name: 'Translucent Header',
  },
  StacksInTabs: {
    description: 'Nested stack navigation in tabs',
    name: 'Stacks in Tabs',
  },
  StacksOverTabs: {
    description: 'Nested stack navigation that pushes on top of tabs',
    name: 'Stacks over Tabs',
  },
  StacksOverTopTabs: {
    description: 'Tab navigator in stack with custom header heights',
    name: 'Stacks with non-standard header height',
  },
  StacksAndKeys: {
    description: 'Use keys to link between screens',
    name: 'Link in Stack with keys',
  },
  SwitchWithStacks: {
    description: 'Jump between routes',
    name: 'Switch between routes',
  },
  // MultipleDrawer: {
  //   description: 'Add any drawer you need',
  //   name: 'Multiple Drawer Example',
  // },
  TabsInDrawer: {
    description: 'A drawer combined with tabs',
    name: 'Drawer + Tabs Example',
  },
  TabsWithNavigationEvents: {
    description:
        'Declarative NavigationEvents component to subscribe to navigation events',
    name: 'NavigationEvents',
  },
  TabsWithNavigationFocus: {
    description: 'Receive the focus prop to know when a screen is focused',
    name: 'withNavigationFocus',
  },
};

const ExampleRoutes: any = {
  PizzaTranslator,
  CustomTabUI,
  CustomTabs,
  Drawer,
  ModalStack,
  SimpleStack,
  SimpleTabs,
  StackWithCustomHeaderBackImage,
  StackWithTranslucentHeader,
  StacksAndKeys,
  StacksOverTabs,
  SwitchWithStacks,
  StacksOverTopTabs,
  StacksInTabs,
  ...Platform.select({
    android: {},
    ios: {
      StackWithHeaderPreset,
    },
  }),
  TabsInDrawer,
  LinkStack: {
    screen: SimpleStack,
    path: 'people/Jordan',
  },
  LinkTabs: {
    screen: SimpleTabs,
    path: 'settings',
  },
};

interface State {
  scrollY: Animated.Value;
}

class MainScreen extends React.Component<any, State> {
  state = {
    scrollY: new Animated.Value(0),
  };

  render() {
    const { navigation } = this.props;

    const scale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0, 100],
      outputRange: [2, 1, 0.8],
    });

    const translateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0, 100],
      outputRange: [-150, 0, 40],
    });

    const opacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [1, 0],
    });

    const underlayOpacity = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [0, 50],
      outputRange: [0, 1],
    });

    const backgroundScale = this.state.scrollY.interpolate({
      extrapolate: 'clamp',
      inputRange: [-450, 0],
      outputRange: [3, 1],
    });

    const backgroundTranslateY = this.state.scrollY.interpolate({
      inputRange: [-450, 0],
      outputRange: [0, 0],
    });

    return (
        <View style={{ flex: 1 }}>
            <Animated.ScrollView
                style={{ flex: 1, backgroundColor: '#eee' }}
                scrollEventThrottle={1}
                onScroll={Animated.event(
                    [
                      {
                        nativeEvent: { contentOffset: { y: this.state.scrollY } },
                      },
                    ],
                    { useNativeDriver: true }
                )}
            >
              <Animated.View
                  style={[
                    styles.backgroundUnderlay,
                    {
                      transform: [
                        { scale: backgroundScale },
                        { translateY: backgroundTranslateY },
                      ],
                    },
                  ]}
              />
              <Animated.View
                  style={{ opacity, transform: [{ scale }, { translateY }] }}
              >
                <SafeAreaView
                    style={styles.bannerContainer}
                    forceInset={{ top: 'always', bottom: 'never' }}
                >
                  <View style={styles.banner}>
                    <Image
                        source={require('./src/assets/NavLogo.png')}
                        style={styles.bannerImage}
                    />
                    <Text style={styles.bannerTitle}>
                      GrowingIO Eamples
                    </Text>
                  </View>
                </SafeAreaView>
              </Animated.View>

              <SafeAreaView
                  forceInset={{ top: 'never', bottom: 'always' }}
                  style={{ backgroundColor: '#eee' }}
              >
                <View style={{ backgroundColor: '#fff' }}>
                  {Object.keys(ExampleRoutes).map((routeName: string) => (
                      <TouchableHighlight
                          key={routeName}
                          underlayColor="#ccc"
                          activeOpacity={0.3}
                          onPress={() => {
                            const route = ExampleRoutes[routeName];
                            if (route.screen || route.path || route.params) {
                              const { path, params, screen } = route;
                              const { router } = screen;
                              const action =
                                  path &&
                                  router.getActionForPathAndParams(path, params);
                              navigation.navigate(routeName, {}, action);
                            } else {
                              navigation.navigate(routeName);
                            }
                          }}
                      >
                        <View style={styles.item}>
                          <Text style={styles.title}>
                            {ExampleInfo[routeName].name}
                          </Text>
                          <Text style={styles.description}>
                            {ExampleInfo[routeName].description}
                          </Text>
                        </View>
                      </TouchableHighlight>
                  ))}
                </View>
              </SafeAreaView>
            </Animated.ScrollView>
          <StatusBar barStyle="light-content" />
          <Animated.View
              style={[styles.statusBarUnderlay, { opacity: underlayOpacity }]}
          />
        </View>
    );
  }
}

const AppNavigator = createAppContainer(
    createStackNavigator(
        {
          ...ExampleRoutes,
          Index: {
            screen: MainScreen,
          },
        },
        {
          headerMode: 'none',
          initialRouteName: 'Index',

          /*
           * Use modal on iOS because the card mode comes from the right,
           * which conflicts with the drawer example gesture
           */
          mode: Platform.OS === 'ios' ? 'modal' : 'card',
        }
    )
);

class TestScreen extends React.Component<any, any>{
  render() {
    return <AppNavigator />;
  }
}

export default class App extends React.Component {
  render() {
    return <TestScreen /* persistenceKey="if-you-want-it" */ />;
  }
}

const styles = StyleSheet.create({
  backgroundUnderlay: {
    backgroundColor: '#673ab7',
    height: 300,
    left: 0,
    position: 'absolute',
    right: 0,
    top: -100,
  },
  banner: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
  },
  bannerContainer: {
    // backgroundColor: '#673ab7',
    alignItems: 'center',
  },
  bannerImage: {
    height: 36,
    margin: 8,
    resizeMode: 'contain',
    tintColor: '#fff',
    width: 36,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '200',
    marginRight: 5,
    marginVertical: 8,
  },
  description: {
    color: '#999',
    fontSize: 13,
  },
  image: {
    alignSelf: 'center',
    height: 120,
    marginBottom: 20,
    resizeMode: 'contain',
    width: 120,
  },
  item: {
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  statusBarUnderlay: {
    backgroundColor: '#673ab7',
    height: 20,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    color: '#444',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
