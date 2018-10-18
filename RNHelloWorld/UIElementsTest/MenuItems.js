import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SectionList,
    NativeModules
} from 'react-native';

// 初始化总数据
var AllArr = [
    {
        name: 'SimpleUI', UIItems: [
            { key: 11, name: 'Login' },
            { key: 12, name: 'Buttons' }, 
            { key: 13, name: 'InputText' },
            { key: 14, name:"TextTest"}]
    },
    {
        name: 'ComplexUI', UIItems: [
        { key: 21, name: 'ListView' },
        { key: 22, name: "ScrollViewTest" }, 
        { key: 23, name:"PickerTest"},
        { key: 24, name:"WebViewTest"}
    ]
    },
    {
        name:'Android原生页面',UIItems:[
            {key:31,name:'WebView'},
            {key:36,name:'WebViewTrack'},
            {key:32,name:'X5WebView'},
            {key:33,name:'RNWebView'},
            {key:34,name:'MyActivity'},
            {key:35,name:'MyActivityContainsFragment'},
        ]
    }

];

export default class MenuItems extends Component {
    static navigationOptions={
        title:"UI控件",
    };


    constructor(props) {
        super(props);
        this.state = {
            //改变数据的数组
            Arr: [
                {
                    name: 'SimpleUI', UIItems: [
                        { key: 11, name: 'Login' }, 
                        { key: 12, name: 'Buttons' },
                        { key: 13, name: 'InputText' },
                        { key: 14, name: "TextTest" }]
                },
                {
                    name: 'ComplexUI', UIItems: [
                        { key: 21, name: 'ListView' }, 
                        { key: 22, name: "ScrollViewTest" },
                        { key: 23, name: "PickerTest" },
                        { key: 24, name: "WebViewTest" }
                    ]
                },
                {       
                    name:'Android原生页面',UIItems:[
                        {key:31,name:'WebView'},
                        {key:32,name:'X5WebView'},
                        {key:33,name:'RNWebView'},
                        {key:34,name:'MyActivity'},
                        {key:35,name:'MyActivityContainsFragment'},
                        {key:36,name:'WebViewTrack'},
                    ]
                }
            ]
        };
        //for循环添加字段删除字段添加标示和key
        for (var i = 0; i < this.state.Arr.length; i++) {
            this.state.Arr[i]['data'] = [];
            this.state.Arr[i]['key'] = i;
            this.state.Arr[i]['isShow'] = 'off';
            delete this.state.Arr[i]['UIItems'];

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
            this.state.Arr[data.key]['data'] = AllArr[data.key].UIItems;
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
                    <Text style={{ fontSize: 20, paddingLeft: 5, color: 'white' }}>{section.name}</Text>
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
            <View style={styles.container}>
                <SectionList
                    sections={this.state.Arr}//数据源
                    renderItem={this.Cell.bind(this)}//cell绑定时间创建cell
                    keyExtractor={this.extraUniqueKey}//去除警告
                    renderSectionHeader={this.Header.bind(this)}//Header绑定时间创建表头
                    scrollEnabled={true}//默认是true，false禁止滚动
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    //SectionSeparatorComponent={() => <View style={{ height: 2, backgroundColor: 'grey' }} />}
                >
                </SectionList>
            </View>
        );
    }

    //点击列表点击每一行
    clickItem(data) {
        const { navigate } = this.props.navigation;
        switch (data.item.key) {
            case 11:
                console.log("你单击了第一栏一项");
                navigate('Login');
                break;
            case 12:
                console.log("你单击了第一栏二项");
                navigate('Buttons');
                break;
            case 13:
                console.log("你单击了第一栏三项");
                navigate('TextInputs');
                break;
            case 14:
                console.log("你单击了第一栏四项");
                navigate('TextTest');
                break;
            case 21:
                console.log("你单击了第二栏一项");
                navigate('ListViewOper');
                break;
            case 22:
                console.log("你单击了第二栏二项");
                navigate('ScrollViewTest');
                break;
            case 23:
                console.log("你单击了第二栏三项");
                navigate('PickerTest');
                break;
            case 34:
                NativeModules.MyIntentModule.startActivityFromJS("com.rnhelloworld.MyActivity", "哈哈哈");
                break;
            case 31:
                NativeModules.MyIntentModule.startActivityFromJS("com.rnhelloworld.MyWebViewActivity", "哈哈哈");
                break;
            case 36:
                NativeModules.MyIntentModule.startActivityFromJS("com.rnhelloworld.HybridTrackActivity", "哈哈哈");
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
        borderBottomWidth: 1,
        //backgroundColor: 'lightgray',
        fontSize: 18,
        paddingLeft:10

    },
});