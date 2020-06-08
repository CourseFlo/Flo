// rename to Home
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// List Items
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Form Input
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    width: '25%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20
  },
  details: {
    alignItems: 'center'
  },
  column: {
    flexBasis: '33.33%'
  },
  helper: {
    borderLeft: `2px solid ${
      theme.palette.divider
      }`,
    padding: theme.spacing(1, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  listItem: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inputField: {
    width: '30ch',
  },
  spacedBox: {
    float: 'right',
  },
}));

export default function DetailedExpansionPanel() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <div className={
        classes.root
      }>
        <Box paddingTop={10} p={3}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header">
            <div className={
              classes.column
            }>
              <Typography className={
                classes.heading
              }>CourseFlo</Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List component="nav"
              className={
                classes.listItem
              }
              aria-label="profile navigation">
              <ListItem button>
                <ListItemText primary="Browse all courses" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="View my courses" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Customize my profile" />
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        </Box>
      </div>
      <div className={classes.column} />
      <div className={classes.root}>
              <Card>
                <CardActions className={classes.inputField} >
                  <Typography className={classes.heading}>Name</Typography>
                  <Grid container justify="flex-end" >
                    <TextField className={classes.spacedBox}  id="user-name" label="Give us a name!"  fullWidth />
                  </Grid>
                </CardActions>
                <CardActions className={classes.inputField}>
                  <Typography className={classes.heading}>Degree</Typography>
                  <Grid container justify="flex-end" >
                    <TextField  className={classes.spacedBox} id="degree-textbox" label="What are you studying?" fullWidth />
                  </Grid>
                </CardActions>
                <CardActions className={classes.inputField}>
                  <Typography className={classes.heading}>Major</Typography>
                  <Grid container justify="flex-end" >
                    <TextField className={classes.spacedBox}  id="degree-major" label="Major" fullWidth />
                  </Grid>
                </CardActions>
                <CardActions className={classes.inputField}>
                  <Typography className={classes.heading}>Year Level</Typography>
                  <Grid container justify="flex-end" >
                  <TextField className={classes.spacedBox}  id="degree-year" label="Year Level" fullWidth />
                  </Grid>
                </CardActions>
              </Card>
      </div>
    </Grid>
  );
}
