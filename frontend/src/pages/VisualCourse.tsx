import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Grid, Paper, makeStyles, createStyles, Theme, Button, Box, CircularProgress, Slider, Typography } from '@material-ui/core';
import Course from '../components/Course';
import { getVisualizedCourses } from '../redux/actions/courses';
import { MAX_LAYERS } from '../util/UIConstants';

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
  outerContainer: {
    overflowX: "auto",
  },
  noCoursesSelected: {
    textAlign: 'center',
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

  console.log("the data: ", visualizedCourses);

  // Getting the column counts
  const depnLayers = visualizedCourses.depn.reduce((acc: number, layer: any) => (layer.length > 0 ? acc + 1 : acc), 0);
  const preReqLayers = visualizedCourses.preReqs.reduce((acc: number, layer: any) => (layer.length > 0 ? acc + 1 : acc), 0);
  // const totalLayers = depnLayers + preReqLayers + 1;
  // const spacingPerLayer = Math.floor(12 / totalLayers) as GridSpacing;
  const spacingPerLayer = 3;

  // Inverting preReq column order, since it's shown as furthest to closest.
  visualizedCourses.preReqs.reverse();

  return (
    <Paper className={classes.outerContainer}>
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
        {visualizedCourses.preReqs.map((layer: any, idx: number) => (
          layer.length > 0
            ? (
              <Grid item xs={10} md={spacingPerLayer} key={`column-${idx}`}>
                <Typography variant="h5" className={classes.center}>{`Prereq layer ${preReqLayers - idx}`}</Typography>
                <br />
                <Box>
                  <Grid container spacing={4} justify="center" direction="column">
                    {layer.map((course: any) => (
                      <Grid item key={course.courseId} className={classes.courseItem}>
                        <Course courseData={course} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            )
            : null
        ))}
        <Grid item xs={10} md={spacingPerLayer}>
          <Typography variant="h5" className={classes.center}>Target course</Typography>
          <br />
          <Grid container spacing={4} justify="center" direction="column">
            <Box className={classes.marginAbove}>
              <Course courseData={visualizedCourses.target} />
            </Box>
          </Grid>
        </Grid>
        {visualizedCourses.depn.map((layer: any, idx: number) => (
          layer.length > 0
            ? (
              <Grid item xs={10} md={spacingPerLayer} key={`column-${preReqLayers + idx}`}>
                <Typography variant="h5" className={classes.center}>{`Dependent layer ${idx + 1}`}</Typography>
                <br />
                <Box>
                  <Grid container spacing={4} direction="column">
                    {layer.map((course: any) => (
                      <Grid item key={course.courseId} className={classes.courseItem}>
                        <Course courseData={course} />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            )
            : null
        ))}
      </Grid>
    </Paper>
  );
};

const mapStateToProps = (state: any) => {
  const { visualizedCourses }: any = state;
  return { visualizedCourses };
};

export default connect(mapStateToProps, { getVisualizedCourses })(VisualCourse);
