const host = 'http://172.20.10.2:5000'
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
            // ...err.response.data
        }
    }
}

