import React, {Component} from 'react'
import styles from './mystyle.module.css';

class Login extends Component{
  render(){
    return(
      <div>
        <form>
          <p className={styles.bigred}>Email :</p> <input type = 'text' />
          <p className={styles.bigred}>Password :</p> <input type = 'password' />
          <center><button>Submit</button></center>
        </form>
      </div>
    )
  }
}

export default Login