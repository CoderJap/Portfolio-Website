import React from 'react'
import "./WorkCardStyles.css"
import WorkCard from './WorkCard'
import WorkCardData from './WorkCardData'
import pro1 from "../assets/project1.png"
import { NavLink } from 'react-router-dom'

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">
        Projects
      </h1>
      <div className="project-container">
        {WorkCardData.map((val,index)=>{
          return (
            <WorkCard 
            key={index}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
          )
        })}
    
      </div>
    </div>
  )
}

export default Work