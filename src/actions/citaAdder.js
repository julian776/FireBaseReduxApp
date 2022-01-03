import { ADDONE, UPDATE } from "../types/types"

export const agregarCitas = () => {{type: UPDATE}}

export const agregarCita = (cita) => {
    return {type:ADDONE, payload:cita}
}