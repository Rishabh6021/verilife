import React from 'react';
//import logo from './logo.svg';
import Footer from './Footer/Footer.react'
import Login from './Login/Login.react'
import './App.css';
import AddBloodBank from './AddBloodBank/AddBloodBank.react';

function App() {
  return (
    <div>
    <Login></Login>
    <AddBloodBank></AddBloodBank>
    <Footer></Footer>
    </div>
  );
}

export default App;
