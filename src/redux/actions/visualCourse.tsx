
import { Course } from '../../type-interfaces/Course';
import { coral } from 'color-name';


export const updateCourse = (course: Course) => { // { courseLetterCode: string, courseDigitCode: number, courseId: string, description: string }) => {
  return {
    type: 'DISPLAY_COURSE',
    courseLetterCode: course.courseLetterCode,
    courseDigitCode: course.courseDigitCode,
    courseId: course.courseId,
    description: course.description,
  };
};



        // TODO: SPLIT THE COURSECODE: LETTERS + NUMBERS; session number possible as well
        // USE ID FOR THIS INSTEAD! Look up API documentation
        // Create data structure, something about courses, it'd have pseudo id; session 4 letter code and 3 digit number
        // Data exists in store, and nowhere else imo; map state to props! pull state into store through props. get from store to props
        // Store it in the store itself, or as a local variable on the page. Vote strongly for putting it in the store; when logged in, val looked at is there
        // View can be the one that parses through the list
        // Reducer filters and puts a single course value
        // in reducer, we get ID, use it to apply filter to dictionary of courses, and save that group of course stuff as selected course

export const changeSelectedCourse = (course: Course) => { // { courseCode: string, courseDescription: string, prereqs: Array<string>, coreqs: Array<string>, future: Array<string>}
    return {
        type: 'CHANGE_SELECTED_COURSE',
        courseLetterCode: course.courseLetterCode, 
        courseDigitCode: course.courseDigitCode,
        courseId: course.courseId,
        description: course.description,
        preReqs: course.preReqs,
    }
}