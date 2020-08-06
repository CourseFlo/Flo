import React from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import {
  Button,
  createStyles,
  makeStyles,
  Theme,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from '@material-ui/core/';

import { openCourseModal } from '../redux/actions/modal';
import FavButton from './FavButton';
import { getVisualizedCourses } from '../redux/actions/courses';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  primary: {
    fontSize: '15px',
  },
  secondary: {
    width: '90%',
  },
  buttons: {
    flexDirection: 'column',
  },
}));

// TODO Review option, otherwise delete
// Alternative to Course Card, to produce lists instead
function CourseListItem(props: any) {
  const { courseData, openCourseModal, getVisualizedCourses } = props;
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();

  const handleVisualize = () => {
    getVisualizedCourses(courseData.courseId);
    if (location.pathname === '/Browse') history.push('/VisualCourse');
  };

  return (
    <>
      <ListItem dense>
        <ListItemText
          classes={{ primary: classes.primary, secondary: classes.secondary }}
          primary={`${courseData.courseLetterCode} ${courseData.courseDigitCode}`}
          secondary={courseData.title}
        />
        <ListItemSecondaryAction>
          <FavButton courseId={courseData.courseId} />
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem className={classes.buttons} dense>
        <Button
          fullWidth
          onClick={() => openCourseModal(courseData.courseId)}
          variant="outlined"
          size="small"
        >
          Details
        </Button>
        <Button
          fullWidth
          onClick={handleVisualize}
          variant="outlined"
          size="small"
        >
          Visualize
        </Button>
      </ListItem>
    </>
  );
}

export default connect(null, {
  openCourseModal,
  getVisualizedCourses,
})(CourseListItem);

// // Reverted implementation, with Lists and such
// const visCourseArchive = (
//   <Grid container spacing={3} justify="center" alignItems="flex-start" className={classes.container}>
//     {visualizedCourses.preReqs.map((layer: any, idx: number) => (
//       layer.length > 0
//         ? (
//           <Grid item xs={10} md={spacingPerLayer} key={`column-${idx}`}>
//             <Typography variant="h5" className={classes.targetTitle}>{`Prereq layer ${visualizedCourses.preReqs.length - idx}`}</Typography>
//             <br />
//             <Paper>
//               <Grid container spacing={4} justify="center" direction="column">
//                 {layer.map((course: any) => (
//                   <Box key={course.courseId} className={classes.courseItem}>
//                     <Course courseData={course} />
//                   </Box>
//                 ))}
//               </Grid>
//             </Paper>
//           </Grid>
//         )
//         : null
//     ))}
//     <Grid item xs={10} md={spacingPerLayer}>
//       <Paper>
//         <Collapse in={true} timeout="auto" unmountOnExit>
//           {/* <h2 className={classes.targetTitle}>Target course</h2>
//           <br /> */}
//           <List component="div" disablePadding>
//           {/* <Grid container spacing={4} justify="center" direction="column"> */}
//             <Box className={classes.courseItem}>
//               <CourseListItem courseData={visualizedCourses.target} />
//               {/* <Course courseData={visualizedCourses.target} /> */}
//             </Box>
//           {/* </Grid> */}
//           </List>
//         </Collapse>
//       </Paper>
//     </Grid>
//     {visualizedCourses.depn.map((layer: any, idx: number) => (
//       layer.length > 0
//         ? (
//           <Grid item xs={10} md={spacingPerLayer} key={`column-${preReqLayers + idx}`}>
//             <Typography variant="h5" className={classes.targetTitle}>{`Dependent layer ${idx + 1}`}</Typography>
//             <br />
//             {/* <Paper>
//               <Grid container spacing={4} direction="column">
//                 {layer.map((course: any) => (
//                   <Box key={course.courseId} className={classes.courseItem}>
//                     <Course courseData={course} />
//                   </Box>
//                 ))}
//               </Grid>
//             </Paper> */}
//             <List dense={dense}>
//               {layer.map((course: any) => (
//                 <Box key={course.courseId} className={classes.courseItem}>
//                   <CourseListItem courseData={course} />
//                 </Box>
//               ))}
//             </List>
//           </Grid>
//         )
//         : null
//     ))}
//   </Grid>
// )