import AsyncStorage from "@react-native-async-storage/async-storage"

export const storage = () => {
    const token = AsyncStorage.getItem('token')
    const email = AsyncStorage.getItem('email')
    const fname = AsyncStorage.getItem('fname')
    return {
        token,
        email,
        fname,
    }
}