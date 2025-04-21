import Resume from "./fragments";
import React from 'react'
import { RESUME_DATA } from '@/app/data/resume-data.js';

const ResumePage = () => {
  return (
    <Resume resumeData={RESUME_DATA}/>
  )
}

export default ResumePage