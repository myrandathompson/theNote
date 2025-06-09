import styled from 'styled-components';
import logo from './logo.png';
import './Header.css'


function Header() {
    return (
        <div className="header__wrapper">
        {/* logo */}
        <div className="header__logo">
            <img src={logo} width={25} />
        </div>
        {/* search */}
        <div className="header__search">
            <div className="header__searchContainer">
                  <input placeholder="Search" type="text" />
            </div>
        </div>
            
            </div>
           
            
      
    );
}

export default Header;