import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface CompletedChallengesProps {
    challengeCompleted : number;
}

export function CompletedChallenges(props : CompletedChallengesProps){
    return (
        <View style={styles.completedChallengesContainer}>
            <Text style={styles.text}>Desafios completados</Text>
            <Text style={styles.text}>{props.challengeCompleted}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    completedChallengesContainer : {
        justifyContent : "space-between",
        marginVertical: 20,
        paddingBottom: 5,
        flexDirection : "row",
        borderBottomColor: "#d7d8da",
        borderBottomWidth : 1,
        borderStyle : "solid",
    },
    text : {
        fontSize : 13,
        fontWeight : "500"
    } 
});