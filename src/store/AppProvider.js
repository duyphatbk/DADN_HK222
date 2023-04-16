import { useReducer, useEffect, useState } from 'react'
import { AppContext } from './authContext'
import Reducer, { initState } from './UserReducer'
import * as actions from '../store/UserAction'

function AppProvider( {children} ) {
    const [state, dispatch] = useReducer(Reducer, initState)
    
    return (
        <AppContext.Provider value = {[state, dispatch]}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider