const host = 'http://localhost:5000'

export const login = async (data) => {
    try {
    // create axios post request
    const res = await axios({
        method: 'post',
        url: `${host}/auth/login`,
        data: data,
    })
    return res.data
    } catch (err) {
        return {
            status: err.response.status,
            ...err.response.data
        }
    }
}