import React, { Component } from 'react';
import {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
    Alert
} from 'react-native';

export default class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    _onPressButton() {
        // Alert.alert(message)
        let customBody = { viin_no: this.state.text, model: "90s" };
        return fetch("http://192.168.1.63:3000/products/addProduct", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customBody)
        }).then((responseData) => {
            this.setState({
                text: JSON.stringify(customBody)
            });
        }).done()

    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.innerContent}>
                    <TextInput
                        style={styles.textbox}
                        placeholder="Type your VIIN number"
                        onChangeText={(text) => this.setState({ text })}
                    />
                    <Text>{this.state.text}</Text>

                    <TouchableHighlight onPress={this._onPressButton.bind(this)} underlayColor="white">
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Send Codes</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'powderblue',
        height: '100%',

    },
    innerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
      textbox: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        height: 40,
        width: "100%",
    },
    button: {
        marginBottom: 30,
        width: 200,
        alignItems: 'center',
        backgroundColor: '#2196F3',
        justifyContent: 'center',
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});
AppRegistry.registerComponent('CarPort', () => MainContent);