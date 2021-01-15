import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({children}) => {
    // Using simple example of useContext 
    /* const user = {
        name: 'Muhammad Aji Putra'
    } */

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

    const getUser = async () => {
        setLoading(true)

        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users/2")
            setUser(response.data)

            setLoading(false)
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getUser()
    }, []);

    return (
        <UserContext.Provider value={{ user, loading }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }