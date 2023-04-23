import {
    SET_TEMP, SET_HUMID, SET_LIGHT, SET_FAN,
    SET_DOOR, SET_FIRE, SET_THEFT
} from "./Constant"
import * as action from './DeviceAction'

// MQTT initState
const initState = {
    temp: '30',
    humid: '30',
    light: 0,
    lights: [
        {
            id: 1,
            checked: false,
        },

    ],
    fan: 0,
    fans: [
        {
            id: 11,
            checked: false,
        },

    ],
    door: 4,
    theft: 0,
    fire: 0,
}

function Reducer(state, action) {
    switch (action.type) {
        case SET_TEMP:
            return {
                ...state,
                temp: action.payload
            }
        case SET_HUMID:
            return {
                ...state,
                humid: action.payload
            }
        case SET_FAN:
            return {
                ...state,
                fan: action.payload
            }
        case SET_LIGHT:
            return {
                ...state,
                light: action.payload
            }
        case SET_DOOR:
            return {
                ...state,
                door: action.payload
            }
        case SET_FIRE:
            return {
                ...state,
                fire: action.payload
            }
        case SET_THEFT:
            return {
                ...state,
                theft: action.payload,
            }
        default:
            throw new Error('Invalid action!')
    }
}

export { initState }
export default Reducer