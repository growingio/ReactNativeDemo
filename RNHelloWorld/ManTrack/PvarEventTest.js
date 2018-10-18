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
        name: 'SetPPL测试', opers: [{ key: 11, name: 'setPeopleVariable({"ekey":"evalue","Date":"2018-07-02"})' }, { key: 12, name: 'setPeopleVariable({"Name":"北京"}' },
        { key: 13, name: 'setPeopleVariable({})' }, { key: 14, name: 'setPeopleVariable(null)' }, { key: 15, name: 'setPeopleVariable("Hello World")' }, { key: 16, name: 'setPeopleVariable({"关键字":"HelloWorld"})' }]
    },
    {
        name: 'setEvar测试', opers: [{ key: 21, name: 'setEvar({"ekey":"evalue","Date":"2018-07 - 02"}' },
        { key: 22, name: 'setEvar({"Name":"北京"}）' }, { key: 23, name: 'setEvar({})' }, { key: 24, name: 'setEvar(null)' }, { key: 25, name: 'setEvar("Hello World")' }, { key: 26, name: 'setEvar({"关键字":"HelloWorld"})' }]
    },

];

export default class PvarEventTest extends Component {
    // static navigationOptions = ({ navigation, screenProps }) => ({
    //     headerTitle: `${navigation.state.params.login_title}`,
    // });
    static navigationOptions = {
        title: "SetPPL测试",
    };

    constructor(props) {
        super(props);
        this.state = {
            //改变数据的数组
            Arr: [
                {
                    name: 'SetPPL测试', opers: [
                        { key: 11, name: 'setPeopleVariable({"ekey":"evalue","Date":"2018-07-02"})' },
                        { key: 12,name: 'setPeopleVariable({"Name":"北京"}' },
                        { key: 13, name: 'setPeopleVariable({})' }, 
                        { key: 14, name: 'setPeopleVariable(null)' }, 
                        { key: 15, name: 'setPeopleVariable("Hello World")' },
                        { key: 16, name: 'setPeopleVariable({"关键字":"HelloWorld"})' }]
                },
                {
                    name: 'SetEvar测试', opers: [
                        { key: 21, name: 'setEvar({"ekey":"evalue","Date":"2018-07-02"})' }, 
                        { key: 22, name: 'setEvar({"Name":"北京"}）' },
                        { key: 23, name: 'setEvar({})' },
                        { key: 24, name: 'setEvar(null)' },
                        { key: 25, name: 'setEvar("Hello World")' },
                        { key: 26, name:'setEvar({"关键字":"HelloWorld"})'}]
                 },
    
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
            <View style={{ height: 60, justifyContent: 'center', borderBottomColor: 'red'}}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#ececec'}}>
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
                    <Text style={{ fontSize: 20, paddingLeft:5,color:'white'}}>{section.name}</Text>
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
                    <Text style={styles.title}>SetPPL测试</Text>
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
                console.log('setPeopleVariable({"ekey":"evalue","Date":"2018-07-02"})');
                NativeModules.GrowingIO.setPeopleVariable({ "ekey": "evalue", "Date": "2018-07-02" });
                break;
            case 12:
                console.log('setPeopleVariable({"Name":"北京"}');
                NativeModules.GrowingIO.setPeopleVariable({"Name":"北京"});
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
                NativeModules.GrowingIO.setPeopleVariable({"关键字": "HelloWorld"});
                break;
            case 21:
                console.log('setEvar({"ekey":"evalue","Date":"2018-07-02"})' );
                NativeModules.GrowingIO.setEvar({ "ekey": "evalue", "Date": "2018-07-02" });
                break;
            case 22:
                console.log('setEvar({"Name":"北京"}）');
                NativeModules.GrowingIO.setEvar({"Name":"北京"});
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
                NativeModules.GrowingIO.setEvar({"关键字":"HelloWorld"});
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
        borderBottomColor:'green',
        height: 60
    },
    cell: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        //backgroundColor: 'lightgray',
        fontSize: 18,
        paddingLeft:10

    },
    title: {
        ...Typography.text40,
        alignItems: 'center',
    },
});