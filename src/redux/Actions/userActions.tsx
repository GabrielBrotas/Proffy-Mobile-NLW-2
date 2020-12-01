import AsyncStorage from "@react-native-community/async-storage"
import jwtDecode from 'jwt-decode'
import api from "../../services/api"
import { CLEAR_ERRORS, SET_ERRORS, SET_AUTHENTICATION, SET_UNAUTHENTICATED } from "../types"

export interface HistoryProps {
    push: Function
}

interface DecodedTokenProps {
    user: Object
}

export const loginUser = (userData: Object, navigate: Function) => (dispatch: Function) => {
    api.post('/login', userData)
        .then( res => {
            dispatch({type: CLEAR_ERRORS})
            setAuthorizationHeader(res.data.token)            
            dispatch(getUserData(res.data.token))
            navigate('Landing')
        })
        .catch( err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const checkIfNameAndEmailExists = (userData: Object, navigate: Function) => (dispatch: Function) => {
    api.post('/checkUser', userData)
        .then( () => {
            dispatch({type: CLEAR_ERRORS})

            navigate('StepTwo', userData)
        })
        .catch( err => {
            console.log('err = ', err.response.data)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const registerUser = (userData: Object, reset: Function) => (dispatch: Function) => {
    api.post('/user', userData)
        .then( res => {
            setAuthorizationHeader(res.data.token)
            dispatch({type: CLEAR_ERRORS})
            dispatch(getUserData(res.data.token))
            reset({
                index: 0,
                routes: [{name: 'RegisterFinished'}]
            })
        })
        .catch( err => {
            dispatch({
                type: SET_ERRORS,
                payload: err.response.data
            })
        })
}

export const logoutUser = () => (dispatch: Function) => {
    AsyncStorage.removeItem('LSIdToken');
    dispatch({type: SET_UNAUTHENTICATED});   
}

export const getUserData = (token: string) => (dispatch: Function) => {
    const decodedToken: DecodedTokenProps = jwtDecode(token);
    dispatch({type: SET_AUTHENTICATION, payload: decodedToken.user});
}

const setAuthorizationHeader = (token: string) => {
    const LSIdToken = `Bearer ${token}`
    AsyncStorage.setItem('LSIdToken', LSIdToken)
}