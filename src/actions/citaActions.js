import {CITAS_START, LOAD_ERROR, LOAD_SUCCES} from "../types/types"

const citasStart = () => ({
    type: CITAS_START
}); 

const citasSuccess = (citas) => ({
    type: LOAD_SUCCES,
    payload: citas
});

const citasError = (errorMessage) => ({
    type: LOAD_ERROR,
    payload: errorMessage
});

export default {
    citasStart,
    citasSuccess,
    citasError
};