import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

function Header(props) {

	return (
		<div className="Header">   
            <div style={{height: 'inherit', display: 'grid'}}>
                <Logo className="logo"/>
                
                <div className="curve"></div>
            </div> 
		</div>
	);
}

export default Header;
