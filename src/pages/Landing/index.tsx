import React, { useEffect, useState } from 'react';
import {View, Image, Text} from 'react-native';
import { useNavigation} from '@react-navigation/native'
import {RectButton} from 'react-native-gesture-handler'

import styles from './styles'

import landingImg from '../../assets/images/landing.png'
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'
import profileImg from '../../assets/images/profile.jpg'
import returnIcon from '../../assets/images/icons/return.png'

import api from '../../services/api';

function Landing() {
    const {navigate} = useNavigation();

    const [totalConnections, setTotalConnections] = useState(0)

    useEffect( () => {
        api.get('/connections').then( res => {
            const {total} = res.data
            setTotalConnections(total)
        })
    }, [])

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses')
    }   
    
    function handleNavigateToStudyPage() {
        navigate('Study')
    }   

    return (
        <View style={styles.container}>

           <View style={styles.headerContent}>
                <View style={styles.profileContent}>
                    <Image source={profileImg} style={styles.profileImg} />
                    <Text style={styles.userName}>Warren Buffet</Text>

                    <Image source={returnIcon} style={styles.backIcon} />
                </View>
                
                <Image source={landingImg} style={styles.banner} />
           </View>

            <View style={styles.mainContent}>
                <Text style={styles.title}>
                    Seja bem-vindo, {'\n'}
                    <Text style={styles.titleBold}>O que deseja fazer?</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton 
                        onPress={handleNavigateToStudyPage}
                        style={[styles.button, styles.buttonPrimary]}
                    >
                        <Image source={studyIcon} />

                        <Text style={styles.buttonText}>Estudar</Text>
                    </RectButton>

                    <RectButton 
                        onPress={handleNavigateToGiveClassesPage} 
                        style={[styles.button, styles.buttonSecondary]}
                    >
                        <Image source={giveClassesIcon} />

                        <Text style={styles.buttonText}>Dar Aulas</Text>
                    </RectButton>
                </View>

                
                <Text style={styles.totalConnections}> 
                    Total de {totalConnections} conexões já realizadas {' '}
                    <Image source={heartIcon} />
                </Text>
            </View>
        </View>
    )
}

export default Landing