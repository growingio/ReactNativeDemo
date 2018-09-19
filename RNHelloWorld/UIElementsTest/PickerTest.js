/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

// const React = require('react');
// const ReactNative = require('react-native');
// const StyleSheet = require('StyleSheet');
// const RNTesterBlock = require('RNTesterBlock');
// const RNTesterPage = require('RNTesterPage');

import React, { Component } from 'react';
import { View, StyleSheet,Picker,Text} from 'react-native';
import RNTesterBlock from "./RNTesterBlock"
import RNTesterPage from "./RNTesterPage"

const Item = Picker.Item;

export default class PickerTest extends Component {
    static title = 'Picker 控件';
    static description =
        'Provides multiple options to choose from, using either a dropdown menu or a dialog.';

    state = {
        selected1: 'key1',
        selected2: 'key1',
        selected3: 'key1',
        color: 'red',
        mode: Picker.MODE_DIALOG,
    };

    render() {
        return (
            <RNTesterPage title='Picker 控件'>
                <RNTesterBlock title="Basic Picker">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this, 'selected1')}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                        <Item label="good" value="key2" />
                        <Item label="better" value="key3" />
                        <Item label="best" value="key4" />
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Disabled picker">
                    <Picker
                        style={styles.picker}
                        enabled={false}
                        selectedValue={this.state.selected1}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                        <Item label="good" value="key2" />
                        <Item label="better" value="key3" />
                        <Item label="best" value="key4" />
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Dropdown Picker">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected2}
                        onValueChange={this.onValueChange.bind(this, 'selected2')}
                        mode="dropdown">
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Picker with prompt message">
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.selected3}
                        onValueChange={this.onValueChange.bind(this, 'selected3')}
                        prompt="Pick one, just one">
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                    </Picker>
                </RNTesterBlock>
                <RNTesterBlock title="Picker with no listener">
                    <Picker style={styles.picker}>
                        <Item label="hello" value="key0" />
                        <Item label="world" value="key1" />
                        <Item label="good" value="key2" />
                        <Item label="better" value="key3" />
                        <Item label="best" value="key4" />
                    </Picker>
                    <Text>
                        Cannot change the value of this picker because it doesn't update
                        selectedValue.
                    </Text>
                </RNTesterBlock>
                <RNTesterBlock title="Colorful pickers">
                    <Picker
                        style={[styles.picker, { color: 'white', backgroundColor: this.state.color }]}
                        selectedValue={this.state.color}
                        onValueChange={this.onValueChange.bind(this, 'color')}
                        mode="dropdown">
                        <Item label="red" color="white" value="red" />
                        <Item label="green" color="white" value="green" />
                        <Item label="blue" color="white" value="blue" />
                        <Item label="orange" color="white" value="orange" />
                        <Item label="black" color="white" value="black" />
                    </Picker>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.color}
                        onValueChange={this.onValueChange.bind(this, 'color')}
                        mode="dialog">
                        <Item label="red" color="red" value="red" />
                        <Item label="green" color="green" value="green" />
                        <Item label="blue" color="blue" value="blue" />
                        <Item label="orange" color="orange" value="orange" />
                        <Item label="black" color="black" value="black" />
                    </Picker>
                </RNTesterBlock>
            </RNTesterPage>
        );
    }

    changeMode = () => {
        const newMode =
            this.state.mode === Picker.MODE_DIALOG
                ? Picker.MODE_DROPDOWN
                : Picker.MODE_DIALOG;
        this.setState({ mode: newMode });
    };

    onValueChange = (key: string, value: string) => {
        const newState = {};
        newState[key] = value;
        this.setState(newState);
    };
}

var styles = StyleSheet.create({
    picker: {
        width: 100,
    },
});

