import { createContext, useState } from "react"

const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <AppContext.Provider
      value={{
        menuState: {
          isMenuOpen,
          setIsMenuOpen,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContext
