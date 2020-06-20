// rename to visualize
import React from 'react';
import { connect } from 'react-redux';
import Courses from '../components/VisualCourse/courses';
import DisplayedCourse from '../components/VisualCourse/displayedCourse';
import Course from '../components/VisualCourse/course';
import '../components/VisualCourse/visualCourse.css';

const VisualCourse = (props: any) => {
    //console.log("VisualCourse props:");
    //console.log(props);
    const coursesProps = {
        // courses: props.courses
        1: {
            courseStringCode: "CPSC",
            courseDigitCode: "210",
            description: "Software Construction",
        }
    }
    // <Courses {...coursesProps}></Courses>
    return (
    <div className='module'>
        <div className='column'>
            Prereq:
            <Course 
                courseStringCode="CPSC"
                courseDigitCode="110"
                description="Computation, Programs, and Programming" 
            ></Course>
        </div>
        <div className='column'>
            <DisplayedCourse 
                courseStringCode="CPSC" 
                courseDigitCode="210"
                description="Software Construction"
            ></DisplayedCourse>
        </div>
        <div className='column'>
            Courses that follow:
            <Course 
                courseStringCode="CPSC"
                courseDigitCode="213"
                description="Computer Systems" 
            ></Course>
            <Course 
                courseStringCode="CPSC"
                courseDigitCode="221"
                description="Data Structures and Algorithms" 
            ></Course>
            <Course  
                courseStringCode="CPSC"
                courseDigitCode="310"
                description="Intro to Software Engineering" 
            ></Course>
        </div>
    </div>);
};

const mapStateToProps = (state: any) => {
    const { courseArray }: any = state;
    return { courseArray };
}

export default connect(mapStateToProps, {})(VisualCourse);
