import React/* , { useContext } */ from 'react'
import { useRecoilState } from 'recoil';
import AuthenticatedUser from '../components/AuthenticatedUser';
import { theme } from '../store';
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
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)
    /* const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-white text-dark' (pindah ke App.js untuk global variabble) */

    return (
        <div className="container">
            {/* <UserProvider>
                <div className="d-flex">
                    <div className="mr-2">My Name is </div><AuthenticatedUser /> 
                </div>
            </UserProvider> */}
            <div className="row">
                <div className="col-md-4">
                    <select value={currentTheme} onChange={(e) => setCurrentTheme(e.target.value)} className="form-control">
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                    </select>
                </div>
            </div>

            <div className="mt-2">
                You are selecting the { currentTheme } theme.
            </div>
        </div>
    );
}

export default Home;