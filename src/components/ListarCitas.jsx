import React, {Fragment, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { loadCitasAsync } from './../config/thunks';

export default function ListarCitas() {
    const dispatch = useDispatch();

    const {isLoading, registroCitas, error} = useSelector( (state) => state.citas );

    useEffect(() => {
        dispatch(loadCitasAsync());
    },[]);

    return (
        <Fragment>
        <table className='table'>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Doctor</td>
                    <td>Date</td>
                    <td>Hour</td>
                </tr>
            </thead>
            <tbody>
            {registroCitas.map((cita)=> {
                return(
                    <tr>    
                    <td>{cita.id}</td>
                    <td>{cita.nombrePaciente}</td>                    
                    <td>{cita.nombreMedico}</td>                    
                    <td>{cita.fechaReservaCita}</td>                    
                    <td>{cita.horaReservaCita}</td>                    
                    </tr>
                    ) 
                })}
                </tbody>
        </table>
        </Fragment>
    )
}
