import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Body, Header, Left, Icon, Right } from 'native-base';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';
//import { GetData } from './Sql';

export const dh = Dimensions.get("window").height;
export const dw = Dimensions.get("window").width;

export default class Home extends Component {

    teste(){
        const dados = [];//GetData();
        console.warn(dados);
    }

    render() {
        return (
            <View>
                <Header style={styles.header}>
                    <Left>                        
                    </Left>
                    <Body>
                        <Image style={styles.image} source={require('./img/logo.png')} />
                    </Body>
                    <Left>
                    </Left>
                </Header>
                <View style={[styles.title, { alignItems: 'center' }]}>
                    <Text style={{ fontSize: 25, color: 'rgb(22,47,130)', }}>Home</Text>
                </View>

                <View style={styles.body}>

                    <TouchableOpacity style={styles.botao} onPress={() => Actions.store()}>
                        <Text style={styles.textBtn}>Cadastrados</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => Actions.quest()}>
                        <Text style={styles.textBtn}>Formulário</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao} onPress={() => this.Teste()}>
                        <Text style={styles.textBtn}>Teste</Text>
                    </TouchableOpacity>

                </View>
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
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    sectionContainer: {
        marginTop: 20,
        paddingHorizontal: 24,
    },
    botao: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: dw * 0.8,
        height: dh * 0.10,
        backgroundColor: 'rgb(22,47,130)',
        borderRadius: 10,
    },
    textBtn: {
        fontSize: 24,
        color: '#fff',
    },
    title: {
        fontSize: 25,
        color: 'rgb(22,47,130)',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(22,47,130)',
    },
});

