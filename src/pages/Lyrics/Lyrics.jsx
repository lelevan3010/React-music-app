import React, { Component } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Spinner 	 from 'react-bootstrap/Spinner';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Lyrics.css';


class Lyrics extends Component {
	state = {
		track: {},
		lyrics: {}
	}

	componentDidMount(){
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/
					track.lyrics.get?track_id=${this.props.match.params.id}
                    &apikey=f649ea8f3083d57cf3ed647d7bbcce0e`)
            .then(res => {
				console.log(res);
				
				this.setState({lyrics: res.data.message.body.lyrics});
				
				return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/
								track.get?track_id=${this.props.match.params.id}
								&apikey=f649ea8f3083d57cf3ed647d7bbcce0e`);
            }).then( res => {
				this.setState({track: res.data.message.body.track})
			})
            .catch(err => console.log(err));
	}


	render(){
		const { track, lyrics } = this.state;
		if(	track === undefined || 
			lyrics === undefined || 
			Object.keys(track).length === 0 || 
			Object.keys(lyrics).length === 0
		){
			return <Spinner animation="grow" variant="danger" style={{marginLeft: '47%'}}/>
		} else {
			return (
				<div className="Lyrics">
					<Container>
						<PageTitle track={track.track_name}/>
						<small>{track.artist_name}</small>
						<p>{lyrics.lyrics_body}</p>
					</Container>
				</div>
			)
		}
	}
}

export default Lyrics;
