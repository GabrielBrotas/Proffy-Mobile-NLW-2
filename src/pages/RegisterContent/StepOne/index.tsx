import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import backIcon from '../../../assets/images/icons/back.png'
import { checkIfNameAndEmailExists } from '../../../redux/Actions/userActions'
import { StateProps } from '../../../redux/store'
import { CLEAR_ERRORS } from '../../../redux/types'

import styles from './styles'

function Register() {
    const dispatch = useDispatch();
    const {navigate, goBack} = useNavigation();

    const {errors} = useSelector( (state: StateProps) => state.users)

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [keyboardShow, setKeyboardShow] = useState(false);
    
    async function handleNavigateToStep2() {
        const userData = {
            name: `${name} ${lastName}`,
            email,
        }
        dispatch(checkIfNameAndEmailExists(userData, navigate))
    }

    function handleGoBack() {
        goBack();
    }

    useEffect( () => {
        dispatch({type: CLEAR_ERRORS})
    }, [])

    return (
        <KeyboardAvoidingView
            behavior="position"
            style={{flex: 1}}
            enabled={keyboardShow}
        >           
            <RectButton style={styles.backIcon} onPress={handleGoBack}>
                <Image source={backIcon} />
            </RectButton>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.pageContent}>
                    
                    <Text style={styles.title}>Crie sua conta gratuita</Text>
                    <Text style={styles.subTitle}>Só basta preencher os dados abaixo para se tornar parte de nossa comunidade</Text>

                    <Text style={styles.title}>01.  Dados</Text>
                    <TextInput 
                        placeholder="Name"
                        style={styles.textInput}
                        value={name}
                        onChangeText={e => setName(e)}
                        onFocus={() => setKeyboardShow(true)}
                    />

                    <TextInput 
                        placeholder="Sobrenome"
                        style={styles.textInput}
                        value={lastName}
                        onChangeText={e => setLastName(e)}
                    />
                    {errors.name && errors.from === "register" && <Text style={styles.spanError}>* {errors.name}</Text>}
                    
                    <TextInput 
                        placeholder="Email"
                        style={styles.textInput}
                        value={email}
                        onChangeText={e => setEmail(e)}
                    />
                    {errors.email && errors.from === "register" && <Text style={styles.spanError}>* {errors.email}</Text>}
                    
                    <RectButton style={styles.submitButton} onPress={handleNavigateToStep2}>
                        <Text style={styles.buttonText}>Próximo</Text>
                    </RectButton>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Register