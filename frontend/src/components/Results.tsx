import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';

import { Course } from '../type-interfaces/Course';
import MiniCourse from './MiniCourse';

interface ResultsState {
  searchResults: any,
}

interface Props {
  searchResults: Course[],
}

const Results = (props: Props) => {
  const { searchResults }: Props = props;

  searchResults.sort((a, b) => (a.courseDigitCode > b.courseDigitCode ? 1 : -1));

  return (
    <Grid container spacing={3}>
      {searchResults.map((course) => (
        <MiniCourse key={course.courseId} courseData={course} />
      ))}
    </Grid>
  );
};

const mapStateToProps = (state: ResultsState) => {
  const { searchResults }: ResultsState = state;
  return { searchResults };
};

export default connect(mapStateToProps)(Results);
