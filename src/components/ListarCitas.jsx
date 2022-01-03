import React, {useEffect, useState, Fragment} from 'react'
import CONNECTION from '../config/CONNECTION'

export default function ListarCitas() {
    
    const [state, setState] = useState([]);

    useEffect(()=> {
        fetch(CONNECTION+"/citasReactivas", {
            method:'GET'
        })
        .then(value => value.json())
        .then((citas) => setState(citas))
    }, [])

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
            {state.map((cita)=> {
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
