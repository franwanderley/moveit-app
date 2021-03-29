import React, { useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Contador(){

    const navigation = useNavigation();
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(count === 10)
          navigation.navigate('Login');
    }, [count]);


    return ( 
        <View style={styles.container}>
        <Text style={styles.text}>Contador {count} </Text>
        <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <StatusBar backgroundColor="transparent" translucent />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#444',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text : {
      fontSize: 20,
      color: "#f5f5f5"
    },
    button : {
      paddingHorizontal: 20,
      paddingVertical: 11,
      alignItems : "center",
      justifyContent: "center",
      backgroundColor: "#4cc2ef",
      position: 'absolute',
      bottom: 0,
      borderRadius: 30,
      right: 0,
      marginBottom: 15,
      marginRight: 15
    }
  });