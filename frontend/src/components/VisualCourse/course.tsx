import React from 'react';
import './visualCourse.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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

export default function Course(props: any) {
  // const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">
          {props.courseId}
        </Typography>
        <Typography variant="caption">
          {props.title}
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => {
          console.log('You are here with course: ');
          console.log(props);
        }}
        >
          Details
        </Button>
        <Button href={props.website}>Visit Site</Button>
      </CardActions>
    </Card>

  );
}
