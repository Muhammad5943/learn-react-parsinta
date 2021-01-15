import React/* , { useContext } */ from 'react'
import AuthenticatedUser from '../components/AuthenticatedUser';
import { /* UserContext, */ UserProvider } from './context/User'

/* Cara 1 
const User = () => {
    const {user} = useContext(UserContext)

    return (
        <div>
            My Name is: {user.name}
        </div>
    )
}

function Home() {

    return (
        <div className="container">
            <UserProvider>
                <User />
            </UserProvider>
        </div>
    );
}
 */

//  cara 2
function Home() {
    /* const {user} = useContext(UserContext) */

    return (
        <div className="container">
            <UserProvider>
                <div className="d-flex">
                    <div className="mr-1">My Name is </div><AuthenticatedUser /> 
                </div>
            </UserProvider>
        </div>
    );
}

export default Home;