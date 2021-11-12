import { useContext } from "react"
import AppContext from "../context/AppContext"

import "./SideNav.scss"

export default function SideNav() {
  const {
    menuState: { isMenuOpen, setIsMenuOpen },
  } = useContext(AppContext)

  return (
    <>
      <div
        className={isMenuOpen ? "side-nav-open overlay" : "overlay"}
        onClick={() => setIsMenuOpen(false)}
      ></div>
      <nav className={isMenuOpen ? "side-nav-open side-nav" : "side-nav"}>
        <button onClick={() => setIsMenuOpen(false)} className="side-nav__btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="side-nav__title">Menu</h2>
        <div className="side-nav__list">
          <a href="/" className="side-nav__list__link">
            The Clean Space Blog
          </a>
          <a href="/" className="side-nav__list__link">
            For a clean space
          </a>
          <a href="/" className="side-nav__list__link">
            The Cleansat story
          </a>
          <a href="/" className="side-nav__list__link">
            Clean space webinars
          </a>
          <a href="/" className="side-nav__list__link">
            Clean space web
          </a>
          <a href="/" className="side-nav__list__link">
            About
          </a>
          <a href="/" className="side-nav__list__link">
            Privacy Policy
          </a>
          <a href="/" className="side-nav__list__link">
            European space agency
          </a>
          <a href="/" className="side-nav__list__link">
            ESA's Blog
          </a>
        </div>
      </nav>
    </>
  )
}
