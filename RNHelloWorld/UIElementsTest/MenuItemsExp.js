/**
 * 页面简介:
 * 本页面为页面元素列表入口
 * 页面效果为，列表展示所有内容。
 * 为了方便自动化测试，特从MenuItems.js优化而来
 * 作者：宋现锋 
 * 日期：2018-08-30
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    SectionList,
} from 'react-native';

export default class MenuItemsExp extends Component {
    static navigationOptions = {
        title: "UI控件",
    };


    constructor(props) {
        super(props);
        }
    _renderItem = (data) => {
        return (
            <View style={{ height: 40, justifyContent: 'center', borderBottomColor: 'red' }}>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#B0C4DE' }}>
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
                name: 'SimpleUI', data: [
                    { key: 11, name: 'Login' },
                    { key: 12, name: 'Buttons' },
                    { key: 13, name: 'InputText' },
                    { key: 14, name: "TextTest" }]
            },
            {
                name: 'ComplexUI', data: [
                    { key: 21, name: 'ListView' },
                    { key: 22, name: "ScrollViewTest" },
                    { key: 23, name: "PickerTest" },
                    { key: 24, name: "WebViewTest" }
                ]
            },
        ]
        return (
            <View style={{ flex: 1 }}>
                <SectionList
                    renderSectionHeader={this._sectionComp}
                    renderItem={this._renderItem}
                    sections={sections}
                    ItemSeparatorComponent={() => <View><Text></Text></View>}
                    ListFooterComponent={() => <View style={styles.ViewForTextStyle}><Text style={{ fontSize: 20, borderLeftWidth: 5, color: 'white' }}>End</Text></View>}
                />
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
            case 24:
                console.log("你单击了第二栏四项");
                navigate('WebViewTest');
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
});