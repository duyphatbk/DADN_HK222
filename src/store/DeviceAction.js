import { SET_TEMP, SET_HUMID, SET_LIGHT, SET_FAN, SET_DOOR, SET_FIRE, ADD_FAN, ADD_LIGHT, SET_THEFT } from "./Constant"

export const setTemp = payload => ({
    type: SET_TEMP,
    payload,
})

export const setHumid = payload => ({
    type: SET_HUMID,
    payload,
})
export const setFan = payload => ({
    type: SET_FAN,
    payload,
})
export const setLight = payload => ({
    type: SET_LIGHT,
    payload,
})
export const setDoor = payload => ({
    type: SET_DOOR,
    payload,

})
export const setFire = payload => ({
    type: SET_FIRE,
    payload,
})
export const setTheft = payload => ({
    type: SET_THEFT,
    payload,
})