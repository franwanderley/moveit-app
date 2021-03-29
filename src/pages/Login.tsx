import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Alert, AsyncStorage, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import { RectButton } from 'react-native-gesture-handler';
import axios from 'axios';

import {api} from '../services/api';

interface UserGithub{
    login      : string;
    avatar_url : string;
    nome?      : string;
}

export default function Login(){

    async function onSubmit(){
        const userGithub = await axios.get(`https://api.github.com/users/${username}`)
        .then(res => res.data as UserGithub)
        .catch(error => undefined);
        if(userGithub){
            await SecureStore.setItemAsync('username', userGithub.login);
            await SecureStore.setItemAsync('nome', userGithub.nome || userGithub.login);
            await SecureStore.setItemAsync('imagem', userGithub.avatar_url);
            //Ir para home
            navigation.navigate('Home');
        }
        else
            Alert.alert('Login não realizado');
    }

    const navigation = useNavigation();
    const [username, setUsername] = useState("");

    return (
        <View style={styles.main}>
            <View style={{flexDirection: "row"}}>
                <Image style={styles.imageLogin} source={require('../img/favicon.png')}/>
                <Text style={styles.title} >Move<Text style={{color : "#4cd62f"}}>.</Text>it</Text>
            </View>
            <Text style={styles.subtitle}>Bem Vindo!</Text>
            <View style={{flexDirection: "row", maxWidth: "80%", justifyContent: 'center'}}>
                <Icon style={styles.icon} name='github' />
                <Text style={styles.paragrafo}>Faça login com seu GitHub para começar</Text>
            </View>
            <View style={styles.form}>
                <TextInput placeholder="Seu username" onChangeText={setUsername} style={styles.input}/>
                <RectButton onPress={onSubmit} style={styles.button}>
                    <Text style={styles.buttontext}>Fazer Login </Text>
                    <Icon style={styles.buttonicon} name="sign-in" color="#fff"/>
                </RectButton>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main : {
        width: "100%",
        backgroundColor: "#4953b8",
        height: "100%",
        flexDirection: 'column',
        alignItems: "center",
        justifyContent: "center",
    },
    imageLogin : {
        marginBottom: 20,
        marginRight: 5
    },
    title : {
        fontSize: 50,
        color : "#fff",
        marginBottom: 20
    },
    subtitle :{
        fontSize: 30,
        color : "#fff",
        marginBottom: 15
    },
    paragrafo : {
        fontSize: 20,
        color : "#fff",
        marginBottom: 20,
        textAlign: "center"
    },
    icon : {
        fontSize: 30,
        color : "#fff",
        marginBottom: 20,
        marginRight: 5,
        textAlign: "center"
    },
    form :{
        width: "90%",
        alignItems: "center",
    },
    input : {
        height: 50,
        width: 350,
        backgroundColor: '#F5F5F5',
        textAlign: 'center',
        borderRadius: 10,
        marginBottom: 10,
        paddingHorizontal: 20,
        fontSize: 25,
    },
    button : {
        backgroundColor: '#4cd62f',
        width: 350,
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
    },
    buttontext : {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontSize: 16,
    },
    buttonicon : {
        fontSize: 20,
        marginLeft: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }

});