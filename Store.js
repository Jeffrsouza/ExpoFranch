import React, { Component, Fragment } from 'react';
import {
    Alert,
    AsyncStorage,
    CheckBox,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { Body, Header, Left, Icon, Right } from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';
import email from 'react-native-email';

export default class Store extends Component {

    state = {
        keys: []
    }
    async componentDidMount() {
        const keys = await AsyncStorage.getAllKeys();
        this.setState({ keys });
    }
    async sendMail(key) {
        const dados = await AsyncStorage.getItem(key);
        const dado = JSON.parse(dados);
        const body = await this.bodyMail(dado);

        const to = ['jefferson.ti@hotmail.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            //bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Email de teste',
            body: body
        }).then(() => this.mostrarAlerta('Envio', 'Dados Enviados')).catch(err => this.mostrarAlerta('Envio', 'Erro ao enviar' + err));
    }

    async bodyMail(dado) {
        return 'Nome da empresa: ' + dado.nomeEmpresa + '\n' +
            'Cargo: ' + dado.cargo + '\n' +
            'Reponsável: ' + dado.responsavel + '\n' +
            'Cidade: ' + dado.cidade + '\n' +
            'Empresa expositora: ' + dado.empresaExp + '\n' +
            'Respostas: \n' +
            '1) ' + dado.resposta1 + '\n' +
            '2) ' + dado.resposta2 + '\n' +
            '3) ' + dado.resposta3 + '\n' +
            '4) ' + dado.resposta4 + '\n' +
            '5) ' + dado.resposta5 + '\n' +
            '6) ' + dado.resposta6 + '\n' +
            '7 A) ' + dado.resposta7_a + '\n' +
            '7 B) ' + dado.resposta7_b + '\n' +
            '7 Just) ' + dado.resposta7_just + '\n' +
            '8) ' + dado.resposta8 + '\n' +
            '9): ' + dado.resposta9 + '\n' +
            '9 Just) ' + dado.resposta9_just + '\n' +
            '10) ' + dado.resposta10 + '\n' +
            '10 Just) ' + dado.resposta10_just + '\n' +
            '11 A) ' + dado.resposta11_a + '\n' +
            '11 B) ' + dado.resposta11_b + '\n' +
            '11 C) ' + dado.resposta11_c + '\n' +
            '11 D) ' + dado.resposta11_d + '\n' +
            '11 E) ' + dado.resposta11_e + '\n' +
            '11 F) ' + dado.resposta11_f + '\n' +
            '11 G) ' + dado.resposta11_g + '\n' +
            '11 H) ' + dado.resposta11_h + '\n' +
            '12) ' + dado.resposta12 + '\n' +
            '12 Just) ' + dado.resposta12_just + '\n' +
            '13) ' + dado.resposta13 + '\n' +
            '13 Just) ' + dado.resposta13_just + '\n' +
            '14) ' + dado.resposta14 + '\n' +
            '14 Just) ' + dado.resposta14_just + '\n' +
            '15) ' + dado.resposta15 + '\n' +
            '16) ' + dado.resposta16 + '\n' +
            '17 ' + dado.resposta17 + '\n';
    }
    mostrarAlerta(title, msg) {
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
        const { keys } = this.state;
        return (
            <View>
                <StatusBar barStyle="light-content" />
                <SafeAreaView>
                    <Header style={styles.header}>
                        <Left>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => Actions.home()}>
                                <Icon name='arrowleft' type={'AntDesign'} style={{ color: '#fff' }} />
                            </TouchableOpacity>
                        </Left>
                        <Body>
                            <Image style={styles.image} source={require('./img/logo.png')} />
                        </Body>
                        <Left>
                        </Left>
                    </Header>
                    <View style={[styles.body, styles.title, { alignItems: 'center' }]}>
                        <Text style={{ fontSize: 25, color: 'rgb(22,47,130)' }}>Cadastrados</Text>
                    </View>
                    <ScrollView style={{ marginTop: 15 }}>
                        <View>
                            {keys.map(k => <TouchableOpacity key={k} onPress={() => this.sendMail(k)} style={styles.botao}><Text style={styles.textBtn}>{k}</Text></TouchableOpacity>)}
                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'rgb(22,47,130)',
    },
    title: {
        fontSize: 25,
        color: 'rgb(22,47,130)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(22,47,130)',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
        marginBottom: 100,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    botao: {
        backgroundColor: '#fff',
        paddingLeft: 3,
        borderRadius: 2,
        marginLeft: '5%',
        marginBottom: 15,
        width: '90%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
    },
    textBtn: {
        fontSize: 20,
        color: 'rgb(22,47,130)',
    }
});