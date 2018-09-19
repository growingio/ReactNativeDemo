/**
 * 页面简介:本功能页面为以下两个函数的测试用例：
 * 1,setVisitor
 * 2，setUserId
 * 3,clearUserId
 * 页面效果为，列表展示所有内容。
 * 为了方便自动化测试，特从UserEventTest优化而来
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



export default class UserEventTestExp extends Component {

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
            <View style={styles.ViewForTextStyle} >
                <Text style={{ fontSize: 20, borderLeftWidth: 5, color: 'white' }}>{txt}</Text>
            </View >
        );
    }

    render() {
        var sections = [
            {
                name: 'setVisitor测试', data: [
                    { key: 11, name: 'setVisitor({"ekey":"evalue","Date":"2018-07-02"})' },
                    { key: 12, name: 'setVisitor({"Name":"北京"}' },
                    { key: 13, name: 'setVisitor({})' },
                    { key: 14, name: 'setVisitor(null)' },
                    { key: 15, name: 'setVisitor("Hello World")' },
                    { key: 16, name: 'setVisitor({"关键字":"HelloWorld"})' }]
            },
            {
                name: 'setUserId测试', data: [
                    { key: 21, name: 'setUserId("QATester")' },
                    { key: 22, name: 'setUserId(10084)' },
                    { key: 23, name: 'setUserId("!@$!#$@!$~")' },
                    { key: 24, name: 'setUserId(null)' }]
            },
            {
                name: "clearUserId测试", data: [
                    { key: 31, name: 'clearUserId' },
                    { key: 32, name: '' },
                    { key: 33, name: '' },
                    { key: 34, name: '' }
                ]
            }
        ];

        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListHeaderComponent={() => <View centerH>
                        <Text style={styles.title}>用户变量测试</Text>
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
                console.log('setVisitor({"ekey":"evalue","Date":"2018-07-02"})');
                NativeModules.GrowingIO.setVisitor({ "ekey": "evalue", "Date": "2018-07-02" });
                break;
            case 12:
                console.log('setVisitor({"Name":"北京"}');
                NativeModules.GrowingIO.setVisitor({ "Name": "北京" });
                break;
            case 13:
                console.log("setVisitor({})");
                NativeModules.GrowingIO.setPeopleVariable({});
                break;
            case 14:
                console.log("setVisitor(null)");
                NativeModules.GrowingIO.setVisitor(null);
                break;
            case 15:
                console.log('setVisitor("Hello World")');
                NativeModules.GrowingIO.setVisitor("Hello World");
                break;
            case 16:
                console.log('setVisitor({"关键字":"HelloWorld"})');
                NativeModules.GrowingIO.setVisitor({ "关键字": "HelloWorld" });
                break;
            case 21:
                console.log('setUserId("QATester")');
                NativeModules.GrowingIO.setUserId("QATester");
                break;
            case 22:
                console.log('setUserId(10084)');
                NativeModules.GrowingIO.setUserId("10084");
                break;
            case 23:
                console.log('setUserId("!@$!#$@!$~")');
                NativeModules.GrowingIO.setUserId("!@$!#$@!$~");
                break;
            case 24:
                console.log('setUserId(null)');
                NativeModules.GrowingIO.setUserId(null);
                break;
            case 31:
                console.log('clearUserId');
                NativeModules.GrowingIO.clearUserId();
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