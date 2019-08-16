import React from 'react';
import './MusicDesc.css';
import Album from '../../assets/album.png';
import Artist from '../../assets/artist.png';


function MusicDesc(props) {
	const { track } = props;
	return (
		<div>
			<p className="title">{track.track_name}</p>
			<p className="smallText"><img src={Artist} alt="artist"/> Artist: {track.artist_name}</p>
			<p className="smallText"><img src={Album} alt="album"/> Album: {track.album_name}</p>
		</div>
	);
}

export default MusicDesc;
