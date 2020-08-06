import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, makeStyles, createStyles, Theme, Button, CircularProgress, Slider, Typography, List, ListItemText, ListItem, useMediaQuery, useTheme } from '@material-ui/core';

import CourseListItem from '../components/CourseListItem';
import { getVisualizedCourses } from '../redux/actions/courses';
import { MAX_LAYERS } from '../util/UIConstants';
import CourseColumn from '../components/CourseColumn';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 100,
  },
  container: {
    marginTop: '20px',
    marginBottom: '20px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  noCoursesSelected: {
    textAlign: 'center',
  },
  courseColumn: {
    border: '2px solid light-gray',
  },
  courseItem: {
  },
  progressCircle: {
    textAlign: 'center',
    margin: '10px',
  },
  center: {
    textAlign: 'center',
  },
  marginAbove: {
    marginTop: '20px',
  },
}));

interface Props {
  visualizedCourses: any,
  getVisualizedCourses: Function,
}

const VisualCourse = (props: Props) => {
  const { visualizedCourses, getVisualizedCourses }: Props = props;
  const [layers, setLayers] = useState(visualizedCourses.layers);
  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up('md'));
  console.log("Current default open value", matchesMd);

  // On initial or error screen
  if (!visualizedCourses.targetId || visualizedCourses.error) {
    return (
      <>
        <Typography variant="h2" className={classes.center}>Visualizer</Typography>
        <div className={classes.noCoursesSelected}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={() => history.push('/Browse')}
          >
            Take me to search
          </Button>
          <Typography variant="body2"> or </Typography>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            onClick={() => getVisualizedCourses('CPSC 210', layers)}
          >
            jump in with CPSC 210!
          </Button>
        </div>
      </>
    );
  }

  // Loading screen
  if (visualizedCourses.loading) {
    return (
      <>
        <Typography variant="h2" className={classes.center}>Visualizer</Typography>
        <div className={classes.progressCircle}><CircularProgress /></div>
      </>
    );
  }

  const arr = Array.from(Array(MAX_LAYERS).keys());
  const sliderMarks = arr.map((_v, i) => ({
    value: i + 1,
    label: i + 1,
  }));
  // Inverting preReq column order, since it's shown as furthest to closest.
  const otherArr = [...visualizedCourses.preReqs].reverse();

  return (
    <>
      <Typography variant="h2" className={classes.center}>Visualizer</Typography>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justify="center"
      >
        <Grid item xs={10} md={5}>
          <Slider
            value={layers}
            onChange={(_e, newVal) => setLayers(newVal)}
            orientation="horizontal"
            min={1}
            max={MAX_LAYERS}
            step={1}
            valueLabelDisplay="auto"
            marks={sliderMarks}
            aria-labelledby="range-slider"
          />
        </Grid>
        <Grid item xs={3} md={2}>
          <Button
            onClick={() => getVisualizedCourses(visualizedCourses.targetId, layers)}
            size="medium"
            variant="outlined"
            className={classes.center}
          >
            Update layers
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="flex-start" className={classes.container}>
        {otherArr.map((layer: any, idx: number) => (
          <CourseColumn courses={layer} title={`PreReq ${visualizedCourses.preReqs.length - idx}`} key={`column-${idx}`} defaultCollapsed={matchesMd} />
        ))}
        <Grid item xs={10} md={2}>
          <Grid container spacing={4} justify="center" direction="column">
            <List className={classes.courseColumn}>
              <ListItem>
                <ListItemText primary={
                  <Typography variant="h5" className={classes.center}>Target course</Typography>
                  }
                />
              </ListItem>
              <CourseListItem courseData={visualizedCourses.target} />
            </List>
          </Grid>
        </Grid>
        {visualizedCourses.depn.map((layer: any, idx: number) => (
          <CourseColumn courses={layer} title={`FollowUp ${idx + 1}`} key={`column-${visualizedCourses.preReqs.length + idx}`} defaultCollapsed={matchesMd} />
        ))}
      </Grid>
    </>
  );
};

const mapStateToProps = (state: any) => {
  const { visualizedCourses }: any = state;
  return { visualizedCourses };
};

export default connect(mapStateToProps, { getVisualizedCourses })(VisualCourse);
