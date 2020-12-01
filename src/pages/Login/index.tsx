import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Platform} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import {CheckBox} from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'

import logoImg from '../../assets/images/logo.png'

import styles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../redux/Actions/userActions'
import { StateProps } from '../../redux/store'
import { CLEAR_ERRORS } from '../../redux/types'

function Login() {

    const {navigate} = useNavigation();
    const dispatch = useDispatch();

    const {errors} = useSelector( (state: StateProps) => state.users)

    const [rememberLogin, setRememberLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNavigateToRegister() {
        navigate('StepOne')
    }

    function handleLoginUser() {
        const userData = {email, password};
        dispatch(loginUser(userData, navigate));
    }

    useEffect( () => {
        dispatch({type: CLEAR_ERRORS})
    }, [])

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
                    {errors.email && errors.from !== "register" && <Text style={styles.errorMessage}>* {errors.email}</Text>}
                    <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        value={password}
                        onChangeText={e => setPassword(e)}
                        secureTextEntry
                    />
                    {errors.password && <Text style={styles.errorMessage}>* {errors.password}</Text>}

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
                    
                    {errors.error && <Text style={styles.errorMessage}>* {errors.error}</Text>}
                    
                    <RectButton style={styles.submitButton} onPress={handleLoginUser}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </RectButton>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login