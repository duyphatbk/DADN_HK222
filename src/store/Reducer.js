import { SET_TEMP, SET_HUMID, SET_LIGHT, SET_FAN, SET_DOOR, SER_THEFT, SET_FIRE, ADD_FAN, ADD_LIGHT } from "./Constant"
import * as action from './Action'

// MQTT initState
const initState = {
    temp: '30',
    humid: '30',
    light: 0,
    lights: [0, 0, 0, 0, 0, 0, 0, 0],
    fan: 0,
    fans: [0, 0, 0, 0, 0, 0, 0, 0],
    door: 0,
    fire: '',
    theft: '',
}

function Reducer(state, action) {
    switch (action.type) {
        case SET_TEMP:
            return {
                ...state,
                temp: action.payload
            }
            break;
        default:
            throw new Error('Invalid action!')
    }
}

export { initState }
export default Reducer