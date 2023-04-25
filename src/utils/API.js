const host = 'http://172.17.22.174:5000'
import axios from 'axios';

export const login = async (data) => {
    try {
        // create axios post request
        const res = await axios({
            method: 'post',
            url: `${host}/auth/login`,
            data: data,
            headers: { "Content-Type": "application/json" },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

export const modifyInfo = async (token, data) => {
    try {
        // create axios patch request
        const res = await axios({
            method: 'patch',
            url: `${host}/auth/modifyInfo`,
            data: data,
            headers: { authorization: token },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

// path = /getInfo/:device_id
export const deviceTypeInfo = async (device_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: `${host}/device/getInfo/${device_id}`,
            headers: { "Content-Type": "application/json" },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

// path: /getValue/:type-:device_id
export const getValue = async (type, device_id) => {
    try {
        const res = await axios({
            method: 'get',
            url: `${host}/device/getInfo/${type}-${device_id}`,
            headers: { "Content-Type": "application/json" },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}

// set AUTO MODE
// /setvalue/:type-:device_id
export const setAuto = async (device_id) => {
    try {
        // create axios post request
        const res = await axios({
            method: 'post',
            url: `${host}/device/auto-${device_id}`,
            data: data,
            headers: { "Content-Type": "application/json" },
        })
        return res.data
    } catch (err) {
        return {
            status: err,
        }
    }
}



