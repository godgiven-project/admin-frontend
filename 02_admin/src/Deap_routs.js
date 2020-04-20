import React from 'react';
import {HashRouter, Route } from "react-router-dom";
import Home from './components/index/Home';

class Routs extends React.Component {
	render() {
		return (
			<HashRouter>
				<Route exact path="/panel" component={Home} />
			</HashRouter>
		);
	}
}

export default Routs;