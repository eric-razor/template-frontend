import React from 'react';
import Login from '../components/Login.js'
import Logout from '../components/Logout.js'

const Home = () => {

  return (
    <div>
      <h1>home page</h1>
      <Login/>

      <a href='/profile'>Profile</a>
    </div>
  );
};

export default Home
