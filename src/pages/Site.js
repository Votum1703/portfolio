import React from 'react'
import { useParams } from 'react-router-dom'
import BtnGitHub from '../components/btnGitHub/BtnGitHub'
import { projects } from '../helpers/projectsList'

const Site = () => {
  const {id} = useParams();
  const site = projects[id]
  return (
    <div>
           <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{site.title}</h1>
                <img src={site.imgBig} alt="" className="project-details__cover"/>

                <div className="project-details__desc">
                    <p>{site.skills}</p>
                </div>

               <BtnGitHub Link="https://github.com/"/>

            </div>
        </div>
    </main>
    </div>
  )
}

export default Site