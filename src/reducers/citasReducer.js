import {CITAS_START, LOAD_ERROR, LOAD_SUCCES} from "./../types/types";

const initialState = {
    isLoading: false,
    citas: null,
    errorMessage: null
};

const citasReducer = (state = initialState, {type,payload} = {type:LOAD_ERROR, payload:[]}) => {
    switch(type){
        case CITAS_START:
            return {
                ...state,
                isLoading: true,
                citas: null,
                errorMessage: null
            };
        case LOAD_SUCCES:
            return {
                ...state,
                isLoading: false,
                citas: payload
            };
        case LOAD_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: payload
            };
        default: 
            return state;
    }
};

export default citasReducer;