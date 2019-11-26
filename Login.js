import React, {Component} from 'react'

class Login extends Component{
  render(){
    return(
      <div>
        <form>
          Email : <input type = 'text' /><br/>
          Password : <input type = 'password' /><br/>
          <center><button>Submit</button></center>
        </form>
      </div>
    )
  }
}

export default Login