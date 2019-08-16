import React from 'react';
import { Link } from 'react-router-dom';
import './LyricsButton.css';


function LyricsButton(props) {
	const { track } = props;
	return (
		<Link to={`lyrics/track/${track.track_id}`} className="LyricsButton">
			<div className="text">
				LYRICS
			</div>
		</Link>
	);
}

export default LyricsButton;
