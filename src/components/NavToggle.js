import { useContext } from "react"
import AppContext from "../context/AppContext"
import "./NavToggle.scss"

export default function NavToggle() {
  const {
    menuState: { isMenuOpen, setIsMenuOpen },
  } = useContext(AppContext)

  return (
    <button className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  )
}
