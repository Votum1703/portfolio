import React from 'react'
import "./style.css"
import gitHubIcon from "./gitHub-black.svg"

const BtnGitHub = ({Link}) => {
  return (
    <div>
         <a href={Link} target='_blank' rel='noreferrer' className="btn-outline">
                    <img src={gitHubIcon} alt=""/>
                    GitHub
                </a>
    </div>
  )
}

export default BtnGitHub