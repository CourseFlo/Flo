// rename to visualize
import React from 'react';
import Courses from './VisualCourse/courses';
import DisplayedCourse from './VisualCourse/displayedCourse';
import './VisualCourse/visualPage.css'

const Guanting = () => {
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

export default Guanting;
