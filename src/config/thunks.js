import cargarCitas from "../components/cargarCitas";
import citaActions from "./../actions/citaActions";

export const loadCitasAsync = () => (dispatch) => {
    dispatch(citaActions.citasStart());
    cargarCitas.getAllCitas()
        .then((response) => dispatch(citaActions.citasSuccess(response.data)))
        .catch((error) => dispatch(citaActions.citasError(error.message)));
};