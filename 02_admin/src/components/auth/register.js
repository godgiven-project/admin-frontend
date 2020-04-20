import React , { Component } from 'react'
import ggn_lang from '../../i18n/ggn_lang'
import Particles from 'react-particles-js'
import Bulma_Notification from '../bulma/Bulma_Notification'
class register extends Component{
	state = {
		firstname: null,
		lastname: null,
		username: null,
		password: null,
		confirm: null,
		Notification: null,
		elementheight : null
	}
	componentDidMount() {
		this.setState({ elementheight: this.form_part.current.clientHeight });
	}
	constructor(props) {
		super(props);
		this.form_part = React.createRef();
		this.anim_part = React.createRef();
	}
	handleRgister = (e) => {
		this.props.history.push("/login");
	}
	handleChange = (e) => {
	// console.log(e.target.id, e.target.value);
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleSubmit = (e) => {
		e.preventDefault();
		fetch(process.env.REACT_APP_Url + `/register`, {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: {
				'Content-Type': 'application/json',
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			body: JSON.stringify({
				Fname: this.state.firstname , 
				Lname:  this.state.lastname  ,
				username:  this.state.username	,
				password:  this.state.password	,
				confirm:  this.state.confirm	,
			}), // body data type must match "Content-Type" header
		}).then(response => response.json())
		.then(doregister => {
			if(doregister[0] === true){
				this.setState({
					Notification: <Bulma_Notification type="success" text={ggn_lang.auth.success_register} />
				});
				localStorage.setItem('Godgiven_admin_token', doregister[1]);
				localStorage.setItem('date_check',new Date().getTime()+2);
				setTimeout(() => {
					this.props.history.push("/login");
				}, 500);
			}
			else {
				Notification = <Bulma_Notification type="danger" text={ggn_lang.auth.error_register[doregister[1]]} />;
				this.setState({
					Notification: Notification
				});
			}
		});
	}
	render() {return (
		<div className="register_ggn">
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
				.register-logo {'{'}
					margin: 0 auto;
					margin-bottom: 50px;
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
				<div className="register column is-4 " ref={this.form_part}>
					<section className="section">
						<div className="has-text-centered">
							<img className="register-logo" alt={'register_logo'} src={"/assets/images/logo.png"} />
						</div>
						{this.state.Notification}
						<form action={process.env.REACT_APP_Url+"/register"} method="POST" onSubmit={this.handleSubmit}>
							<div className="field">
								<label className="label">{ggn_lang.auth.firstname}</label>
								<div className="control has-icons-right">
									<input className="input firstname" name="firstname" type="text" onChange={this.handleChange} />
									<span className="icon is-small is-right"><i className="fa fa-user"></i></span>
								</div>
							</div>
							<div className="field">
								<label className="label">{ggn_lang.auth.lastname}</label>
								<div className="control has-icons-right">
									<input className="input lastname" name="lastname" type="text" onChange={this.handleChange} />
									<span className="icon is-small is-right"><i className="fa fa-user"></i></span>
								</div>
							</div>
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
							<div className="field">
								<label className="label">{ggn_lang.auth.confirm}</label>
								<div className="control has-icons-right">
									<input className="input confirm" name="confirm" type="password" onChange={this.handleChange} />
									<span className="icon is-small is-right"><i className="fa fa-key"></i></span>
								</div>
							</div>
							<div className="has-text-centered">
								<button className="button is-vcentered is-primary is-outlined">{ggn_lang.auth.register}</button>
							</div>
							<div className="has-text-centered">
								<a onClick={this.handleRgister} > {ggn_lang.auth.login_text} </a>
							</div>
						</form>
					</section>
				</div>
				<Particles id="particles-js" className="interactive-bg column is-8" ref={this.anim_part} params={{
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
export default register;