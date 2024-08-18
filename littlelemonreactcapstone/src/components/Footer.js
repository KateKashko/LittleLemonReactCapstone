import React from 'react';

function Footer() {
    return (
      <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
        <p>&copy; 2024 Little Lemon. All rights reserved.</p>
        <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'center', gap: '15px', padding: 0 }}>
          <li><a href="https://facebook.com" style={{ color: '#fff' }}>Facebook</a></li>
          <li><a href="https://twitter.com" style={{ color: '#fff' }}>Twitter</a></li>
          <li><a href="https://instagram.com" style={{ color: '#fff' }}>Instagram</a></li>
        </ul>
      </footer>
    );
  }

export default Footer;