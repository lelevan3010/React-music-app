import React from 'react';
import './MusicBoard.css';
import Container from 'react-bootstrap/Container';


function MusicBoard(props) {
	return (
		<div className="MusicBoard">
			<Container>
				{props.children}
			</Container>
		</div>
	);
}

export default MusicBoard;
