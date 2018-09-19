import React, { Component } from 'react';
import { View, Button, Text } from 'react-native-ui-lib';

export default class TextTest extends Component {
    constructor(...args: Array<*>) {
        super(...args);

        this.state = {
            isRTL: false,
            fontWeight: 'bold',
             fontSize: 30
        };
    }
    toggleWeight = () => {
        this.setState({
            fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold',
        });
    };

    increaseSize = () => {
        this.setState({
            fontSize: this.state.fontSize + 5,
        });
    };
    render() {
        const { isRTL } = this.state;
        const toggleRTL = () => this.setState({ isRTL: !isRTL });
        var curStyle = {
            fontWeight: this.state.fontWeight,
            fontSize: this.state.fontSize,
        }
        return (
            <View style={{ direction: isRTL ? 'rtl' : 'ltr',fontSize: 18}}>
                <Text text50>auto (default) - english LTR</Text>
                <Text text50>
                    {'\u0623\u062D\u0628 \u0627\u0644\u0644\u063A\u0629 ' +
                        '\u0627\u0644\u0639\u0631\u0628\u064A\u0629 auto (default) - arabic RTL'}
                </Text>
                <Text style={{ textAlign: 'left', marginTop: 10 }}>
                    left left left left left left left left left left left left left left
                    left
                </Text>
                <Text style={{ textAlign: 'center', marginTop: 10  }}>
                    center center center center center center center center center center
                    center
                </Text>
                <Text style={{ textAlign: 'right', marginTop: 10  }}>
                    right right right right right right right right right right right
                    right right
                </Text>
                <Text style={{ textAlign: 'justify', marginTop: 10 }}>
                    justify: this text component{"'"}s contents are laid out with
                    "textAlign: justify" and as you can see all of the lines except the
                    last one span the available width of the parent container.
                </Text>
                <Button
                    backgroundColor="#30B650"
                    labelStyle={{ fontWeight: '600' }}
                    style={{ marginBottom: 20,marginTop:20 }}
                    enableShadow
                    ref={element => (this.button_1 = element)}
                    onPress={toggleRTL}
                    label={`Switch to ${isRTL ? 'LTR' : 'RTL'}`}
                />

                <Text text50>
                    Tap the controls below to change attributes.See how it will even work on{' '}
                </Text>
                <Text style={curStyle}>
                    this nested text
                </Text>
                <Text
                    style={{ backgroundColor: '#ffaaaa',fontSize:18,marginTop:20}}
                    onPress={this.toggleWeight}>
                    Toggle Weight
                </Text>
                <Text
                    style={{ backgroundColor: '#aaaaff', fontSize: 18, marginTop: 20}}
                    onPress={this.increaseSize}>
                    Increase Size
                </Text>
            </View>
        );
    }
}