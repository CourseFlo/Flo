export interface User {
    name: string,
    email: string,
    major: string,
    courses: Array<string>,
    _id: string,
    starredCourses: Array<string>,
}
