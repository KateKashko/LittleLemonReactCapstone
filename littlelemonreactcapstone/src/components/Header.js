import React from 'react';
import Nav from './Nav';

function Header() {
  return (
    <header>
       <img src={require('../images/Logo.svg')} alt="Little Lemon Logo" style={{ height: '50px' }} />
      <Nav />
    </header>
  );
}

export default Header;