import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Show(props) {
    const [user, setUser] = useState([])
    let {identifier_id} = useParams() // penggunaan let {...} sama dengan kita mengambil field yang ada di useParams() 
    // console.log(identifier_id)

    const getUser = async () => {
        let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier_id}`)
        setUser(response.data)
    }

    useEffect(() => {
        getUser()
    }, [identifier_id])


    return (
        <div className="container">
            <div className="card">
                <div className="card-header">
                    {user.name}
                </div>
                <div className="card-body">
                    <div>{user.username}</div>
                    <div>{user.website}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                </div>
            </div>
        </div>
    );
}

export default Show;