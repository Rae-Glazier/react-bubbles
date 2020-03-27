import React, { useState } from "react";
import { axiosWithAuth } from './axiosWithAuth'

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({ username: '', password: ''});

  const handleLogin = event => {
    setLogin({...login, [event.target.name]: event.target.value});

    console.log('handleLogin:', event.target.name, event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', login)
      .then(response => {
        localStorage.setItem('token', response.data.payload);
        props.history.push('/bubbles')
      })
      .catch(error => console.log(error.response, 'try again'));
  };

  return (
    <div className= 'Bubble-Login'>
      <h1>Welcome to the Bubble App!</h1>
      
      <form onSubmit={handleSubmit}>
        <input 
          type= 'text'
          name= 'username'
          placeholder= 'Username'
          className= 'username'
          onChange= {handleLogin}
          value= {login.username}
        />

        <input 
          type= 'password'
          name= 'password'
          placeholder= 'Password'
          className= 'password'
          onChange= {handleLogin}
          value= {login.password}
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
