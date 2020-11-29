import React, { useState } from 'react'
import { View, Text, Image, TextInput} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
// import {Button, Checkbox} from 'react-native-paper'
import {CheckBox} from 'react-native-elements'

import logoImg from '../../assets/images/logo.png'

import styles from './styles'

function Login() {

    const [rememberLogin, setRememberLogin] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <View style={styles.logoContent}>
                <Image source={logoImg} style={styles.logo} />
                <Text style={styles.logoText}>Sua plataforma de estudos online</Text>
            </View>
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
                        title="Remember me"
                        textStyle={styles.checkBoxText}
                        checked={rememberLogin} 
                        onPress={ () => setRememberLogin(!rememberLogin)}
                    />
                    <Text style={styles.span}>Esqueceu sua senha ?</Text>
                </View>

                <RectButton style={styles.submitButton}>
                    <Text style={styles.buttonText}>Enviar</Text>
                </RectButton>
            </View>
        </>
    )
}

export default Login