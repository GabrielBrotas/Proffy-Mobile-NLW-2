import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import backIcon from '../../../assets/images/icons/back.png'

import styles from './styles'

function Register() {

    const {navigate, goBack} = useNavigation();

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    
    function handleNavigateToStep2() {
        navigate("StepTwo")
    }

    function handleGoBack() {
        goBack()
    }

    return (
        <KeyboardAvoidingView
            behavior="padding"
            style={{flex: 1}}
        >           
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <>
                <RectButton style={styles.backIcon} onPress={handleGoBack}>
                    <Image source={backIcon} />
                </RectButton>

                <View style={styles.pageContent}>
                    
                    <Text style={styles.title}>Crie sua conta gratuita</Text>
                    <Text style={styles.subTitle}>Só basta preencher os dados abaixo para se tornar parte de nossa comunidade</Text>

                    <Text style={styles.title}>01.  Dados</Text>
                    <TextInput 
                        placeholder="Name"
                        style={styles.textInput}
                        value={name}
                        onChangeText={e => setName(e)}
                    />
                    <TextInput 
                        placeholder="Email"
                        style={styles.textInput}
                        value={email}
                        onChangeText={e => setEmail(e)}
                    />
                    <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                          value={password}
                        onChangeText={e => setPassword(e)}
                    />

                    <RectButton style={styles.submitButton} onPress={handleNavigateToStep2}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </RectButton>
                </View>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register