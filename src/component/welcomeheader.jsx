import React from 'react'

function Header() {
    return (
      <div className="header">
        <div className="header-position">
          <img
            className="header-logo"
            src={process.env.PUBLIC_URL + "/images/golearn-logo.png"}
            alt="Logo"
          ></img>
        </div>
      </div>
    );
}

export default Header;