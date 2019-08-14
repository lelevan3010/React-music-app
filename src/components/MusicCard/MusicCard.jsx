import React from 'react';
import './MusicCard.css';
import MusicDesc from '../MusicDesc/MusicDesc';
import Container from 'react-bootstrap/Container';
import LyricsButton from '../LyricsButton/LyricsButton';


function MusicCard() {
	return (
		<div className="MusicCard my-3">
			<Container className="pt-3">
				<MusicDesc/>
				<LyricsButton/>
			</Container>
		</div>
	);
}

export default MusicCard;
