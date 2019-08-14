import React from 'react';
import './Header.css';
import { ReactComponent as Logo } from '../../logo.svg';
import PageTitle from '../PageTitle/PageTitle';
import CountryButton from '../CountryButton/CountryButton';

function Header() {
    const title = 'Top 10 tracks in US';

	return (
		<div className="Header">
            <Logo className="logo"/>
            <CountryButton/>
            <PageTitle title={title}/>
		</div>
	);
}

export default Header;
