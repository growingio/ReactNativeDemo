import React, {Component } from 'react';
import {
    AppRegistry
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';

import MenuItems from "./MenuItems"
import MenuItemsExp from "./MenuItemsExp"
import Login from "./Login"
import Buttons from "./Buttons"
import TextInputs from "./TextInputs"
import ListViewOper from "./ListViewOper"
import ScrollViewTest from "./ScrollViewTest"
import PickerTest from "./PickerTest"
import TextTest from "./TextTest"
import WebViewTest from "./WebViewTest"

export default class MainUI extends Component {
   constructor(props){
       super(props);
   }
   render(){
       return (
           <SimpleAppNavigator/>
       )
   } 

   

}
const SimpleAppNavigator=StackNavigator({
    MenuItemsExp: { screen: MenuItemsExp},
    //MenuItems: { screen: MenuItems},
    Login: { screen: Login},
    Buttons: { screen: Buttons},
    TextInputs:{ screen: TextInputs},
    ListViewOper: { screen: ListViewOper},
    ScrollViewTest: { screen: ScrollViewTest},
    PickerTest: {screen:PickerTest},
    TextTest: { screen: TextTest},
    WebViewTest: { screen: WebViewTest}

},
{
    //initialRouteName:'MenuItems',
    initialRouteName: 'MenuItemsExp',
})