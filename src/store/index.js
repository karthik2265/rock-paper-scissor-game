import { createContext, useState } from 'react'

const appContext = createContext(null)

const AppContextProvider = (props) => {
  const [rulesModalIsOpen, setRulesModalIsOpen] = useState(false)
  return (
    <appContext.Provider
      value={{ score: 0, rulesModalIsOpen, setRulesModalIsOpen }}
    >
      {props.children}
    </appContext.Provider>
  )
}

export { appContext, AppContextProvider }
