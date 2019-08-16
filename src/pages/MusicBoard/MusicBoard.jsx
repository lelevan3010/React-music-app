import React from 'react';
import './MusicBoard.css';
import MusicCard from '../../components/MusicCard/MusicCard';
import Search from '../../components/Search/Search';
import Container from 'react-bootstrap/Container';
import Spinner 	 from 'react-bootstrap/Spinner';
import { Consumer } from '../../context';


function MusicBoard() {
	return (
		<div className="MusicBoard">
			<Container>
				<Search/>
				<Consumer>
					{value => {
						const { track_list } = value;
						if(track_list === undefined || track_list.length === 0){
							return <Spinner animation="grow" variant="danger" style={{marginLeft: '47%'}}/>
						} else {
							return (
								<React.Fragment>
									{track_list.map( item => (
										<MusicCard key={item.track.track_id} track={item.track}/>
									))}
								</React.Fragment>
							)
						}
					}}
				</Consumer>
			</Container>
		</div>
	);
}

export default MusicBoard;
