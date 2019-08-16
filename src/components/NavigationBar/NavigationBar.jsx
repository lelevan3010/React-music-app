import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faQuestionCircle, faMusic } from '@fortawesome/free-solid-svg-icons';


function NavigationBar(props) {
	return (
		<div className="NavigationBar">
			<Container style={{display: 'flex', justifyContent: 'space-around'}}>
				<NavLink exact={true} to="/" activeClassName="active">
					<FontAwesomeIcon icon={faSearch} size="2x"/>
					<span>
						Search
					</span>
				</NavLink>
				<NavLink to="/lyrics/track/" activeClassName="active">
					<FontAwesomeIcon icon={faMusic} size="2x"/>
					<span>
						Lyrics
					</span>
				</NavLink>
				<NavLink to="/about" activeClassName="active">
					<FontAwesomeIcon icon={faQuestionCircle} size="2x"/>
					<span>
						About
					</span>
				</NavLink>
			</Container>
		</div>
	);
}

export default NavigationBar;
