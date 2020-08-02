import React, { useEffect } from 'react';
import { Button, Fade, Modal, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { clearModals } from '../redux/actions/modal';
import { getVisualizedCourses, getCourse } from '../redux/actions/courses';
import { COURSE_MS } from '../redux/constants';
import FavButton from './FavButton';

interface Props {
  modalState: string,
  courseId: string,
  clearModals: Function,
  getVisualizedCourses: Function,
  getCourse: Function,
  courseInfo: any,
  isLoading: boolean,
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
    maxWidth: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const CourseModal = (props: any) => {
  const { modalState, courseId, clearModals, getVisualizedCourses, getCourse, courseInfo, isLoading }: Props = props;
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const open = modalState === COURSE_MS && !isLoading;

  const handleClose = () => {
    clearModals();
  };

  const handleVisualize = () => {
    getVisualizedCourses(courseId);
    clearModals();
    if (location.pathname !== '/VisualCourse') history.push('/VisualCourse');
  };

  useEffect(() => {
    if (courseId) getCourse(courseId);
  }, [courseId, getCourse]);

  const ModalBody = () => (
    <>
      <Typography variant="h6">
        {courseInfo.title}
      </Typography>
      <Typography>
        {courseInfo.description}
      </Typography>
      <Typography color="textSecondary">
        {courseInfo.restrictionInfo ? `Restrictions: ${courseInfo.restrictionInfo}` : null}
        {(courseInfo.restrictionInfo && courseInfo.preReqs.length > 0) ? <br /> : null}
        {courseInfo.preReqs.length > 0 ? `Pre-reqs: ${courseInfo.preReqs.join(', ')}` : null}
        {((courseInfo.restrictionInfo || courseInfo.preReqs.length > 0) && courseInfo.depn.length > 0) ? <br /> : null}
        {courseInfo.depn.length > 0 ? `Dependents: ${courseInfo.depn.join(', ')}` : null}
      </Typography>
      <Typography>
        Credits:
        {' '}
        {courseInfo.credits}
      </Typography>
    </>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={classes.modal}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <div style={{ display: 'flex' }}>
            <Typography variant="h5" display="inline" style={{ flex: 1 }}>
              {courseId}
            </Typography>
            <FavButton courseId={courseInfo ? courseInfo.courseId : null} />
          </div>
          { courseInfo ? <ModalBody /> : null}
          <div style={
            {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }
          }
          >
            <Button onClick={handleVisualize}>Visualize</Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  modalState: state.modal.state,
  courseId: state.modal.courseId,
  courseInfo: state.modal.courseInfo,
  isLoading: state.modal.loading,
});

export default connect(mapStateToProps, { clearModals, getVisualizedCourses, getCourse })(CourseModal);
