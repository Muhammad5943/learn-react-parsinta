import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App(props) {
  const [user, setUser] = useState([])

  const getUser = async () => {
    try {
      let response = await axios.get('http://jsonplaceholder.typicode.com/users/1')
        setUser(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Website</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                    {/* <tr>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                      <td>{user.phone}</td>
                    </tr> */}
                { // it used when we wanted to fetch all data
                  users.map(user => {
                    return(
                      <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.phone}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;