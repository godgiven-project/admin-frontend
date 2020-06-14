import React from 'react';
import { Route, HashRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import login from './components/auth/login'
import register from './components/auth/register'
import PrivateRoute from './PrivateRoutes'



function App() {
	return (
		<HashRouter>
			<div className={ "App " + process.env.REACT_APP_Dir}>
	    		<Route exact path="/" component={login} />
				<Route path="/login" component={login} />
				<Route path="/register" component={register} />
				<PrivateRoute path='/panel' component={MainContainer} />
			</div>
		</HashRouter>
	);
}
export default App;