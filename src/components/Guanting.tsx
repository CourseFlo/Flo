import React from 'react';
import Req from './VisualCourse/req'
import DisplayedCourse from './VisualCourse/displayedCourse'
import './VisualCourse/visualPage.css'

const Guanting = () => {
  return (
  <div className='module'>
        <div className='column'>
            Prereq:
            <Req></Req>
        </div>
        <div className='column'>
            <DisplayedCourse></DisplayedCourse>
        </div>
      

  </div>);
};

export default Guanting;
