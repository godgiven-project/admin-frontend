import React from 'react'
import { Redirect, Route } from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={ props => {
				if(Auth.authenticate() === true){
					return <Component />;
				}
				else{
					return <Redirect to="/login" />;
				}
			}
		}
	/>
)
const Auth = {
	authenticate(){
		if(localStorage.getItem('Godgiven_admin_token') !== null && localStorage.getItem('Godgiven_admin_token') !== "" ){
			return true;
		}else{
			return false;
		}
	},
}
export default PrivateRoute;