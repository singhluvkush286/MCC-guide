import React from 'react';

function Footer() {
  return (
    <footer className="App-footer" style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      <div className="social-media-links">
        <a href="https://www.example.com/twitter" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/twitter-icon.png" alt="Twitter" />
        </a>
        <a href="https://www.example.com/facebook" target="_blank" rel="noopener noreferrer">
          <img src="/path/to/facebook-icon.png" alt="Facebook" />
        </a>
      </div>
    </footer>
  );
}

const footerStyle = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  height: '30px', // Set the height of the footer here
  background: '#f0f0f0', // Add any background color you prefer
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export default Footer;
