import axios from 'axios';
import { atom, selector } from 'recoil'

const theme = atom({
    key: 'switch-theme',
    default: 'dark'
})

const authUser = selector({
    key: 'auth-user',
    get: async () => {
        let user = null;

        try {
            let {data} = await axios.get("https://jsonplaceholder.typicode.com/users/2")
            user = {user: data}
        } catch (error) {
            user = {user: error.message}
        }

        return user
    }
})

export {authUser, theme};