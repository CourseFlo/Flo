import React, { useState } from 'react';

import {
  createStyles,
  makeStyles,
  Theme,
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  Collapse,
} from '@material-ui/core/';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import CourseListItem from './CourseListItem';

const useStyles = makeStyles((theme: Theme) => createStyles({
  courseColumn: {
    border: '2px solid light-gray',
  },
  center: {
    textAlign: 'center',
  },
}));

// To produce our columns instead
function CourseColumn(props: any) {
  const { courses, title, defaultCollapsed } = props;
  const classes = useStyles();
  const [open, setOpen] = useState(defaultCollapsed);

  const spacingPerLayer = 2;

  return (
    <Grid item xs={10} md={spacingPerLayer}>
      <List className={classes.courseColumn}>
        <ListItem button onClick={() => setOpen(!open)}>
          <ListItemText primary={
            <Typography variant="h5" className={classes.center}>{title}</Typography>
            }
          />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {courses.map((course: any) => (
            <CourseListItem key={course.courseId} courseData={course} />
          ))}
        </Collapse>
      </List>
    </Grid>
  );
}

export default CourseColumn;
