import React from 'react';
import './MusicCard.css';
import MusicDesc from '../MusicDesc/MusicDesc';
import Container from 'react-bootstrap/Container';
import LyricsButton from '../LyricsButton/LyricsButton';


function MusicCard(props) {
	const { track } = props;
	return (
		<div className="MusicCard my-3">
			<Container className="pt-3">
				<MusicDesc track={track}/>
				<LyricsButton track={track}/>
			</Container>
		</div>
	);
}

export default MusicCard;
