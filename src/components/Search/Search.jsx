import React, {Component} from 'react';
import axios from 'axios';
import Form 	 from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Consumer } from '../../context';


class Search extends Component {
	state = {
		trackTitle: ''
	}

	findTrack = (dispatch, e) => {
		e.preventDefault();
		axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/
					track.search?q_track=${this.state.trackTitle}&page_size=&page=1&s_track_rating=desc&
                    apikey=f649ea8f3083d57cf3ed647d7bbcce0e`)
            .then(res => {
                dispatch({
					type: 'SEARCH_TRACKS',
					payload: res.data.message.body.track_list
				})
            })
            .catch(err => console.log(err));
	}

	onChange = (e) => {
		this.setState({[e.target.name]: e.target.value});
	}

	render(){
		return (
			<Consumer>
				{value => {
					const {dispatch} = value;
					return(
						<Form inline className="d-flex justify-content-center"
							onSubmit={this.findTrack.bind(this, dispatch)}
						>
							<FormControl 
								style={{borderRadius: '20px', marginBottom: '1rem'}}
								type="text" 
								placeholder="Song title..." 
								className="mx-3" 
								name="trackTitle"
								value={this.state.trackTitle}
								onChange={this.onChange}
							/>
							<Button 
								style={{borderRadius: '20px', background: '#4f4f4f', border: 'none', marginBottom: '1rem'}}
								type="submit"
							>Search</Button>
						</Form>
					)
				}}
			</Consumer>
		);
	}
}

export default Search;
