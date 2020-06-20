import React from 'react';
import './visualCourse.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DisplayedCourse(props: any) {
  const classes = useStyles();

  return (
    <Box display="flex" alignSelf="flex-end">
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.courseStringCode} {props.courseDigitCode}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Expand</Button>
      </CardActions>
    </Card>
    </Box>
  );
}
/*
const DisplayedCourse = (props: any) => {
  return (
  <div className='displayedCourse'>
      <h1>{props.courseStringCode} {props.courseDigitCode}</h1>
      <p>{props.description}</p>
  </div>);
};

export default DisplayedCourse;
*/
