// import { Course } from '../../type-interfaces/Course';
import { GET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE_FAILURE } from '../constants';

// CourseOfferings mock to be deleted
const initialVisualizedData = {
  target: {
    _id: '5f0807c719f93935a8485939',
    preReqs: ['CPSC 110'],
    depn: ['CPSC 213', 'CPSC 221', 'CPSC 310'],
    courseLetterCode: 'CPSC',
    courseDigitCode: '210',
    courseId: 'CPSC 210',
    description: 'Design, development, and analysis of robust software components. Topic...',
    title: 'Software Construction',
    credits: 3,
    link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=210',
  },
  preReqs: [],
  depns: [],
};

// TODO Delete once other reducer added
// eslint-disable-next-line import/prefer-default-export
export const visualizedCourses = (store: any = initialVisualizedData, action: any) => {
  switch (action.type) {
    case GET_VISUALIZED_COURSE:
      return action.visualizedCourses;
    case GET_VISUALIZED_COURSE_FAILURE:
      return initialVisualizedData; // TODO change this. temporary just so we decide out to have failure or not
    default:
      return store;
  }
};
