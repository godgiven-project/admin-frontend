import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


//import Card from '@material-ui/core/Card';
//import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
//import CardContent from '@material-ui/core/CardContent';
//import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
//import ThumbDown from '@material-ui/icons/ThumbDown';
//import Visibility from '@material-ui/icons/Visibility';


const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
});

class WatchedvideosCard extends React.Component {

constructor(props) {
  super (props);
  this.state = {
    targetUrl : null
  }
}

componentDidMount() {
  // console.info('pr:', this.props);
  let targetUrl = null;
  switch (this.props.item.model) {
    case 'sciencechallenge':
      targetUrl = 'sciencechallenge';
      break;
    
    case 'products':
      targetUrl = 'product';
      break;
    
      case 'beyondthebooks':
      targetUrl = 'beyondthebook';
      break;
  }

  this.setState({targetUrl: targetUrl});
}
render() {
  const theme = createMuiTheme();
  const classes = {
    card: {
    maxWidth: 345,
    },
    padding_style:{
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    }
  }
  return (
    <React.Fragment>
    <div style={classes.padding_style} >
      <Link
        component={RouterLink} 
        to={`${this.state.targetUrl}/${this.props.item.modelId}`}>
      <Paper
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${this.props.item.thumbnail})`,
          height:'142px',
          backgroundSize: "cover",
          width: '100%',
          position: 'relative',
          borderRadius:0
        }}
      >
        <Typography style={{
          fontFamily: 'IranSans',
          color: 'white',
          direction: 'rtl',
          position: 'relative',
          top: '67%',
          right: '2%',
          fontSize: '12px'
        }}>
          {this.props.item.name}
        </Typography>
        
        {/* <Typography style={{
          fontFamily: 'IranSans_UltraLight',
          color: 'white',
          direction: 'rtl',
          position: 'relative',
          top: '67%',
          right: '2%',
          fontSize: '12px'
        }}>
        {this.props.item.title}
        </Typography> */}
        
        <div style={{
          bottom: '0',
          position: 'absolute',
          backgroundColor:'#0000004d',
          width: '100%',
          // borderRadius: '7px'
        }}>
          
          <ThumbUp 
            fontSize="small" 
            style={{
                color : 'white',
                marginLeft: '8px',
                marginTop: '2px',
                marginBottom: '0px'
            }}
          />
        <span style={{
                color: 'white',
                fontFamily: 'verdana',
                fontSize: '12px',
                marginLeft: '2px',
                paddingTop: '5px',
                position: 'absolute'
            }}>{this.props.item.likes}</span>  
        </div>
        <div
          style={{
            bottom: '0',
            position: 'absolute',
            backgroundColor:'#0000004d',
            width: '100%',
          }}
        >
          <div
            style={{
              bottom: '0',
              position: 'absolute',
              backgroundColor:'red',
              height: '8px',
              width: `${this.props.item.percent}%`,
            }}
          >
          {/* percent */}
        </div>
        </div>
      </Paper>
      </Link>
    </div>
    </React.Fragment>
    
  );
}
  
}

export default WatchedvideosCard;