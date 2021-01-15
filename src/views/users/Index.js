import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Index() {
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(response.data);
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUsers()
    }, []);
    
    return (
        <div className="container">
            <div className="row">
                {
                    users.map((user, index) => {
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card mb-4">
                                    <div className="card-header">
                                        {user.name}
                                    </div>
                                    <div className="card-body">
                                        <div className="mb-4">
                                            <a href={`http://${user.website}`} className="d-block mb-2" target="_blank" rel="noreferrer">{user.website}</a>
                                            
                                            {user.username}
                                        </div>

                                        
                                        <NavLink className="btn btn-primary" to={`/users/${user.id}`}>View Profile</NavLink>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Index;