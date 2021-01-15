import React, { Component } from 'react'
// import axios from 'axios'

class ClassExample extends Component {
  /* bagian I */
  /* constructor () { // u/ membuat variable pada react harus menggunakan this.state yang terdapat dalam constructor (1)
    super() */

    /* this.state = { // seperti ini (1)
      name: "Muhammad Aji" (variable untuk react pake this.state) */

      /* this.state = {
        user: []
      }
    } */

    /* getUser = async () => {
      let response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      this.setState({
        user: response.data
      })
    } */

    /* componentDidMount() {
      this.getUser() // setelah ini bisa langsung dipanggil ke view
    } */

  /* bagian II */
  constructor () {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      name: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`
    })

    this.state.firstname = ''
    this.state.lastname = ''
    
    // console.log(this.state);
  }
  
  render() {
    const {name} = this.state

    // const name = this.state.name *variable yang didefinisikan sebelum fetch variable this.state

    // const state = this.state.user

    // return  <div>
    //           <div>My name is {/* {this.state.name} cara memanggil state apabike tidak didefinisikan sebagai variable */} {state.name} </div>
    //           <div>My name is {state.username}</div>
    //         </div>

    return (

      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  Learn-react
                </div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">Firstname</label>
                      <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" id="firstname" className="form-control" />
                    </div>

                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">Lastname</label>
                      <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" id="lastname" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Show</button>
                  </form>
                </div>
                <div className="card-footer">
                  My Name is {name ? name : '...'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default ClassExample;