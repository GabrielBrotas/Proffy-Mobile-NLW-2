import React from 'react'
import { View, Text, ImageBackground, Image} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import checkIcon from '../../../assets/images/icons/check.png'
import backgroundImg from '../../../assets/images/give-classes-background.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'


function RegisterFinished() {

    const {navigate} = useNavigation();


    function handleGoToLogin() {
        navigate('Login')
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode="contain"
                source={backgroundImg}
                style={styles.content}
            >
                <View style={styles.welcomeMessage}>
                    <Image source={checkIcon} resizeMode="contain" style={styles.checkIcon} />
                    <Text style={styles.title}>Cadastro Concluído!</Text>
                    <Text style={styles.subTitle}>Pronto, agora você já pode assistir e se tornar um de nossos Proffys</Text>
                </View>
                
                <RectButton style={styles.submitButton} onPress={handleGoToLogin}>
                    <Text style={styles.buttonText}>Fazer Login</Text>
                </RectButton>
            </ImageBackground>
            
        </View>
    )
}

export default RegisterFinished