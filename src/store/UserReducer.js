import { SET_ID, SET_MAIL, SET_NAME } from './Constant'

import * as action from './UserAction'

const initState = {
    id: '',
    email: '',
    name: ''
} 

function Reducer(state, action) {
    switch (action.type) {
        case SET_ID: {
            return {
                ...state,
                id: action.payload
            }
        }
        case SET_MAIL: {
            return {
                ...state,
                email: action.payload
            }
        }
    }
}

export { initState }
export default Reducer