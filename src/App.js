import React from 'react'

import { Switch, Route } from 'react-router-dom'

import './App.scss'

import HomePage from './pages/home/home.page';
import SearchPage from './pages/search/search.page'

function App() {
	return (
		
			<div className="App">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/search" component={SearchPage} />
				</Switch>

			</div>
	)
}

export default App
