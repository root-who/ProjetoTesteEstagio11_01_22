import React from "react";
import LOGO from "../../assets/img/joaopaulo.png"
import "../../assets/css/header/index.css"

const Header = ({onLogoClick}) =>{
    return(
        <>
        <div className="header_container">
            <img onClick={onLogoClick} className="header_logo" src={LOGO} alt="" />
            <div className="header_links_container">
                <a className="header_link" href="https://github.com/root-who"><img className="header_link_img" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" /></a>
                <a className="header_link" href="https://www.linkedin.com/in/joao-paulodev/"><img className="header_link_img" src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="" /></a>
            </div>
            
        </div>
        </>
    )
}

export default Header;