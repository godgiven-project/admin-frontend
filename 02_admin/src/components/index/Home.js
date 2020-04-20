import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/PeopleAltRounded';
import LockIcon from '@material-ui/icons/LockRounded';
import RemoveIcon from '@material-ui/icons/RemoveCircleRounded';
import Container from '@material-ui/core/Container';
import Skeleton from '@material-ui/lab/Skeleton';
import ggn_lang from '../../i18n/ggn_lang';
// import StickyFooter from "../header/footer/StickyFooter";
//import AdsPanel from "./AdsPanel";
//import Gerdali from "./Gerdali/Gerdali";
//import SingleRow from "./SingleRow";
//import RequestRow from "./RequestRow";


//import Paper from '@material-ui/core/Paper';
//import NiceCard from "./NiceCard";
//import MainHeader from "./MainHeader";
//import MainFooter from "./MainFooter";
//import RequestCard from "./RequestCard";
//import HeaderSlider from "../header/header/HeaderSlider";
//import ReactTourGuideSlider from "./ReactTourGuideSlider";
//import Typography from '@material-ui/core/Typography';
class Home extends React.Component {
	state = {
		count_show: null
	}
	constructor(props) {
		super(props);
		this.state = {
			numberOfWatchedVideos : 0
		}
	}
	componentDidMount() {
		var token = window.localStorage.getItem('Godgiven_admin_token');
		// check if logged in user hase watched any video or not
		fetch(process.env.REACT_APP_Url, {
			method: 'GET', // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, cors, *same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			//credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
				'authorization': `Bearer ${token}`,
			},
			redirect: 'follow', // manual, *follow, error
			referrer: 'no-referrer', // no-referrer, *client
			// body: JSON.stringify(data), // body data type must match "Content-Type" header
			})
			.then(response => response.json())
			.then(result => {
				if (!result.validate) {
					window.localStorage.removeItem('Godgiven_admin_token');
				} else {
					//console.log(result);
					this.setState({
						count_show: result.data
					});
				}
			});
	}

	render() {		
		return (
			<React.Fragment>
				<Grid container justify="center" alignItems="center" spacing={5}>
					<Grid item xs={12} sm={12} md={3}>
						{ 
							this.state.count_show ?
							<Card className={"hero godgiven_is_blue ggn_dashboard_slice"}>
								<CardContent>
									<PeopleIcon />
									<h2 className="title">{this.state.count_show.count_persons}</h2>
									<h3 className="subtitle">{ggn_lang.panel.Persons}</h3>
								</CardContent>
							</Card>
							:
							<div>
								<Skeleton variant="text" />
								<Skeleton variant="circle" width={40} height={40} />
								<Skeleton variant="rect" width={"100%"} height={40} />
							</div>
						}

					</Grid>
					<Grid item xs={12} sm={12} md={3}>
						{ 
							this.state.count_show ?
							<Card className={"hero godgiven_is_green ggn_dashboard_slice"}>
								<CardContent >
									<PeopleIcon />
									<h2 className="title">{this.state.count_show.count_users}</h2>
									<h3 className="subtitle">{ggn_lang.panel.Users}</h3>
								</CardContent>
							</Card>
							:
							<div>
								<Skeleton variant="text" />
								<Skeleton variant="circle" width={40} height={40} />
								<Skeleton variant="rect" width={"100%"} height={40} />
							</div>
						}
					</Grid>
					<Grid item xs={12} sm={12} md={3}>
						{ 
							this.state.count_show ?
							<Card className={"hero godgiven_is_orange ggn_dashboard_slice"}>
								<CardContent>
									<LockIcon />
									<h2 className="title">{this.state.count_show.count_disable}</h2>
									<h3 className="subtitle">{ggn_lang.panel.Disables}</h3>
								</CardContent>
							</Card>
							:
							<div>
								<Skeleton variant="text" />
								<Skeleton variant="circle" width={40} height={40} />
								<Skeleton variant="rect" width={"100%"} height={40} />
							</div>
						}
					</Grid>
					<Grid item xs={12} sm={12} md={3}>
						{ 
							this.state.count_show ?
							<Card className={"hero godgiven_is_red ggn_dashboard_slice"}>
								<CardContent>
									<RemoveIcon />
									<h2 className="title">{this.state.count_show.count_block}</h2>
									<h3 className="subtitle">{ggn_lang.panel.Blocks}</h3>
								</CardContent>
							</Card>
							:
							<div>
								<Skeleton variant="text" />
								<Skeleton variant="circle" width={40} height={40} />
								<Skeleton variant="rect" width={"100%"} height={40} />
							</div>
						}
					</Grid>
				</Grid>				
			</React.Fragment>	 
		);
	}
}

export default Home;