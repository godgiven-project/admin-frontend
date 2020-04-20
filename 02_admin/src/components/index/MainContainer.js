import React from 'react';
import Routs from '../Deap_routs';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import UserTool from './header/UserTool';
import Icons from "../assets/images/icons/Icons";
import clsx from 'clsx';


//import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
//import MailIcon from '@material-ui/icons/Mail';
//import Container from '@material-ui/core/Container';
//import ItemsCarousel from 'react-items-carousel';
//import StickyFooter from "./header/footer/StickyFooter"; 
//import StickyFooter from "./StickyFooter";
//import RequestCard from "./RequestCard";
//import SingleRow from "./SingleRow";
//import NiceCard2 from "./NiceCard";
const drawerWidth = 200;
const useStyles = makeStyles(theme => ({
	root: {
		
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
			transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 1,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
	},
	drawerOpen: {
		width: drawerWidth,
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		overflowX: 'hidden',
		width: theme.spacing(5),
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(12) + 1,
		},
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
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		paddingTop:theme.spacing(6),
		paddingLeft:theme.spacing(15),
	},
	drawer_list_item:{
		display:"list-item",
		paddingLeft:"0px",
		paddingRight:"0px",
		textAlign:"center"
	},
	drawer_list_item_icon:{
		display: "inherit"
	},
	drawer_list_item_text:{
		fontFamily: 'Vazir',
		opacity:0
	},
	drawer_list_item_text_open:{
		fontFamily: 'Vazir',
		fontSize : '12px'
	}
}));
export default function MainContainer() {
	//const [isGoToSearchProcess, setIsGoToSearchProcess] = React.useState(false);
	const [searchValue, setSearchValue] = React.useState();
	const classes = useStyles();
	const theme = useTheme();
	//const [open, setOpen] = React.useState(false);
	const [main_Drawer, setDrawer] = React.useState(false);
	const open = false;
	function setSearchContent(e) {
		setSearchValue(e.target.value);
		
	}

	function redirectToSearchPage (e) {
		
		switch (e.keyCode) {
			case 13 :
				window.location.href = `/#/search/${searchValue}`;
				// setIsGoToSearchProcess(true);
		}
	}
	function toggleDrawer(event) {
		var x = event.type;
		if(main_Drawer === false){
			setDrawer(true);
		}
		else{
			setDrawer(false);
		}
	};
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position="fixed" className={clsx(classes.appBar, { [classes.appBarShift]: open, })}  color="default">
				<Toolbar>
					<UserTool edge="start" />
					{ /*<img src="https://fizik.app/api/files/background/logo.png" height="50" />*/ }
					<div className={classes.search} edge="start">
						<InputBase
						onChange={ (e) => setSearchContent(e) }
						onKeyDown={ (e) => redirectToSearchPage(e) }
						placeholder="جستجو کنید"
						classes={{
						root: classes.inputRoot,
						input: classes.inputInput,
						}}
						inputProps={{ 
						'aria-label': 'search',
						style: {
						fontFamily: "Vazir",
						fontSize: '13px'
						}
						}}
						/>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
					</div>
					<div style={{ display: "block", flexGrow:1 }}> </div>
					<IconButton
						color="inherit"
						onClick={(event) => toggleDrawer(event)}
						edge="start"
						className={clsx(classes.menuButton, {
						[classes.hide]: open,
						})}
						>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				className={clsx(classes.drawer, {
				[classes.drawerOpen]: main_Drawer,
				[classes.drawerClose]: !main_Drawer,
				})}
				classes={{
				paper: clsx({
				[classes.drawerOpen]: main_Drawer,
				[classes.drawerClose]: !main_Drawer,
				}),
				}}
				open={main_Drawer}
				>
				<div className={classes.toolbar}>
					<IconButton onClick={(event) => toggleDrawer(event)}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					{[
						{'icon':<Icons/>, 'text':'صفحه اصلی آموزش','link':'/'}, 
						{'icon':<Icons icon="Test"/>, 'text':'حل تست و تمرین','link':'/exercises'}, 
					].map((text, index) => (
						<ListItem button key={"main_side_toolbar_one"+index} component={Link} to={text.link} onClick={(event)=>toggleDrawer(event,'left', false)}>
							<ListItemIcon className={classes.drawer_list_item_icon}></ListItemIcon>
							{main_Drawer?<ListItemText primary={
								<Typography className={classes.drawer_list_item_text_open}>
								{text.text}
								</Typography>} />:<span></span>}
						</ListItem>
					))}
				</List>
			</Drawer>
			{ /*<SwipeableDrawer
			anchor="left"
			open={main_Drawer}
			onClose={(event) =>toggleDrawer(event, 'left', false)}
			onOpen={(event) =>toggleDrawer(event, 'left', true)}
			>
				<div className={classes.toolbar}>
					<IconButton onClick={(event)=>toggleDrawer(event,'left', false)}>
						{theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
			</SwipeableDrawer>*/ }
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Routs />
			</main>
			{/*<StickyFooter />*/}
		</div>
	);
}
