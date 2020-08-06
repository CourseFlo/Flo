import { SET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE, GET_VISUALIZED_COURSE_FAILURE } from '../constants';

const initialVisualizedData = {
  targetId: undefined,
  target: undefined,
  preReqs: [],
  depns: [],
  layers: 1,
  loading: false,
};

export const visualizedCourses = (store: any = initialVisualizedData, action: any) => {
  switch (action.type) {
    case SET_VISUALIZED_COURSE:
      return {
        ...store,
        targetId: action.payload.courseId,
        layers: action.payload.layers,
        loading: true,
        error: false,
      };
    case GET_VISUALIZED_COURSE:
      const visualizedCoursesResults = {
        depn: action.payload.depn || [],
        preReqs: action.payload.preReqs || [],
        target: action.payload.target || {},
        error: false,
      };
      return {
        ...visualizedCoursesResults,
        targetId: store.targetId,
        loading: false,
      };
    case GET_VISUALIZED_COURSE_FAILURE:
      return {
        ...store,
        error: true,
      };
    default:
      return store;
  }
};
