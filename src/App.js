import './App.css';
import React, { Component } from 'react';
import Movies from './components/movies';
import "./App.css"

function App() {
  return (
    // This is the container for our application
    <main className='container'>
      {/* <h1> Hello World </h1> I need to replace this with our movie componenet */}
      <Movies /> 
    </main>
  ); 
}

export default App;
