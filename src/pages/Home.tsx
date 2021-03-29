import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FontAwesome as Icon} from '@expo/vector-icons';
import { SvgUri } from 'react-native-svg';

import {ExperienceBar} from './../components/ExperienceBar';
import {Profile} from './../components/Profile';
import {CompletedChallenges} from './../components/CompletedChallenges';
import { Directions, RectButton } from 'react-native-gesture-handler';
import Challenge from './../../challenges.json';

interface ActiveChallenge  {
    type              : string;
    description       : string;
    amount            : number; 
};

export default function Home(){

    function startNewChallengs(){

    }
    function startCountDown() {
        setIsActive(true)
    }
    function ResetCountDown(){
        setIsActive(false);
        clearTimeout(countdownTimeout);
        setHasFinished(false) 
    }

    let countdownTimeout : NodeJS.Timeout;
    const [time, setTime] = useState(25 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const [activeChallenge, setActiveChallenge] = useState<ActiveChallenge | undefined>({type: 'body', description : "AA", amount : 50});
    const [level, setLevel] = useState<number>(1);
    const [currentExperience,setCurrentExperience] = useState<number>(0);
    const [challengeCompleted, setChallengeCompleted] = useState<number>(0);

    const minute = Math.floor(time / 60);
    const second = time % 60;
    const [minuteLeft, minuteRight] = String(minute).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(second).padStart(2, '0').split('');

    //Para parar e continuar o cronometro
    useEffect(() => {
        if( isActive && time > 0 ){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            },1000);
        }else if(isActive && time === 0){
            setTime(25 * 60);
            setIsActive(false);
            setHasFinished(true);
            startNewChallengs();
        }else
            setTime(25 * 60);
    
    }, [isActive, time]);


    return (
        <View style={styles.container}>
            <View style={styles.sidebar}>

            </View>
            <View>
                <ExperienceBar currentExperience = {10} experienceToNextLevel = {100}/>
                <View style={styles.section}>
                    <View>
                        <Profile 
                            name={"Francisco Wanderley"}
                            level={2} 
                            image={"https://avatars.githubusercontent.com/u/38666227?v=4"}
                        />
                        <CompletedChallenges challengeCompleted = {3}/>
                        <View style={styles.countdownView}>
                            <View style={styles.data}>
                                <Text style={styles.dataleft}> {minuteLeft} </Text>
                                <Text style={styles.dataright}> {minuteRight} </Text>
                            </View>
                            <Text style={styles.points}>:</Text>
                            <View style={styles.data}>
                                <Text style={styles.dataleft}> {secondLeft} </Text>
                                <Text style={styles.dataright}> {secondRight} </Text>
                            </View>
                        </View>
                        { !isActive ?   
                            <RectButton style={styles.button} onPress={startCountDown}>
                                <Text style={styles.textbutton}>Iniciar um Ciclo</Text>
                                <Icon name="play" color="#fff" style={{marginLeft : 10, fontSize: 20}}/>
                            </RectButton>
                        :
                            <RectButton style={styles.buttonOff} onPress={ResetCountDown}>
                                <Text style={styles.textbutton}>Abandonar Ciclo</Text>
                                <Icon name="power-off" color="#fff" style={{marginLeft : 10, fontSize: 20}}/>
                            </RectButton>
                        }
                    </View>
                    <View style={styles.challengView}>
                        {activeChallenge ?
                        <View style={styles.challengeActive}>

                        </View> 
                    :
                        <View style={styles.challengeNotActive}>
                            <Text style={styles.strong}>Finalize um ciclo para receber desafios</Text>
                            <View style={styles.paragaph}>
                                <SvgUri width={20} height={20} uri={"./src/images/icons/level-up.svg"} />
                                <Text style={{lineHeight : 1.4, fontSize : 15}}>Avance de level completando desafios</Text>
                            </View>
                        </View>
                    }
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding : 5,
        height : "100%",
        marginVertical : 0,
        marginHorizontal: "auto",
        backgroundColor : "#f2f3f5",
        flexDirection : "row",
        alignItems : "flex-start", 
        justifyContent : "space-evenly",
    },
    sidebar : {
    },
    section : {
        flexDirection : "column",
        justifyContent : "center",
        marginTop : 30,
        alignContent : "flex-end",

    },
    countdownView : {
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "center",
        width : "100%",
    },
    countdowntext : {
        fontWeight : "600",
        color : "#5c5c5c",
    },
    data: {
        alignItems : "center",
        flexDirection : "row",
        justifyContent : "center",
        backgroundColor : "#fff",
        borderRadius : 5,
        padding : 5,
        textAlign : "center",
    },
    dataright : {
        fontSize : 55,
        padding : 2,
        fontWeight : "600",
        textAlign: "center",
    },
    dataleft : {
        fontSize : 55,
        padding : 2,
        fontWeight : "600",
        textAlign: "center",
        borderRightColor : "#f0f1f3",
        borderRightWidth : 1.5,
        borderStyle : "solid",
    },
    points : {
        color : "#5c5c5c",
        fontWeight : "600",
        fontSize : 50,
        padding : 5,
    },
    button : {
        width : "80%",
        flexDirection : "row",
        paddingVertical : 10,
        alignSelf : 'center',
        marginTop : 20,
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 0,
        borderRadius : 5,
        backgroundColor : "#5965e0",

    },
    buttonOff : {
        width : "80%",
        flexDirection : "row",
        paddingVertical : 10,
        alignSelf : 'center',
        marginTop : 20,
        alignItems : "center",
        justifyContent : "center",
        borderWidth : 0,
        borderRadius : 5,
        backgroundColor : "#e83f5b",

    },
    textbutton : {
        color : "#fff",
        fontSize : 20,
        fontWeight : "700"
    },
    challengView: {
        marginTop: 10,
        height : "80%",
        backgroundColor: "#fff",
        borderRadius : 5,
        paddingVertical : 10,
        paddingHorizontal: 15,
        flexDirection : "column",
        alignItems : "center",
        justifyContent: "center",
        textAlign : "center",

    },
    challengeNotActive : {
        flexDirection: "column",
        alignItems : 'center',

    },
    challengeActive : {
        
    },
    strong : {
        fontSize : 25,
        fontWeight : "500",
        lineHeight : 1.4
    },
    paragaph : {
        flexDirection : "row",
        justifyContent : "space-evenly",
        maxWidth : "70%",
        marginTop : 15,
    },  

});