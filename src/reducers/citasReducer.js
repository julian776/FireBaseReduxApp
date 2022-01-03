
import React, { useEffect } from 'react'
import CONNECTION from '../config/CONNECTION'

const initialState = useEffect(()=> {
    fetch(CONNECTION+'/citasReactive', {
        method: 'GET'
    }).then(citas => citas.json())
}, [])

export default function citasReducer(state= initialState, action) {
    switch(action.type){
        case 'add-cita':
            return state.push(action.payload)
        case 'add-all':
            return fetch(CONNECTION+'/citasReactive', {
                method: 'GET'
            }).then(citas => citas.json())    
        default:
            return state       
    }
}
