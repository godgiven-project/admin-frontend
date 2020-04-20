import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme } from '@material-ui/core/styles';
import './gerdali.css';

//import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
//import DoneIcon from '@material-ui/icons/Done';
//import MusicVideoIcon from '@material-ui/icons/MusicVideo';
class Gerdali extends React.Component {
	
	constructor(props) {
		super (props);
		this.state = {
			categories : []
		}
	}

	componentDidMount() {
		fetch(process.env.REACT_APP_API_URL+`categories/`, {
			method: 'GET', 
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				// 'authorization': `Bearer ${token}`,
			},
			redirect: 'follow',
			referrer: 'no-referrer',
			})
			.then(response => response.json())
			.then(category => {
				// console.info('category:', category);
				this.setState(function(state, props) {
					return {
						categories: category.data.data
						}
				  }, () => {
					
				  });
			});
	}

	render() {
		const theme = createMuiTheme();
		const classes = {
			gerdali_link:{
				fontFamily: 'IranSans_Ultralight',
				fontSize: '20px',
				margin:'0',
				lineHeight:'2',
				fontWeight: 'bold',
				color: 'inherit',
				display: "block",
				width: "100%",
				padding:theme.spacing(1),
				overflow:"hidden",
				textAlign: 'center'
			},
			gerdali_main:{
				position: 'relative',
				height: '30vh',
				width: '100%',
				display: 'inline-block'
			}
		}
		return(
			<Grid container justify="center" alignItems="center" spacing={0}>
				{this.state.categories.map(
					(item, index) => 
					<Grid container item xs={4} sm={4} md={4} lg={4} xl={4}>
						<Link 
							style={classes.gerdali_link}
							key={'Gerdali_'+index}
							component={RouterLink} 
							to={`/category/${item.id}`}>
							<div
							style={classes.gerdali_main}
							>
								<div className="profile-wrap">
								<div className={"pulse1"}></div>
								<div className="pulse2"></div>
								<div className="profile-overlay"
									style={{
										backgroundImage: `url(${item.thumbnail})`,
										backgroundSize: 'cover',
										backgroundColor: "#fff"
									}}
									></div>
								<div className="profile-image"></div>
								<div className="profile-name">
									<h2>
										{item.name}
										
										<span> 
											ویدیوهای آموزشی
										</span>
									</h2>
								</div>
								
								</div>
							</div>
						</Link>
					</Grid>
				)}
			</Grid>
			
		)
	}
}

export default Gerdali;