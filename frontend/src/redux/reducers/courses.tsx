import { Course } from '../../type-interfaces/Course';
import { SET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE_FAILURE } from '../constants';

// CourseOfferings mock to be deleted
const initialVisualizedData = {
  // targetId: 'CPSC 210',
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

// const defaultVisualizedCourses = {
//   targetId: undefined,
//   preReqs: [],
//   depn: [],
//   loading: false,
// };
// export const visualizedCourses = (store: any = defaultVisualizedCourses, action: any) => {
//   switch (action.type) {
//     case SET_VISUALIZED_COURSE:
//       return {
//         ...store,
//         targetId: action.payload,
//         loading: true,
//       };
//     // case GET_COURSE_SUCCESS:
//     //     console.log('got a course: ', store, action.payload);
//     //     if (action.payload.courseId === store.targetId) {
//     //     console.log('got matching course');
        
//     //     const targetCourse: Course = action.payload;
//     //     const coursesToGet = targetCourse.preReqs.concat(targetCourse.depn);
//     //     console.log('to get', coursesToGet);
//     //     coursesToGet.forEach((courseId) => getCourse(courseId)); // FIXME Dangerous to call the action that led to this switch case, could cause infinite loop
//     //     return {
//     //       ...store,
//     //       preReqs: targetCourse.preReqs || [],
//     //       depn: targetCourse.depn || [],
//     //       loading: false,
//     //     };
//     //   }
//     //   return store;
//     default:
//       return store;
//   }
// };

export const updateCourseCache = (store: { [key: string]: Course } = {}, action: any) => {
  switch (action.type) {
    // case GET_COURSE_SUCCESS:
    //   const newCache = { ...store };
    //   newCache[action.payload.courseId] = action.payload;
    //   return newCache;
    default:
      return store;
  }
};
