import React, { useState } from 'react';

function ClassExample() {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [name, setName] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();

        setName(`${firstname} ${lastname}`)

        setFirstname('')
        setLastname('')
    }

    return (
        <div className="p-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Learn React Functions
                        </div>
                        <div className="card-body">
                            <form onSubmit={submitHandler}>
                                <div className="mb-4">
                                    <label htmlFor="firstname">Firstname</label>
                                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} name="firstname" id="firstname" className="form-control" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="lastname">Lastname</label>
                                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" id="lastname" className="form-control" />
                                </div>

                                <button type="submit" name="" id="" className="btn btn-primary btn-block">Show</button>
                            </form>
                        </div>
                        <div className="card-footer">
                            My Name is {name ? name : "..."}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClassExample;