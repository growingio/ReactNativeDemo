import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, FlatList, NativeModules } from 'react-native';
import { Text, View, Typography } from 'react-native-ui-lib'; 
export default class CstmEventTest extends Component {
    render() {
        //Cstm事件
        var data = [];
        data.push({key:1,oper:"track('testTrackEventString',{\"name\":\"GrowingIO\"})"});
        data.push({ key:2,oper: "track(\"\",null)" })
        data.push({ key: 3,oper: "track(null,null)" })
        data.push({ key: 4,oper: "track('GIO',{\"name\":\"sxf\"})" })
        data.push({ key: 5,oper: "track('GIO',{})" })
        data.push({ key: 6, oper: "track('',{\"name\":\"sxf\"})" })
        data.push({ key: 7, oper: "track(null,{\"name\":\"sxf\"})" })
        data.push({ key: 8, oper: "trackWithNumber('GIO',97)" })
        data.push({ key: 9, oper: "trackWithNumber('GIO', 67.98)" })
        data.push({ key: 10, oper: "trackWithNumber('GIO',\"Str\")" })
        data.push({ key: 11, oper: "trackWithNumber('',78)" })
        data.push({ key: 12, oper: "trackWithNumber(null,78)" })
        data.push({ key: 13, oper: "trackWithNumber('GIO',97,{\"name\":\"sxf\"})" })
        data.push({ key: 14, oper: "trackWithNumber('GIO',97,{})" })
        data.push({ key: 15, oper: "trackWithNumber('',97,{\"name\":\"sxf\"})" })
        data.push({ key: 16, oper: "trackWithNumber(null,97,{\"name\":\"sxf\"})" })
        data.push({ key: 17, oper: "trackWithNumber('GIO','',{\"name\":\"sxf\"})" })
        data.push({ key: 18, oper: "track('数据')" });
        data.push({ key: 19, oper: "track('GIOKey',{\"name\":\"测试\"})" });
        data.push({ key: 20, oper: "trackWithNumber('分数',97)" })
        data.push({ key: 21, oper: "trackWithNumber('GIO',97,{\"name\":\"测试\"})" })
        // for (var i = 0; i < 100; i++) {
        //     data.push({ key: i, title: i + '' });
        // }

        return (
            <View>
                    <View centerH>
                        <Text style={styles.title}>Cstm事件</Text>
                    </View>
                    <FlatList
                        ref={(flatList) => this._flatList = flatList}
                        ListHeaderComponent={this._header}
                        ListFooterComponent={this._footer}
                        ItemSeparatorComponent={this._separator}
                        renderItem={this._renderItem}
                        onRefresh={this.refreshing}
                        refreshing={false}
                        onEndReachedThreshold={0}
                        onEndReached={
                            this._onload
                        }

                        getItemLayout={(data, index) => (
                            { length: 100, offset: (100 + 2) * index, index }
                        )}

                        data={data}>
                    </FlatList>
                </View>
        )
    }

    //cstm
    _renderItem = (item) => {
        return(
        <TouchableOpacity onPress={this.clickItem.bind(this, item)}>
            <Text style={styles.cell}>{item.item.oper}</Text>
        </TouchableOpacity>
        );

    }

    _header = () => {
        return <View style={styles.ViewForTextStyle}><Text style={[styles.txt, { paddingLeft:10,backgroundColor: 'orange'}]}>Cstm事件测试</Text></View>;
    }

    _footer = () => {
        return <Text style={[styles.txt, { backgroundColor: 'lightgrey' }]}>...End...</Text>;
    }

    _separator = () => {
        return <View style={{ height: 1, backgroundColor: '#ececec' }} />;
    }

