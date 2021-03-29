import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';

interface ProfileProps {
    name  : string;
    image : string;
    level : number;
}

export function Profile(props : ProfileProps){
    
    return (
        <View style={styles.profileView}>
            <Image style={styles.image} source= {{ uri : props.image }}/>
            <View style={{marginLeft : 15}}>
                <Text style={styles.nameText} >{props.name}</Text>
                <View style={{marginTop : 5, flexDirection : "row"}}>
                    <Icon name="level-up" style={{marginRight: 5}} color="#4cd62f"/>
                    <Text style={styles.levelText}> Level {props.level}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    profileView : {
        alignItems: "center",
        flexDirection : "row"

    },
    image : {
        width : 60,
        height : 60,
        borderRadius: 60,
    },
    nameText : {
        fontSize : 15,
        fontWeight : "600",
        color : "#5c5c5c"
    },
    levelIcon : {
        fontSize : 10,
        marginRight: 5,
    },
    levelText :{
        fontSize: 10
    }
});