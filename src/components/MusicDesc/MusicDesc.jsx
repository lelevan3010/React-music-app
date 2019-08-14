import React from 'react';
import './MusicDesc.css';
import Album from '../../assets/album.png';
import Artist from '../../assets/artist.png';


function MusicDesc() {
	return (
		<div>
			<p className="title">Castle on the hill</p>
			<p className="smallText"><img src={Artist} alt="artist"/> Artist: Ed Sheeran</p>
			<p className="smallText"><img src={Album} alt="album"/> Album: Devide</p>
		</div>
	);
}

export default MusicDesc;
