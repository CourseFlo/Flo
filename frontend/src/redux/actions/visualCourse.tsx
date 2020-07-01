import { Course } from '../../type-interfaces/Course';
import { coral } from 'color-name';

export const updateCourse = (course: Course) => { 
  return {
    type: 'DISPLAY_COURSE',
    courseLetterCode: course.courseLetterCode,
    courseDigitCode: course.courseDigitCode,
    courseId: course.courseId,
    description: course.description,
  };
};

export const changeSelectedCourse = (course: Course) => { 
  return {
    type: 'CHANGE_SELECTED_COURSE',
    courseLetterCode: course.courseLetterCode, 
    courseDigitCode: course.courseDigitCode,
    courseId: course.courseId,
    description: course.description,
    preReqs: course.preReqs,
  }
}
