import React from "react"
import mainPhoto from "../images/business-photo.jpg"

function Header() {
    return(
        <header className="header">
            <img src={mainPhoto} alt="PortfolioPicture"></img>
            <h1 className="header-name">
                Stephen Ma-Pan
            </h1>

            <p className="header-role">
                Frontend Developer
            </p>

            <a href="https://www.linkedin.com/in/stephen-ma-pan-31b8a7189/" target="_blank" className="header-website">  
                smapan.github.io
            </a>

            <br>
            </br>

            <div className="btn-container">
                <button className="header-emailbtn">
                    <a href="mailto: s-mapan@hotmail.com">
                        <i className="fa-solid fa-envelope"></i>&ensp;
                        Email
                    </a>
                </button>

                <button className="header-linkedinbtn">
                    <a href="https://www.linkedin.com/in/stephen-ma-pan-31b8a7189/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>&ensp;
                        LinkedIn
                    </a>
                </button>
            </div>
        </header>
    )
}

export default Header