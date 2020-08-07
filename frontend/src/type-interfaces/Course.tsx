export type SessionYear = number;
export type SessionTerm = string;
export type CourseLetterCode = string;
export type CourseDigitCode = string;
export type CourseId = string;

/**
 * A unified Course type for use throughout the app.
 * Each course is uniquely identified by a __courseId__ string.
 * @member sessionYear: SessionYear,
 * @member sessionTerm: SessionTerm,
 * @member courseLetterCode: CourseLetterCode,
 * @member courseDigitCode: CourseDigitCode,
 * @member courseId: string,
 * @member description: string,
 * @member restrictionInfo: string,
 * @member preReqs: CourseIdCollection,
 */
export interface Course {
  sessionYear: SessionYear,
  sessionTerm: SessionTerm,
  courseLetterCode: CourseLetterCode,
  courseDigitCode: CourseDigitCode,
  courseId: CourseId,
  description: string,
  restrictionInfo: string,
  preReqs: CourseId[],
  depn: CourseId[],
}

/**
 * An object containing courseIds mapped to Course objects.
 */
export interface CourseCollection {
  [courseId: string]: Course,
}

/**
 * An object containing courseIds mapped to themselves.
 * Providing a id only version of the CourseCollection.
 */
export interface CourseIdCollection {
  [courseId: string]: CourseId,
}

/**
 * @member S = 'S'
 * @member W1 = 'W1'
 * @member W2 = 'W2'
 */
export const SessionTermValues = {
  S: 'S',
  W1: 'W1',
  W2: 'W2',
};

// /**
//  * @member letterCode: string
//  * @member digitCode: number
//  */
// export interface CourseCode {
//   letterCode: CourseLetterCode,
//   digitCode: CourseDigitCode,
// }
// /**
//  * Session info definitions
//  * @member year : number
//  * @member term : SessionTerm
//  */
// export interface Session {
//   year: SessionYear,
//   term: SessionTerm,
// }

export const COURSE_ID_SEPARATOR = '-';
/**
* __courseId__ is a string consisting of the year + term + letterCode + digitcode,
separated by COURSE_ID_SEPARATOR.
* Eg: courseId = '2019-W2-CPSC-436' comes from the session.
 */
export const buildCourseId = (
  sessionYear: SessionYear, sessionTerm: SessionTerm,
  courseLetterCode: CourseLetterCode, courseDigitCode: CourseDigitCode,
): string => {
  const s = COURSE_ID_SEPARATOR;
  return sessionYear + s + sessionTerm + s + courseLetterCode + s + courseDigitCode;
};

export const getCourseSession = (courseId: string):
{ year: SessionYear, term: SessionTerm } | undefined => {
  const courseIdPieces = courseId.split(COURSE_ID_SEPARATOR);
  if (courseIdPieces.length !== 4) return undefined;

  // Check types. Unfortunately hardcoded types used.
  // eslint-disable-next-line use-isnan
  if (Number(courseIdPieces[0]) === NaN || (typeof courseIdPieces[1] !== 'string')) return undefined;
  // // Additional check to make sure term is valid //TODO Check year to be valid.
  // // // TODO Review if validation belongs here
  // if (!Object.values(SessionTermValues).includes(courseIdPieces[1])) return undefined;

  const year: SessionYear = Number(courseIdPieces[0]);
  const term: SessionTerm = courseIdPieces[1];

  return { year, term };
};

export const getCourseCode = (courseId: string):
{ letterCode: CourseLetterCode, digitCode: CourseDigitCode } | undefined => {
  const courseIdPieces = courseId.split(COURSE_ID_SEPARATOR);
  if (courseIdPieces.length !== 4) return undefined;

  // Check types. Unfortunately hardcoded types used.
  // eslint-disable-next-line use-isnan
  if ((typeof courseIdPieces[2] !== 'string') || Number(courseIdPieces[3]) === NaN) return undefined;
  // // Additional check on course code number. //TODO Add check against list of all lettercodes?
  // // TODO Review if validation belongs here
  // if (Number(courseIdPieces[3]) < MIN_COURSE_CODE
  // || Number(courseIdPieces[3]) > MAX_COURSE_CODE) return undefined;

  const letterCode: CourseLetterCode = courseIdPieces[2];
  const digitCode: CourseDigitCode = courseIdPieces[3];

  return { letterCode, digitCode };
};
