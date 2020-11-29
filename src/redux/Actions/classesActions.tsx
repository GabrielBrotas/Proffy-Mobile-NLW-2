import api from "../../services/api"
import { GET_CLASSES } from "../types"

import {HistoryProps} from './userActions'

export const createNewClass = (userData: Object, history: HistoryProps) => () => {
    api.post('/classes', userData)
    .then( () => {
        alert("class created with success")
        history.push('/study')
    }).catch( err => {
        console.log(err)
    })
}

export const getTeacherList = (subject: string, week_day: string, time: string) => (dispatch: Function) => {
    api.get('classes', {
        // passar querys via parametros
        params: {
            subject, 
            week_day,
            time
        }
    }).then( (res) => {
        dispatch({type: GET_CLASSES, payload: res.data});
    })
}