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
  const classes = useStyles();

  return (
    <Box display="flex" alignSelf="flex-end">
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.courseStringCode} {props.courseDigitCode}
          </Typography>
          <Typography variant="body2" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </Box>

  );
}

