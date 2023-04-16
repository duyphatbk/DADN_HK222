import { useReducer, useEffect, useState } from 'react'

function AppProvider( {children} ) {
    
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider >
    )
}