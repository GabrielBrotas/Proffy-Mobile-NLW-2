import React, { useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import {CheckBox} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/images/logo.png'

import styles from './styles'

function Login() {

    const {navigate} = useNavigation();

    const [rememberLogin, setRememberLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateToRegister() {
        navigate('StepOne')
    }

    return (
        <KeyboardAvoidingView
            enabled
            style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={styles.logoContent}>
                <Image source={logoImg} style={styles.logo} />
                <Text style={styles.logoText}>Sua plataforma de estudos online</Text>
            </View>
            
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContent}>
                    <Text style={styles.title}>Fazer login</Text>
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

                    <View style={styles.loginOptions}>
                        <CheckBox
                            checkedColor="#04d361"
                            containerStyle={styles.checkBox}
                            title="Lembrar-me"
                            textStyle={styles.checkBoxText}
                            checked={rememberLogin} 
                            onPress={ () => setRememberLogin(!rememberLogin)}
                        />
                        <Text style={styles.span} onPress={handleNavigateToRegister}>Ainda não tem conta ?</Text>
                    </View>

                    <RectButton style={styles.submitButton}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </RectButton>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login