import React, { Component } from 'react';
import {
    Alert,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StatusBar,
} from 'react-native';

import { Actions } from "react-native-router-flux";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Login extends Component {
    state = {
        login: '',
        pass: '',
    }

    logar() {
        const { login, pass } = this.state;

        if (login == 'jeff' && pass == 'expo@123') {
            Actions.store();
        } else {
            this.mostrarAlerta('Login', 'Login Inválido.')
        }
    }

    mostrarAlerta = (title, msg) => {
        Alert.alert(
            title,
            msg,
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK" }
            ],
            { cancelable: false }
        );
    };

    render() {
        return (
            <View style={styles.content}>
                <ScrollView style={styles.scrollView}>
                    <View style={styles.body}>

                        <View style={styles.sectionContainer}>
                            <Image style={styles.image} source={require('./img/logo.png')} />
                        </View>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Login:</Text>
                            <TextInput style={styles.input} ref="user" placeholder="Login" autoCapitalize="none" returnKeyType="next"
                                onSubmitEditing={event => {
                                    this.refs.pass.focus();
                                }}
                                onChangeText={login =>
                                    this.setState({
                                        login
                                    })
                                }
                            />
                        </View>

                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Senha:</Text>
                            <TextInput style={styles.input} ref="pass" placeholder="Senha" autoCapitalize="none" returnKeyType="next"
                                onSubmitEditing={() => this.logar()}
                                onChangeText={pass =>
                                    this.setState({
                                        pass
                                    })
                                } />
                        </View>

                        <View style={[styles.sectionContainer, { flex: 1, flexDirection: 'column', alignItems: 'center' }]}>
                            <TouchableOpacity style={styles.button} onPress={() => this.logar()}>
                                <Text style={{ fontSize: 20, color: '#fff' }}>Entrar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );

    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    scrollView: {
        backgroundColor: 'transparent',
    },
    sectionContainer: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    body: {
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 5,
        color: Colors.black,
    },
    input: {
        padding: 3,
        paddingLeft: 10,
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
    },
    image: {
        marginTop: 30,
        position: "relative",
        width: '100%',
        height: 200,
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        height: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#007bff',
        marginBottom: 30,
    },

});