import React from 'react'
import "./style.css"

import instagram from "./../../img/icons/instagram.svg"
import twitter from "./../../img/icons/twitter.svg"
import vk from "./../../img/icons/vk.svg"
import linkedIn from "./../../img/icons/linkedIn.svg"
import gitHub from "./../../img/icons/gitHub.svg"



const Footer = () => {
  return (
    <div>
            <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Votum1703"><img src={gitHub} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2022 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer