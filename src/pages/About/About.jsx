import React from 'react';
import Container from 'react-bootstrap/Container';
import './About.css';


function About() {
	return (
		<div className="About">
			<Container>
                <p>Music app v1.0.0</p>
                <p>Icon made by Flaticon</p>
                <p>Lyrics from Musixmatch</p>
			</Container>
		</div>
	);
}

export default About;
