// import { Course } from '../../type-interfaces/Course';
import { SET_CENTERED_COURSE } from '../constants';

// CourseOfferings mock
const initialVisualizedData = [
  {
    _id: '5f0807c719f93935a8485939',
    preReqs: ['CPSC 110'],
    dep: ['CPSC 213', 'CPSC 221', 'CPSC 310'],
    courseLetterCode: 'CPSC',
    courseDigitCode: '210',
    courseId: 'CPSC 210',
    description: 'Design, development, and analysis of robust software components. Topic...',
    title: 'Software Construction',
    credits: 3,
    link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=FNEL&course=201',
  },
  {
    _id: '5f0807c719f93935a848593a',
    preReqs: ['FNEL 202'],
    courseLetterCode: 'FNEL',
    courseDigitCode: '301',
    courseId: 'FNEL 301',
    description: 'Emphasis on advanced comprehension and production skills. Extended focus on skills in oral traditions, transcription, literacy, and on deepening the understanding of grammatical structures and dialectal variation. Not offered every year.',
    title: 'Advanced Salish Language I',
    credits: 3,
    link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=FNEL&course=301',
  },
];

// TODO Delete once other reducer added
// eslint-disable-next-line import/prefer-default-export
export const centeredCourse = (store: any = initialVisualizedData[0], action: any) => {
  switch (action.type) {
    case SET_CENTERED_COURSE:
      // Todo: use courseid to do API call
      // Modify isCentered of previous element, and current selected element
      return action.centeredCourse;
    default:
      return store;
  }
};

export const otherCourse = (store: any = [], action: any) => {
  switch (action.type) {
    case SET_CENTERED_COURSE:
      // Todo: use courseid to do API call
      // Modify isCentered of previous element, and current selected element
      return action.centeredCourse;
    default:
      return store;
  }
};


// export const visualizedCourses = (store: any = initialVisualizedData, action: Action) => {
//   switch (action.type) {
//     case UPDATE_VISUALIZED_COURSES:
//       return action.payload;
//     default:
//       return store;
//   }
// };


// DELETE BELOW

// const courseArray: any = {
//   // courseArray: {
//   //   courseStringCode: 'CPSC',
//   //   courseDigitCode: '210',
//   //   description: 'Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing.',
//   // },
// };
