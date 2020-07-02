// Where does store come from in Browse.tsx?

import { Course } from '../../type-interfaces/Course'; // eslint-disable-line no-unused-vars
import { BottomNavigationAction } from '@material-ui/core';
 
const courseArray: any = {
    courseArray: {
        courseStringCode: "CPSC",
        courseDigitCode: "210",
        description: "Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing.",
    }
}

export const changeSelectedCourse = (store: any = courseArray, action: any) => {
    switch (action.type) {
        case 'CHANGE_SELECTED_COURSE':
            return action.courseId;
        default:
            return store;
    }
}

export const getUsers = (store: any[] = [], action: any) => {
    switch (action.type) {
      case 'GET_USERS':
        return action.users;
      default:
        return store;
    }
  };