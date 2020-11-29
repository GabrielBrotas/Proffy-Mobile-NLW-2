import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import classesReducer from './reducers/classesReducer'
import userReducers from './reducers/userReducer'

export interface StateProps {
    users: {
        authenticated: boolean,
        credentials: {
            userId: number
            name: string, 
            avatar: string,
            email: string
        },
        loading: boolean,
        errors:{
            name?: string,
            email?: string,
            error?: string,
            password?: string
        }
    },
    classes: {
        classList: [] 
    }
}

const initialState = {}

const middleware = [thunk]

const reducers = combineReducers({
    users: userReducers,
    classes: classesReducer
})

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(...middleware))
)

export default store