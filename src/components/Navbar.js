import ButtonCategory from "./ButtonCategory"
import ButtonSearch from "./ButtonSearch"
import NavToggle from "./NavToggle"

import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Left Container */}
      <div className="navbar__buttons__container">
        <NavToggle />
        <ButtonCategory />
        <ButtonSearch />
      </div>
      {/* Right Container */}
      <div className="navbar__logos__container">
        <img
          src="img/clean-space_final.jpg"
          alt=""
          className="navbar__logo-space"
        />
        <img src="img/ESA_Logo.svg" alt="" className="navbar__logo-esa" />
      </div>
    </div>
  )
}
