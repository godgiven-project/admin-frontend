import React from 'react';
import {HashRouter, Route } from "react-router-dom";
import Home from './components/index/Home';
import Users from './components/users/Users';

class Routs extends React.Component {
	render() {
		return (
			<HashRouter>
				<Route exact path="/panel" component={Home} />
				<Route exact path="/panel/users" component={Users} />
			</HashRouter>
		);
	}
}

export default Routs;