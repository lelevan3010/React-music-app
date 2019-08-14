import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function Header() {

	return (
		<div className="Header">   
            <div style={{height: 'inherit', display: 'grid'}}>
                <Logo className="logo"/>
                <Form inline className="d-flex justify-content-center">
                    <FormControl 
                        style={{borderRadius: '20px'}}
                        type="text" 
                        placeholder="Song title..." 
                        className="mx-3" 
                    />
                </Form>
                <div className="curve"></div>
            </div> 
		</div>
	);
}

export default Header;
