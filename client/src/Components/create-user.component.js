
import React from "react"

import axios from "axios"

 class CreateUser extends React.Component
{
   constructor(props)
   {
      super(props)

      this.state = {
         username: ''
      }

     this.onChangeUsername = this.onChangeUsername.bind(this)
     this.onSubmit = this.onSubmit.bind(this)

   }

   onChangeUsername(e)
    {
      this.setState({
      username: e.target.value

});

    }

onSubmit(e)
{
   e.preventDefault();

   const user = {
      username: this.state.username
   }

   console.log(user)

   axios.post('https://morning-tor-91920.herokuapp.com/users/add/',user)
   .then(res=> console.log(res.data))
   


   this.setState({
      username: ''
   })
}

   render()
   {

   return (
      <div>
         <h3>Create New User</h3>
          <form onSubmit={this.onSubmit}>
      <div className="form-group">
         <label>Username: </label>
         <input type="text"
         required
         className="form-control"
         value={this.state.username}
         onChange={this.onChangeUsername}
         />
         </div>
         <div className="form-group">
            <input type="submit" value="Create New User" className="btn btn-primary"/>
      </div>

          </form>
      </div>
   );

   }


}


export default CreateUser