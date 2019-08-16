import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import MusicBoard from './pages/MusicBoard/MusicBoard';
import About from './pages/About/About';
import Lyrics from './pages/Lyrics/Lyrics';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {
	return (
		<div className="App">
			<Header/>
			<Switch>
            	<Route path="/" exact component={MusicBoard} />
            	<Route path="/about" component={About} />
            	<Route path="/lyrics/track/:id" component={Lyrics} />
          	</Switch>
			<NavigationBar/>
		</div>
	);
}

export default App;
