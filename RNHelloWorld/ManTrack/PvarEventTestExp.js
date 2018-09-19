/**
 * 页面简介:本功能页面为以下两个函数的测试用例：
 * 1，setPeopleVariable
 * 2，setEvar
 * 页面效果为，列表展示所有内容。
 * 为了方便自动化测试，特从PvarEventTest优化而来
 * 作者：宋现锋 
 * 日期：2018-08-30
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    SectionList,
    NativeModules
} from 'react-native';
import { Text, View, Typography } from 'react-native-ui-lib'; 



export default class PvarEventTestExp extends Component {

    constructor(props) {
        super(props);
    }

    _renderItem = (data) => {
        return (
        <View style={{ height: 40, justifyContent: 'center', borderBottomColor: 'red' }}>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
                <TouchableOpacity onPress={this.clickItem.bind(this, data)}>
                    <Text style={styles.cell}>{data.item.name}</Text>
                </TouchableOpacity>
            </View>
        </View>);
    }

    _sectionComp = (info) => {
        var txt = info.section.name;
        return (
            <View style = { styles.ViewForTextStyle } >
                <Text style={{ fontSize: 20, borderLeftWidth: 5, color: 'white' }}>{txt}</Text>
                </View >
        );
    }

    render() {
        var sections = [
            {
                name: 'SetPPL测试', data: [
                    { key: 11, name: 'setPeopleVariable({"ekey":"evalue","Date":"2018-07-02"})' },
                    { key: 12, name: 'setPeopleVariable({"Name":"北京"}' },
                    { key: 13, name: 'setPeopleVariable({})' },
                    { key: 14, name: 'setPeopleVariable(null)' },
                    { key: 15, name: 'setPeopleVariable("Hello World")' },
                    { key: 16, name: 'setPeopleVariable({"关键字":"HelloWorld"})' }]
            },
            {
                name: 'setEvar测试', data: [
                    { key: 21, name: 'setEvar({"ekey":"evalue","Date":"2018-07 - 02"}' },
                    { key: 22, name: 'setEvar({"Name":"北京"}）' },
                    { key: 23, name: 'setEvar({})' },
                    { key: 24, name: 'setEvar(null)' },
                    { key: 25, name: 'setEvar("Hello World")' },
                    { key: 26, name: 'setEvar({"关键字":"HelloWorld"})' }]
            },
        ];

        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() => <View centerH>
                        <Text style={styles.title}>SetPPL测试</Text>
                    </View>}
                    ListFooterComponent={() => <View style={styles.ViewForTextStyle}><Text style={{ fontSize: 20, borderLeftWidth: 5, color: 'white' }}>End</Text></View>}
                />
            </View>
        );
    }

    //点击列表点击每一行
    clickItem(data) {
        switch (data.item.key) {
            case 11:
                console.log('setPeopleVariable({"ekey":"evalue","Date":"2018-07-02"})');
                NativeModules.GrowingIO.setPeopleVariable({ "ekey": "evalue", "Date": "2018-07-02" });
                break;
            case 12:
                console.log('setPeopleVariable({"Name":"北京"}');
                NativeModules.GrowingIO.setPeopleVariable({ "Name": "北京" });
                break;
            case 13:
                console.log("setPeopleVariable({})");
                NativeModules.GrowingIO.setPeopleVariable({});
                break;
            case 14:
                console.log("setPeopleVariable(null)");
                NativeModules.GrowingIO.setPeopleVariable(null);
                break;
            case 15:
                console.log('setPeopleVariable("Hello World")');
                NativeModules.GrowingIO.setPeopleVariable("Hello World");
                break;
            case 16:
                console.log('setPeopleVariable({"关键字":"HelloWorld"})');
                NativeModules.GrowingIO.setPeopleVariable({ "关键字": "HelloWorld" });
                break;
            case 21:
                console.log('setEvar({"ekey":"evalue","Date":"2018-07-02"})');
                NativeModules.GrowingIO.setEvar({ "ekey": "evalue", "Date": "2018-07-02" });
                break;
            case 22:
                console.log('setEvar({"Name":"北京"}）');
                NativeModules.GrowingIO.setEvar({ "Name": "北京" });
                break;
            case 23:
                console.log("setEvar({})");
                NativeModules.GrowingIO.setEvar({});
                break;
            case 24:
                console.log("setEvar(null)");
                NativeModules.GrowingIO.setEvar(null);
                break;
            case 25:
                console.log('setEvar("Hello World")');
                NativeModules.GrowingIO.setEvar("Hello World");
                break;
            case 26:
                console.log('setEvar({"关键字":"HelloWorld"})');
                NativeModules.GrowingIO.setEvar({ "关键字": "HelloWorld" });
                break;
            default:
                console.log("You Click other items");
                break;
        }
    }

}

//AppRegistry.registerComponent('App', () => HomeScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    ViewForTextStyle: {
        //alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        borderBottomColor: 'green',
        borderBottomWidth: 1,
        height: 40
    },
    cell: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        //backgroundColor: 'lightgray',
        fontSize: 18,
        borderLeftWidth: 10

    },
    title: {
        ...Typography.text40,
        alignItems: 'center',
        borderTopWidth: 18
    },
});