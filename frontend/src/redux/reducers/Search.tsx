import { CHANGE_FILTERS, SUBMIT_SEARCH } from '../constants';
import { Filters } from '../../type-interfaces/Search'; // eslint-disable-line no-unused-vars
import { Course, buildCourseId, CourseId } from '../../type-interfaces/Course';

const searchFilteringDefault: Filters = {
  query: 'cpsc',
  letterCodes: ['CPSC', 'ANTH'],
  numberRange: [200, 400],
};
export const searchFiltering = (store: Filters = searchFilteringDefault, action: any) => {
  switch (action.type) {
    case CHANGE_FILTERS:
      return {
        ...store,
        query: action.query,
        letterCodes: action.letterCodes,
        numberRange: action.numberRange,
      };
    default:
      return store;
  }
};

const otherCourseId: CourseId = buildCourseId(2019, 'W2', 'CPSC', '210');
const sampleCourse: Course = {
  sessionYear: 2019,
  sessionTerm: 'W2',
  courseLetterCode: 'CPSC',
  courseDigitCode: '416G',
  courseId: buildCourseId(2019, 'W2', 'CPSC', '416G'),
  restrictionInfo: '3rd year',
  description: 'Some made up course',
  preReqs: {
    '2019-W2-CPSC-210': otherCourseId,
  },
};
const searchResultsDefault: Course[] = [sampleCourse];
export const searchRetrieval = (store: Course[] = searchResultsDefault, action: any) => {
  switch (action.type) {
    // TODO add actual behaviour of searching
    case SUBMIT_SEARCH:
      return [
        ...store,
        // action.searchResultsFromBackend?
      ];
    default:
      return store;
  }
};
