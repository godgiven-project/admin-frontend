import React , { Component } from 'react'
import ggn_lang from '../../i18n/ggn_lang'
import Particles from 'react-particles-js'
import Bulma_Notification from '../bulma/Bulma_Notification'
//import './login.css'
class login extends Component{
	state = {
		username: null,
		password: null,
		Notification : null,
		elementheight : null
  	}
  	constructor(props) {
		super(props);
		this.form_part = React.createRef();
		this.anim_part = React.createRef();
	}
	componentDidMount() {
		this.setState({ elementheight: this.form_part.current.clientHeight });
	}
	
	handleChange = (e) => {
	// console.log(e.target.id, e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
  	}
  	handleRgister = (e) => {
  		this.props.history.push("/register");
  	}
	handleSubmit = (e) => {
		e.preventDefault();
		if(
			this.state.username === null || 
			this.state.password === null ||
			this.state.username === "" || 
			this.state.password === ""){
			this.setState({
				Notification: <Bulma_Notification type="danger" text={ggn_lang.auth.error_login["please input username and password"]} />
			});
			return;
		}
		fetch(process.env.REACT_APP_Url + `/admin_login`, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			//credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				username: this.state.username , 
				password: this.state.password
			}), // body data type must match "Content-Type" header
		}).then(response => response.json())
		.then(result => {
			if(result[0] === true) {
				this.setState({
					Notification: <div className="notification is-success"><button className="delete" ></button>{ggn_lang.auth.success_login}</div>
				});
				localStorage.setItem('Godgiven_admin_token', result[1]);
				localStorage.setItem('date_check',new Date().getTime());
				setTimeout(() => {
					this.props.history.push("/panel");
				}, 500);
			}else{
				//console.log(ggn_lang.auth.error_login);
				this.setState({
					Notification: <Bulma_Notification type="danger" text={ggn_lang.auth.error_login[result[1]]} />
				});
			}
		});
	}
	render() {return (
		<div className="Login_ggn">
			<style>
				body{'{'}
					overflow:hidden;
				{'}'}
				.interactive-bg {'{'}
					height: 100vh;
					background-color: #00d1b2;
					-webkit-box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);
					-moz-box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);
					box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);
					padding: 0px;
				}
				.input {'{'}
					border-radius: 50px;
				{'}'}
				.button {'{'}
					margin-top: 20px;
					margin-bottom: 20px;
					min-width: 150px;
				{'}'}
				.login-logo {'{'}
					margin: 0 auto;
					margin-bottom: 0px;
					max-height: 100px;
				{'}'} 
				.columns{'{'}
					margin: 0px;
					margin-bottom: 0px !important;
				{'}'}
				.column{'{'}
					min-height:101vh;
				{'}'}
				.interactive-bg{'{'}
					height: {this.state.elementheight+"px"}
				{'}'}
				@media (max-width: 769px) {'{'}
					.interactive-bg{'{'}
						display: none;
					{'}'}
				{'}'}
			</style>
			<div className="columns is-vcentered">
				<div className="login column is-4 " ref={this.form_part}>
					<section className="section">
						<div className="has-text-centered">
							<img className="login-logo" alt={'login_logo'} src={"assets/images/02_logo.svg"} />
						</div>
						{this.state.Notification}
						<form action={process.env.REACT_APP_Url+"/dologin"} method="POST" onSubmit={this.handleSubmit}>
							<div className="field">
								<label className="label">{ggn_lang.auth.username}</label>
								<div className="control has-icons-right">
									<input className="input username" name="username" type="text" onChange={this.handleChange} />
									<span className="icon is-small is-right"><i className="fa fa-user"></i></span>
								</div>
							</div>
							<div className="field">
								<label className="label">{ggn_lang.auth.password}</label>
								<div className="control has-icons-right">
									<input className="input password" name="password" type="password" onChange={this.handleChange} />
									<span className="icon is-small is-right"><i className="fa fa-key"></i></span>
								</div>
							</div>
							<div className="has-text-centered">
								<button className="button is-vcentered is-primary is-outlined">{ggn_lang.auth.login}</button>
							</div>
							<div className="has-text-centered">
								<a onClick={this.handleRgister} href="#" > {ggn_lang.auth.register_tex} </a>
							</div>
						</form>
					</section>
				</div>
				<Particles className="interactive-bg column is-8" ref={this.anim_part} params={{
						"particles": {
							"number": {
								"value": 50
							},
							"size": {
								"value": 3
							}
						},
						"interactivity": {
							"events": {
								"onhover": {
									"enable": true,
									"mode": "repulse"
								}
							}
						}
					}} />
			</div>
		</div>
	)}
}
export default login;