    //点击列表点击每一行
    clickItem(item) {
        //alert("You click item:"+item.item.key);
        switch(item.item.key)
        {
            case 1:
                console.log("track('testTrackEventString',{\"name\":\"GrowingIO\"})");
                NativeModules.GrowingIO.track("cstmTest",{"testTrackEventString":"GrowingIO"});
               break;
            case 2:
                console.log("track(\"\",null)");
                NativeModules.GrowingIO.track("",null);
                break; 
            case 3:
                console.log("track(null,null)");
                NativeModules.GrowingIO.track(null,null);
                break; 
            case 4:
                console.log("track('GIO',{\"name\":\"sxf\"})");
                NativeModules.GrowingIO.track("GIO", {"name":"sxf"});
                break; 
            case 5:
                console.log("track('GIO',{})");
                NativeModules.GrowingIO.track("GIO", {});
                break; 
            case 6:
                console.log("track('',{\"name\":\"sxf\"})");
                NativeModules.GrowingIO.track("", { "name": "sxf" });
                break; 
            case 7:
                console.log("track(null,{\"name\":\"sxf\"})");
                NativeModules.GrowingIO.track(null, { "name": "sxf" });
                break; 
            case 8:
                console.log("trackWithNumber('GIO',97)");
                NativeModules.GrowingIO.trackWithNumber("GIO",97,null);
                break; 
            case 9:
                console.log("trackWithNumber('GIO', 67.98)");
                NativeModules.GrowingIO.trackWithNumber("GIO", 67.98,null);
                break; 
            case 10:
                console.log("trackWithNumber('GIO',\"Str\")");
                NativeModules.GrowingIO.trackWithNumber("GIO","str",null);
                break; 
            case 11:
                console.log("trackWithNumber('',78)");
                NativeModules.GrowingIO.trackWithNumber("", 78,null);
                break; 
            case 12:
                console.log("trackWithNumber(null,78)" );
                NativeModules.GrowingIO.trackWithNumber(null,78,null);
                break; 
            case 13:
                console.log("trackWithNumber('GIO',97,{\"name\":\"sxf\"}");
                NativeModules.GrowingIO.trackWithNumber("GIO", 97, {"name":"sxf" });
                break; 
            case 14:
                console.log("trackWithNumber('GIO',97,{})");
                NativeModules.GrowingIO.trackWithNumber("GIO", 97, {});
                break; 
            case 15:
                console.log("trackWithNumber('',97,{\"name\":\"sxf\"})");
                NativeModules.GrowingIO.trackWithNumber("", 97, { "name": "sxf" });
                break; 
            case 16:
                console.log("trackWithNumber(null,97,{\"name\":\"sxf\"})");
                NativeModules.GrowingIO.trackWithNumber(null, 97, { "name": "sxf" });
                break; 
            case 17:
                console.log("trackWithNumber('GIO','',{\"name\":\"sxf\"})");
                NativeModules.GrowingIO.trackWithNumber("GIO", "", { "name": "sxf" });
                break; 
            case 18:
                console.log("track('数据')");
                NativeModules.GrowingIO.track('数据',null);
                break; 
            case 19:
                console.log("track('GIOKey',{\"name\":\"测试\"})");
                NativeModules.GrowingIO.track('GIOKey',{"name":"测试"});
                break; 
            case 20:
                console.log("trackWithNumber('分数',97)");
                NativeModules.GrowingIO.trackWithNumber("分数", 97,null);
                break; 
            case 21:
                console.log("trackWithNumber('GIO',97,{\"name\":\"测试\"})");
                NativeModules.GrowingIO.trackWithNumber("GIO", 97, { "name": "测试" });
                break; 
            default:
                console.log("You Click other items");
                break;
        }
    }

}
const styles = StyleSheet.create({
    content: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cell: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#ececec',
        borderBottomWidth: 1,
        //backgroundColor: 'lightgray',
        fontSize: 20,
        paddingLeft:10

    },
    txt: {
        color: 'white',
        fontSize: 20,
    },
    ViewForTextStyle: {
        justifyContent: 'center',
        backgroundColor: 'orange',
        height:40
    },
    title: {
        ...Typography.text40
    },

});
