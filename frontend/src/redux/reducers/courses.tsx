import { Course } from '../../type-interfaces/Course';
import { SET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE_FAILURE } from '../constants';

// // CourseOfferings mock to be deleted
// const initialVisualizedData = {
//   // targetId: 'CPSC 210',
//   target: {
//     _id: '5f0807c719f93935a8485939',
//     preReqs: ['CPSC 110'],
//     depn: ['CPSC 213', 'CPSC 221', 'CPSC 310'],
//     courseLetterCode: 'CPSC',
//     courseDigitCode: '210',
//     courseId: 'CPSC 210',
//     description: 'Design, development, and analysis of robust software components. Topic...',
//     title: 'Software Construction',
//     credits: 3,
//     link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=210',
//   },
//   preReqs: [],
//   depns: [],
//   loading: false,
// };

const initialVisualizedData = {
  targetId: undefined,
  target: undefined,
  preReqs: [],
  depns: [],
  loading: false,
};

export const visualizedCourses = (store: any = initialVisualizedData, action: any) => {
  switch (action.type) {
    case SET_VISUALIZED_COURSE:
      return {
        ...store,
        targetId: action.payload,
        loading: true,
      };
    case GET_VISUALIZED_COURSE:
      const visualizedCoursesResults = {
        depn: action.payload.depn || [],
        preReqs: action.payload.preReqs || [],
        target: action.payload.target || {},
      };
      return {
        ...visualizedCoursesResults,
        targetId: store.targetId,
        loading: false,
      };
    case GET_VISUALIZED_COURSE_FAILURE: // TODO Remove
      return initialVisualizedData;
    default:
      return store;
  }
};
