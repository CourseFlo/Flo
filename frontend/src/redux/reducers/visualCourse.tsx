// Where does store come from in Browse.tsx?

import { Course } from '../../type-interfaces/Course'; // eslint-disable-line no-unused-vars
 
const courseArray: any = {
    courseArray: {
        courseStringCode: "CPSC",
        courseDigitCode: "210",
        description: "Design, development, and analysis of robust software components. Topics such as software design, computational models, data structures, debugging, and testing.",
    }
}

export const changeSelectedCourse = (store: any = courseArray) => {
    return store;
}