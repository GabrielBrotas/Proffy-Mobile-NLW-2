import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import backIcon from '../../../assets/images/icons/back.png'
import { registerUser } from '../../../redux/Actions/userActions'
import { StateProps } from '../../../redux/store'

import styles from './styles'

interface StepTwoRoute {
    route: {params: userDataProps}
}

interface userDataProps {
    password?: string;
    confirmPassword?: string;
    email?: string;
    name?: string;
}


function StepTwo({route}: StepTwoRoute) {

    const dispatch = useDispatch();

    const {goBack, reset} = useNavigation();

    const {errors} = useSelector( (state: StateProps) => state.users)

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userData, setUserData] = useState<userDataProps>({})

    function handleGoBack() {
        goBack()
    }

    function handleSubmit() {
        userData.password = password;
        userData.confirmPassword = confirmPassword;
        dispatch(registerUser(userData, reset))
    }

    useEffect( () => {
        setUserData(route.params)
    }, [route])

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
                        secureTextEntry
                    />

                    <TextInput 
                        placeholder="Confirm Password"
                        style={styles.textInput}
                        value={confirmPassword}
                        onChangeText={e => setConfirmPassword(e)}
                        secureTextEntry
                    />
                
                    {errors.password && <Text style={styles.errorMessage}>* {errors.password}</Text>}                    
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