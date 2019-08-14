import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import MusicCard from './components/MusicCard/MusicCard';
import MusicBoard from './components/MusicBoard/MusicBoard';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
	return (
		<div className="App">
			<Header/>
			<MusicBoard>
				<MusicCard/>
				<MusicCard/>
				<MusicCard/>
				<MusicCard/>
				<MusicCard/>
			</MusicBoard>
			<NavigationBar/>
		</div>
	);
}

export default App;
