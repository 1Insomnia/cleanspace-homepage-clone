import { AppProvider } from "./context/AppContext"

import Navbar from "./components/Navbar"
import SideNav from "./components/SideNav"
import Hero from "./components/Hero"

import "./App.scss"

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <SideNav />
      </div>
    </AppProvider>
  )
}

export default App
