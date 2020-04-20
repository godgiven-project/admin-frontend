import React , { Component } from 'react'
class Bulma_Notification extends Component{
	state = {
		animclass: ""
	}
	constructor(props) {
		super(props);
		this.Notification = React.createRef();
  	}
	cross = (e) => {
		this.setState({
			animclass: "ggn_fadeOutRight"
		});
	};
	render(type , text) { return (
		<div>
			{ /*<style>
				@keyframes fadeOutRight {"{"}
					0% {"{"} 
						opacity: 1;
						transform: translateX(0); 
						height: inherit;
						width: inherit;
					{"}"}  
					100% {"{"} 
						opacity: 0;
						transform: translateX(20px);
						height: 0px;
						width: 0px;	
						padding: 0px;					
					{"}"}
				{"}"}
				.ggn_fadeOutRight {"{"}  
					animation-duration: 2s; 
					animation-fill-mode: both; 
					animation-name: fadeOutRight; 
				{"}"} 
			</style>*/ }
			<div className={"notification is-"+this.props.type} style={{marginBottom: '10px'}}>
				{/*<button className="delete" onClick={this.cross}></button>*/ }
				{this.props.text}
			</div>
		</div>
	)}
}
export default Bulma_Notification;