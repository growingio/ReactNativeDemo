/**
 * 页面简介:本功能页面为以下两个函数的测试用例：
 * 1，setVisitor
 * 2，setUserId
 * 3,clearUserId
 * 页面效果为，单击列表标题，展开标题内容。
 * 由于不方便后期自动化测试，暂时不使用此效果，页面代码保留：
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
// 初始化总数据
var AllArr = [
    {
        name: 'setVisitor测试', opers: [
            { key: 11, name: 'setVisitor({"ekey":"evalue","Date":"2018-07-02"})' },
            { key: 12, name: 'setVisitor({"Name":"北京"}' },
            { key: 13, name: 'setVisitor({})' }, 
            { key: 14, name: 'setVisitor(null)' }, 
            { key: 15, name: 'setVisitor("Hello World")' },
            { key: 16, name: 'setVisitor({"关键字":"HelloWorld"})' }]
    },
    {
        name: 'setUserId测试', opers: [
            { key: 21, name: 'setUserId("QATester")' },
            { key: 22, name: 'setUserId(10084)' },
            { key: 23, name: 'setUserId("!@$!#$@!$~")' },
            { key: 24, name: 'setUserId(null)' }]
    },
    {
        name:"clearUserId测试",opers:[
            { key: 31, name:'clearUserId'}
        ]
    }

];

export default class UserEventTest extends Component {
    // static navigationOptions = ({ navigation, screenProps }) => ({
    //     headerTitle: `${navigation.state.params.login_title}`,
    // });
    static navigationOptions = {
        title: "用户变量测试",
    };

    constructor(props) {
        super(props);
        this.state = {
            //改变数据的数组
            Arr: [
                {
                    name: 'setVisitor测试', opers: [
                        { key: 11, name: 'setVisitor({"ekey":"evalue","Date":"2018-07-02"})' },
                        { key: 12, name: 'setVisitor({"Name":"北京"}' },
                        { key: 13, name: 'setVisitor({})' },
                        { key: 14, name: 'setVisitor(null)' },
                        { key: 15, name: 'setVisitor("Hello World")' },
                        { key: 16, name: 'setVisitor({"关键字":"HelloWorld"})' }]
                },
                {
                    name: 'setUserId测试', opers: [
                        { key: 21, name: 'setUserId("QATester")' },
                        { key: 22, name: 'setUserId(10084)' },
                        { key: 23, name: 'setUserId("!@$!#$@!$~")' },
                        { key: 24, name: 'setUserId(null)' }]
                },
                {
                    name: "clearUserId测试", opers: [
                        { key: 31, name: 'clearUserId' }
                    ]
                }

            ]
        };
        //for循环添加字段删除字段添加标示和key
        for (var i = 0; i < this.state.Arr.length; i++) {
            this.state.Arr[i]['data'] = [];
            this.state.Arr[i]['key'] = i;
            this.state.Arr[i]['isShow'] = 'off';
            delete this.state.Arr[i]['opers'];

        }
    }

    //分组创建的cell
    Cell(data) {
        return (
            <View style={{ height: 40, justifyContent: 'center', borderBottomColor: 'red' }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#ececec' }}>
                    <TouchableOpacity onPress={this.clickItem.bind(this, data)}>
                        <Text style={styles.cell}>{data.item.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    // 展开改变数据源，增加数据，合上删除数组里的数据，根据isShow状态判断
    show(data) {
        if (data.isShow === 'off') {
            this.state.Arr[data.key]['data'] = AllArr[data.key].opers;
            this.state.Arr[data.key]['isShow'] = 'on';
            this.setState({
                Arr: this.state.Arr,
            });
        } else {
            this.state.Arr[data.key]['data'] = [];
            this.state.Arr[data.key]['isShow'] = 'off';
            this.setState({
                Arr: this.state.Arr,
            });
        }

    }
    //列表分组的header
    Header({ section }) {
        return (
            <TouchableOpacity onPress={() => { this.show(section) }}>
                <View style={styles.ViewForTextStyle}>
                    <Text style={{ fontSize: 20, borderLeftWidth: 5, color: 'white' }}>{section.name}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    //去除警告
    extraUniqueKey(item, index) {
        return index + item;
    }
    render() {
        return (
            <View >
                <View centerH>
                    <Text style={styles.title}>用户变量测试</Text>
                </View>
                <SectionList
                    sections={this.state.Arr}//数据源
                    renderItem={this.Cell.bind(this)}//cell绑定时间创建cell
                    keyExtractor={this.extraUniqueKey}//去除警告
                    renderSectionHeader={this.Header.bind(this)}//Header绑定时间创建表头
                    scrollEnabled={true}//默认是true，false禁止滚动
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                //SectionSeparatorComponent={() => <View style={{ height: 2,backgroundColor: 'grey' }} />}
                >
                </SectionList>
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