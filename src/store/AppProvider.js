import { useReducer, useEffect, useState, useCallback } from 'react'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppContext } from './authContext'
import { storage } from './storage'

const initialState = {
    token: '',
    isLogin: false,
    user: {}
}

function userReducer(state, action) {
    switch (action.type) {
        case 'login': {
            return {
                ...state,
                token: action.token,
                user: action.user,
                isLogin: true,
            }
        }
        case 'logout': {
            return {
                ...state,
                token: null,
                user: {},
                isLogin: false,
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


function AppProvider({ children }) {
    const [state, dispatch] = useReducer(userReducer, initialState)

    const loginHandler = (token, user) => {
        AsyncStorage.setItem('token', token)
        dispatch({
            type: 'login',
            token: token,
            user: user,
        });
        console.log('logged in')
    }

    const logoutHandler = useCallback(() => {
        AsyncStorage.removeItem('token')
        dispatch({
            type: 'logout'
        });
        console.log('logged out')
    }, [])

    const contextValue = {
        state,
        login: loginHandler,
        logout: logoutHandler,
    }

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider >
    )
}

export default AppProvider