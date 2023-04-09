import { SET_TEMP, SET_HUMID, SET_LIGHT, SET_FAN, SET_DOOR, SER_THEFT, SET_FIRE, ADD_FAN, ADD_LIGHT } from "./Constant"

export const setTemp = payload => ({
    type: SET_TEMP,
    payload,
})

export const setHumid = payload => ({
    type: SET_HUMID,
    payload,
})