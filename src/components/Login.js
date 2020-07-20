import React from 'react'
import '../styles/Login.css'


const Login = () => {

  const togglePassword = e =>{
    e.preventDefault()
    const pw = document.getElementById("password")
    const pwBtn = document.getElementById("togglePasswordButton")
    if(pw.type === 'password'){
      pw.type = 'text';
      pwBtn.textContent = 'Hide password';
      pwBtn.setAttribute('aria-label','Hide password');
    } else {
      pw.type = 'password';
      pwBtn.textContent = 'Show password';
      pwBtn.setAttribute('aria-label','Show password as plain text. ' + 'Warning: this will display your password on the screen')
    }
  }
  return (
    // // FIXME: add value attr
    <div className="Login">
      <form name="Login-form" onSubmit="">
        <section>
        <label for="email">Email</label>
        <div className="input-box">
        <input id="email" name="current-email" autocomplete="email" type="text"  required onChange="" />
        </div>
        </section>

        <section>
        <label for="password"> Password</label>
        <div className="input-box">
        <input id="password" name="current-password" autocomplete="password"  type="password" required onChange="" />
        </div>
        </section>

        <button id="togglePasswordButton" aria-describedby="password-constraints" onClick={togglePassword} >Show password</button>
        <div id="password-constraints" type="text">password should be 8+ characters with a mix of letters, numbers and symbols</div>

        <input value="Log in" type="submit"/>
      </form>
    </div>
  )
}


export default Login
