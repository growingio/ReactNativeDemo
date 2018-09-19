import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    WebView,
 } from 'react-native';
var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var TEXT_INPUT_REF = 'urlInput';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'https://dn-sharebaidu.qbox.me/gio_hybrid.html?name="SXF"';
//var DEFAULT_URL = 'http://localhost/gio_hybrid.html';
const FILE_SYSTEM_ORIGIN_WHITE_LIST = ['file://*', 'http://*', 'https://*'];

export default class WebViewTest extends Component {
    state = {
        url: DEFAULT_URL,
        status: 'No Page Loaded',
        backButtonEnabled: false,
        forwardButtonEnabled: false,
        loading: true,
        scalesPageToFit: true,
    };

    inputText = '';

    handleTextInputChange = event => {
        var url = event.nativeEvent.text;
        if (!/^[a-zA-Z-_]+:/.test(url)) {
            url = 'http://' + url;
        }
        this.inputText = url;
    };

    render() {
        this.inputText = this.state.url;

        return (
            <View style={[styles.container]}>
                <View style={[styles.addressBarRow]}>
                    <TouchableOpacity
                        onPress={this.goBack}
                        style={
                            this.state.backButtonEnabled
                                ? styles.navButton
                                : styles.disabledButton
                        }>
                        <Text>{'<'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.goForward}
                        style={
                            this.state.forwardButtonEnabled
                                ? styles.navButton
                                : styles.disabledButton
                        }>
                        <Text>{'>'}</Text>
                    </TouchableOpacity>
                    <TextInput
                        ref={TEXT_INPUT_REF}
                        autoCapitalize="none"
                        defaultValue={this.state.url}
                        onSubmitEditing={this.onSubmitEditing}
                        onChange={this.handleTextInputChange}
                        clearButtonMode="while-editing"
                        style={styles.addressBarTextInput}
                    />
                    <TouchableOpacity onPress={this.pressGoButton}>
                        <View style={styles.goButton}>
                            <Text>Go!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <WebView
                    ref={WEBVIEW_REF}
                    automaticallyAdjustContentInsets={false}
                    style={styles.webView}
                    source={{ uri: this.state.url }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    onNavigationStateChange={this.onNavigationStateChange}
                    onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
                    startInLoadingState={true}
                    scalesPageToFit={this.state.scalesPageToFit}
                />
                <View style={styles.statusBar}>
                    <Text style={styles.statusBarText}>{this.state.status}</Text>
                </View>
            </View>
        );
    }

    goBack = () => {
        this.refs[WEBVIEW_REF].goBack();
    };

    goForward = () => {
        this.refs[WEBVIEW_REF].goForward();
    };

    reload = () => {
        this.refs[WEBVIEW_REF].reload();
    };

    onShouldStartLoadWithRequest = event => {
        // Implement any custom loading logic here, don't forget to return!
        return true;
    };

    onNavigationStateChange = navState => {
        this.setState({
            backButtonEnabled: navState.canGoBack,
            forwardButtonEnabled: navState.canGoForward,
            url: navState.url,
            status: navState.title,
            loading: navState.loading,
            scalesPageToFit: true,
        });
    };

    onSubmitEditing = event => {
        this.pressGoButton();
    };

    pressGoButton = () => {
        var url = this.inputText.toLowerCase();
        if (url === this.state.url) {
            this.reload();
        } else {
            this.setState({
                url: url,
            });
        }
        // dismiss keyboard
        this.refs[TEXT_INPUT_REF].blur();
    };
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: HEADER,
    },
    addressBarRow: {
        flexDirection: 'row',
        padding: 8,
    },
    webView: {
        backgroundColor: BGWASH,
        height: 350,
    },
    addressBarTextInput: {
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        fontSize: 14,
    },
    navButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    disabledButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DISABLED_WASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    goButton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
        alignSelf: 'stretch',
    },
    statusBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22,
    },
    statusBarText: {
        color: 'white',
        fontSize: 13,
    },
    spinner: {
        width: 20,
        marginRight: 6,
    },
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 0.5,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray',
    },
});
