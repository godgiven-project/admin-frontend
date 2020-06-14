import React , { Component }  from 'react';
import Routs from '../Deap_routs';
import {HashRouter, Route, Link } from "react-router-dom";
import { makeStyles, fade, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import StarBorder from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import ArrowUp from '@material-ui/icons/ArrowDropUpRounded';
import ArrowDown from '@material-ui/icons/ArrowDropDownRounded';
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAddRounded';
import MenuIcon from '@material-ui/icons/Menu';
import ExitIcon from '@material-ui/icons/ExitToAppRounded';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Icons from "../assets/images/icons/Icons";
import ggn_lang from '../i18n/ggn_lang';
/*********************************************************/
/*********************************************************/
import Home from './index/Home';
import Users from './users/Users';
//import clsx from 'clsx';
//import UserTool from './header/UserTool';

class MainContainer extends React.Component {
	state = {
		main_Drawer: false,
		open_menu_user_management:false,
	}
	toggleDrawer = (event) => {
		if(this.state.main_Drawer === false){
			this.setState({
				main_Drawer: true
			});
		}
		else{
			this.setState({
				main_Drawer: false
			})
		}
	}
	open_menu_list = (side) => {
		var side_state = "open_menu_"+side;
		if(this.state[side_state] === false){
			this.setState({
				[side_state]: true
			});
		}
		else{
			this.setState({
				[side_state]: false
			})
		}
	}
	Go_to_logout = (e) => {
		localStorage.setItem('Godgiven_admin_token', '');
	}
	return_menu_list_state = (side) =>{
		var side_state = "open_menu_"+side;
		return this.state[side_state];
	}
	render() {
		const drawerWidth = 260;
		const drawerMargin = 80;
		const theme = createMuiTheme();
		const classes = {
			appBar: {
				zIndex: theme.zIndex.drawer + 1,
					transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
			},
			body_padding_rtl:{},
			body_padding_ltr:{
				paddingLeft:`${drawerWidth}px`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			},
			menuButton: {
				marginRight: 1,
			},
			toolbar: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'flex-end',
				padding: theme.spacing(0, 1),
				...theme.mixins.toolbar,
			},
			search: {
				position: 'relative',
				borderRadius: theme.shape.borderRadius,
				backgroundColor: fade(theme.palette.common.white, 0.15),
				'&:hover': {
					backgroundColor: fade(theme.palette.common.white, 0.25),
				},
				marginRight: theme.spacing(2),
				marginLeft: 0,
				width: '50%',
				[theme.breakpoints.up('sm')]: {
					marginLeft: theme.spacing(3),
					width: 'auto',
				},
				border: "1px solid #c1c1c1",
			},
			searchIcon: {
				width: theme.spacing(7),
				height: '100%',
				position: 'absolute',
				pointerEvents: 'none',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				top: 0,
				left: 0
			},
			inputRoot: {
				color: 'inherit',
			},
			inputInput: {
				padding: theme.spacing(1, 1, 1, 7),
				transition: theme.transitions.create('width'),
				width: '100%',
				[theme.breakpoints.up('md')]: {
					width: 200,
				},
				textAlign: "right"
			},
			drawer_list_item:{
				display:"list-item",
				paddingLeft:"0px",
				paddingRight:"0px",
				textAlign:"center"
			},
			drawer_list_item_icon:{
				display: "inherit",
				fontSize: "32px"
			},
			drawer_list_item_text:{
				fontFamily: 'Vazir',
				opacity:0
			},
			drawer_list_item_text_open:{
				fontFamily: 'Vazir',
				fontSize : '12px'
			}
		};
		var body_padding = {};
		var appBarShift = {};
		var offset_body = 0;
		if( this.state.main_Drawer ){
			offset_body = drawerWidth;
		} else {
			offset_body = drawerMargin;
		}
		if( process.env.REACT_APP_Dir  === "rtl" ) {
			body_padding = {
				paddingRight:`${offset_body}px`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			}
			appBarShift ={
				width: `calc(100% - ${offset_body}px)`,
				marginRight: `${offset_body}px`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			}
		}
		else{
			body_padding = {
				paddingLeft:`${offset_body}px`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			}
			appBarShift ={
				width: `calc(100% - ${offset_body}px)`,
				marginLeft: `${offset_body}px`,
				transition: theme.transitions.create(['width', 'margin'], {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.enteringScreen,
				}),
			}
		}
		return (
			<div style={body_padding}>
				<CssBaseline />
				{/*<AppBar position="fixed" className={this.state.main_Drawer ? "godgiven_appBarShift" : ""} style={classes.appBar , this.state.main_Drawer ? classes.appBarShift : {} }  color="default">*/ }
				{/*<AppBar position="static" style={appBarShift}>*/}
				<AppBar position="static" className="godgiven_appbar">
					<Toolbar>
						<IconButton
							color="default"
							onClick={(event)=>this.toggleDrawer()}
							edge="end"
							>
							<MenuIcon />
						</IconButton>
						<div style={{ display: "block", flexGrow:1 }}> </div>
						<IconButton
							color="default"
							onClick={(event)=>this.Go_to_logout()}
							edge="end"
							component={Link} 
							to={"/login"}
							/*style={this.state.main_Drawer ? classes.menuButton:classes.hide}*/
							>
							<ExitIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Drawer
					variant="permanent"
					className= { this.state.main_Drawer ? "godgiven_side_menu  godgiven_side_menu_open" : "godgiven_side_menu godgiven_side_menu_close" }
					open={this.state.main_Drawer}
					anchor={ process.env.REACT_APP_Dir === "rtl" ? "right" : "left" }
					transitionDuration={450}
					>
					<ListItem className="godgiven_toolbar_pin_logo" button key={"main_side_toolbar_one_user_management"} onClick={(event)=>this.toggleDrawer()}>
						<ListItemIcon className="godgiven_toolbar_logo">
							<img style={classes.drawer_list_item_icon} src="/assets/images/01_logo_waite.svg" />
						</ListItemIcon>
						<ListItemText primary={
						<Typography style={classes.drawer_list_item_text_open}>
							{ggn_lang.AppName}
						</Typography>} />
					</ListItem>
					<Divider />
					<div className="godgiven_scroll_toolbar">
						<List>
							{[
								{'icon':<DashboardIcon style={classes.drawer_list_item_icon} />, 'text':ggn_lang.panel.Dashboard ,'link':'/panel'}, 
								
							].map((text, index) => (
								<ListItem button key={"main_side_toolbar_one"+index} component={Link} to={text.link}>
									<ListItemIcon style={classes.drawer_list_item_icon}>
										{text.icon}
									</ListItemIcon>
									<ListItemText primary={
										<Typography style={classes.drawer_list_item_text_open}>
										{text.text}
										</Typography>} />
								</ListItem>
							))}
							<ListItem button key={"main_side_toolbar_one_user_management"} onClick={(event)=>this.open_menu_list('user_management')}>
								<ListItemIcon style={classes.drawer_list_item_icon}>
									<PeopleIcon style={classes.drawer_list_item_icon} />
								</ListItemIcon>
								<ListItemText primary={
								<Typography style={classes.drawer_list_item_text_open}>
									{ggn_lang.panel.PersonsManagement}
								</Typography>} />
								{this.return_menu_list_state('user_management') ? <ArrowUp className="spin_to_down" /> : <ArrowDown className="spin_to_up" />}
							</ListItem>
						</List>
						<Collapse in={this.return_menu_list_state('user_management')} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<ListItem button className={classes.nested} component={Link} to={"/panel/users"}>
									<ListItemIcon>
										<PeopleIcon style={classes.drawer_list_item_icon} />
									</ListItemIcon>
									<ListItemText primary={<Typography style={classes.drawer_list_item_text_open}>
										{ggn_lang.panel.Persons}
										</Typography>} />
								</ListItem>
								<ListItem button className={classes.nested}>
									<ListItemIcon>
										<PersonAddIcon style={classes.drawer_list_item_icon} />
									</ListItemIcon>
									<ListItemText primary={<Typography style={classes.drawer_list_item_text_open}>
										{ggn_lang.panel.AddPerson}
										</Typography>} />
								</ListItem>
							</List>
						</Collapse>
					</div>
				</Drawer>
				<main className="godgiven_main_page_container">
					<HashRouter>
						<Route exact path="/panel" component={Home} />
						<Route path="/panel/users" component={Users} />
					</HashRouter>
				</main>
				{/*<StickyFooter />*/}
			</div>
		);
	}
}
export default MainContainer;