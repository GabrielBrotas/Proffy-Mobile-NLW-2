import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import backIcon from '../../assets/images/icons/back.png'

import styles from './styles'

function StepTwo() {

    const {goBack, reset} = useNavigation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleGoBack() {
        goBack()
    }

    function handleSubmit() {
        reset({
            index: 0,
            routes: [{name: 'RegisterContent'}, {name: "Finished"}]
          });
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
                    <Text style={styles.title}>02.  Senha</Text>
                    <TextInput 
                        placeholder="Password"
                        style={styles.textInput}
                        value={password}
                        onChangeText={e => setPassword(e)}
                    />
                    <TextInput 
                        placeholder="Confirm Password"
                        style={styles.textInput}
                        value={confirmPassword}
                        onChangeText={e => setConfirmPassword(e)}
                    />
                
                    <RectButton style={styles.submitButton} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </RectButton>
                </View>
                </>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default StepTwo