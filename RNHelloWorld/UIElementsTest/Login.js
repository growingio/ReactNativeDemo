import React, { Component } from 'react';
import { View, TextInput, Text, Button } from 'react-native-ui-lib';

var { NativeModules } = require('react-native');
var RNBridgeModule = NativeModules.RNBridgeModule;
const ButtonSpace = 20;

export default class Login extends Component {
    static navigationOptions = {
        title: 'Login',
    };
    render() {
        //const { navigate } = this.props.navigation;
        //const { params } = this.props.navigation.state;
        return(
        <View flex paddingH-25 paddingT-120>
            <Text blue50 text20>Welcome</Text>
            <TextInput text50 placeholder="username" dark10 />
            <TextInput text50 placeholder="password" secureTextEntry dark10 />
            <View marginT-100 center>
                <Button text70 white background-orange30 label="Login" />
                <Button link text70 orange30 label="Sign Up" marginT-20 />
            </View>
            <Button
                backgroundColor="#30B650"
                label="RN打开VC"
                labelStyle={{ fontWeight: '600' }}
                style={{ marginBottom: ButtonSpace, marginTop: ButtonSpace}}
                enableShadow
                ref={element => (this.button_1 = element)}
                onPress={() => RNBridgeModule.openNativeVC()}
            />
          
        </View>
        );
    }
}
