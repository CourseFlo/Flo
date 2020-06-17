// rename to visualize
import React from 'react';
import Courses from '../components/VisualCourse/courses';
import DisplayedCourse from '../components/VisualCourse/displayedCourse';
import './VisualCourse/visualCourse.css'

export interface Course {
    courseCode: string,
    courseDescription: string,
    prereqs: Array<string>,
    coreqs: Array<string>,
    future: Array<string>
}

const VisualCourse = () => {
  return (
  <div className='module'>
        <div className='column'>
            Prereq:
            <Courses></Courses>
        </div>
        <div className='column'>
            <DisplayedCourse></DisplayedCourse>
        </div>
        <div className='column'>
            Courses that follow:
            <div className='course'>
                <h1>CPSC 213</h1>
                <p>Computer Systems</p>
            </div>
            <div className='course'>
                <h1>CPSC 221</h1>
                <p>Data Structures and Algorithms</p>
            </div>
            <div className='course'>
                <h1>CPSC 310</h1>
                <p>Intro to Software Engineering</p>
            </div>
        </div>
      

  </div>);
};

export default VisualCourse;
