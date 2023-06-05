import React from 'react';

function Footer() {
  const today = new Date().getFullYear();
  return (
    <div>
      <div>{today} Hyewon. All rigths reserved.</div>
    </div>
  );
}

export default Footer;
