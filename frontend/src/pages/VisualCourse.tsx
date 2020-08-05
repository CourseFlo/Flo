import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import { Grid, Paper, makeStyles, createStyles, Theme, Button, Box, GridSpacing } from '@material-ui/core';
import Course from '../components/Course';
import { getVisualizedCourses } from '../redux/actions/courses';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
    margin: 100,
  },
  targetTitle: {
    textAlign: 'center',
  },
  container: {
    marginTop: '20px',
    marginBottom: '20px',
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
}));

interface Props {
  visualizedCourses: any,
  getVisualizedCourses: Function,
}

const VisualCourse = (props: Props) => {
  const { visualizedCourses, getVisualizedCourses }: Props = props;
  const history = useHistory();
  const [layers, setLayers] = useState(3);
  const classes = useStyles();

  if (!visualizedCourses.targetId || visualizedCourses.error || visualizedCourses.loading) {
    return (
      <div className={classes.noCoursesSelected}>
        <h2>
          We recommend&nbsp;
          <Link to="/Browse">searching for a course</Link>
        </h2>
        &nbsp;or
        <div>
          <Button
            variant="text"
            size="medium"
            onClick={() => getVisualizedCourses('CPSC 210', layers)}
          >
            jump in with CPSC 210!
          </Button>
        </div>
      </div>
    );
  }

  console.log("the data: ", visualizedCourses)

  const depnLayers = visualizedCourses.depn.reduce((acc: number, layer: any) => (layer.length > 0 ? acc + 1 : acc), 0);
  const preReqLayers = visualizedCourses.preReqs.reduce((acc: number, layer: any) => (layer.length > 0 ? acc + 1 : acc), 0);
  const totalLayers = depnLayers + preReqLayers + 1;
  // const spacingPerLayer = Math.floor(12 / totalLayers) as GridSpacing;
  const spacingPerLayer = 'auto';
  console.log(spacingPerLayer);

  const preReqs = visualizedCourses.preReqs.filter((layer: any) => (layer.length > 0));
  preReqs.reverse();
  const depn = visualizedCourses.depn.filter((layer: any) => (layer.length > 0));
  return (
    <>
      <Grid container spacing={3} justify="center" alignItems="flex-start" className={classes.container}>
        {preReqs.map((layer: any, idx: number) => (
          <Grid item xs={1} md={spacingPerLayer} key={`column-${idx}`}>
            <h3 className={classes.targetTitle}>{`Dependent layer ${preReqs.length - idx}`}</h3>
            <br />
            <Paper>
              <Grid container spacing={4} justify="center" direction="column">
                {layer.map((course: any) => (
                  <Grid item key={course.courseId} xs={11} className={classes.courseItem}>
                    <Course courseData={course} />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
        <Grid item xs={1} md={spacingPerLayer}>
          <h2 className={classes.targetTitle}>Target course</h2>
          <br />
          <Paper>
            <Grid container spacing={4} justify="center" direction="column">
              <Grid item xs={11} className={classes.courseItem}>
                <Course courseData={visualizedCourses.target} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {visualizedCourses.depn.map((layer: any, idx: number) => (
          layer.length > 0
            ? (
              <Grid item xs={1} md={spacingPerLayer} key={`column-${preReqLayers + idx}`}>
                <h3 className={classes.targetTitle}>{`Dependent layer ${idx + 1}`}</h3>
                <br />
                <Paper>
                  <Grid container spacing={4} direction="column">
                    {layer.map((course: any) => (
                      <Box key={course.courseId} className={classes.courseItem}>
                        <Course courseData={course} />
                      </Box>
                    ))}
                  </Grid>
                </Paper>
              </Grid>
            )
            : null
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
