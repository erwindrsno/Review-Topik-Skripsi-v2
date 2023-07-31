import React from 'react'
import univLogo from '../../assets/images/logo_univ_header_name.png'
import '../../assets/style/style.css'

function Header() {

  return (
    <header>
      <figure>
        <img src={univLogo} alt="logo instansi" id=""logo />
      </figure>
    </header>
  );
}

export default Header;
