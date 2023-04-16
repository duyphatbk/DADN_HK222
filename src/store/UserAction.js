import {SET_ID, SET_MAIL, SET_NAME} from './Constant'

export const setID = payload => ({
    type: SET_ID,
    payload,
})

export const setMail = payload => ({
    type: SET_MAIL,
    payload
})

export const setName = payload => ({
    type: SET_NAME,
    payload
})