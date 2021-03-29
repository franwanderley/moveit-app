import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ExperienceBarProps{
    currentExperience     : number;
    experienceToNextLevel : number;
}

export function ExperienceBar(props : ExperienceBarProps) {
    
    const percentToNextLevel = Math.round((props.currentExperience * 100) / props.experienceToNextLevel);
    //Alteração do Estilo || CSS IN JS
    styles.linegreen = {...styles.linegreen, width : `${percentToNextLevel}%`};
    styles.currentExperience = {...styles.currentExperience, left : `${percentToNextLevel}%`};

    return (
        <View style={styles.header}>
            <Text style={styles.textheader}>0 xp</Text>
            <View style={styles.line}>
                <View style={styles.linegreen}></View>
                <Text style={styles.currentExperience}>{props.currentExperience} xp</Text>
            </View>
            <Text style={styles.textheader} >{props.experienceToNextLevel} xp</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header : {
        alignItems: "flex-start",
        flexDirection : "row",
        width : "90%",
        justifyContent: "space-between"

    },
    textheader: {
        fontSize: 10
    },
    currentExperience: {
        position : 'absolute',
        textAlign : "center",
        top : 5,
        left : "0%"
    },
    line : {
        height : 5,
        width : "90%",
        borderRadius: 5,
        backgroundColor: "#dcdde0",
        marginHorizontal: 10,
        position : "relative",
    },
    linegreen : {
        height : 5,
        width : "0%",
        borderRadius: 5,
        backgroundColor: "#4cd62f",
    }
});