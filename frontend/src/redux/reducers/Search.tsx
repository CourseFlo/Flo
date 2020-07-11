import { CHANGE_FILTERS, SUBMIT_SEARCH, SUBMIT_SEARCH_FAILURE, SET_LOADING_SEARCH_TRUE } from '../constants';
import { Filters } from '../../type-interfaces/Search'; // eslint-disable-line no-unused-vars
import { Course, buildCourseId, CourseId } from '../../type-interfaces/Course';

const searchFilteringDefault: Filters = {
  query: '',
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
  description: 'Some made up course. Some made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up courseSome made up course',
  preReqs: {
    '2019-W2-CPSC-210': otherCourseId,
  },
};
const sampleCourse1: Course = {
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
const searchResultsDefault2: Course[] = [sampleCourse, sampleCourse1];
const searchResultsDefault4: Course[] = [...searchResultsDefault2, ...searchResultsDefault2];
const searchResultsDefault8: Course[] = [...searchResultsDefault4, ...searchResultsDefault4];
export const searchRetrieval = (store: Course[] = [], action: any) => {
  switch (action.type) {
    // TODO add actual behaviour of searching
    case SUBMIT_SEARCH:
      return action.offerings;
    case SUBMIT_SEARCH_FAILURE:
      return [];
    default:
      return store;
  }
};

export const searchIsLoading = (isLoading: boolean = false, action: any) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return false;
    case SUBMIT_SEARCH_FAILURE:
      return false;
    case SET_LOADING_SEARCH_TRUE:
      return true;
    default:
      return isLoading;
  }
}
