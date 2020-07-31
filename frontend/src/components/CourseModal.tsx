import React from 'react';
import { Button, Fade, Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { clearModals } from '../redux/actions/modal';
import { getVisualizedCourses } from '../redux/actions/courses';

interface Props {
  open: boolean,
  courseId: string,
  clearModals: Function,
  getVisualizedCourses: Function,
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    width: '80%',
    maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CourseModal = (props: any) => {
  const { open, courseId, clearModals, getVisualizedCourses }: Props = props;
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    clearModals();
  };

  const handleVisualize = () => {
    getVisualizedCourses(courseId);
    clearModals();
    history.push('/VisualCourse');
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <Typography variant="h5" align="center">
            I am course modal for
            {' '}
            {courseId}
          </Typography>
          <Button onClick={handleVisualize}>Visualize</Button>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  open: state.modal.course,
  courseId: state.modal.courseId,
});

export default connect(mapStateToProps, { clearModals, getVisualizedCourses })(CourseModal);
