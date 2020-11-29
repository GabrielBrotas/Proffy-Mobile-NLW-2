import { CLEAR_ERRORS, SET_AUTHENTICATION, SET_ERRORS, SET_UNAUTHENTICATED } from "../types"

const initialState = {
    authenticated: false,
    loading: false,
    credentials: {},
    errors: {}
}

interface ActionProps {
    type: string;
    payload: any;
}

export default function userReducer(state = initialState, action: ActionProps) {
    switch (action.type) {
        case SET_AUTHENTICATION:
            return {...state, authenticated: true, loading: false, credentials: action.payload};

        case SET_UNAUTHENTICATED:
            return {...state, authenticated: false, loading: false, credentials: {}};
        
        case SET_ERRORS: 
            return {...state, loading: false, errors: action.payload};
        
        case CLEAR_ERRORS: 
            return {...state, loading: false, errors: {}};
        default: 
            return state
    }
}