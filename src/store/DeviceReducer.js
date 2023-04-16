import { SET_TEMP, SET_HUMID, SET_LIGHT, SET_FAN, 
    SET_DOOR, SER_THEFT, SET_FIRE, ADD_FAN, ADD_LIGHT, SET_THEFT } from "./Constant"

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
            break
        case SET_HUMID:
            return {
                ...state,
                humid: action.payload
            }
            break
        default:
            throw new Error('Invalid action!')
    }
}

export { initState }
export default Reducer