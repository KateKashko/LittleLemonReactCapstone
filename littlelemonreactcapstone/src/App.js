import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Menu from './components/Menu';



function App() {
  return (
    <Router>
    <Nav/>
    <Main/>
    <Menu/>
    </Router>
  );
}

export default App;
