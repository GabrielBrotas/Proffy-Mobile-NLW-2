import { GET_CLASSES } from "../types"

const initialState = {
    classList: []
}

interface ActionProps {
    type: string;
    payload: any
}

export default function classesReducer(state = initialState, action: ActionProps) {
    switch (action.type) {

        case GET_CLASSES:
            return {classList: action.payload};

        default: 
            return state
    }
}