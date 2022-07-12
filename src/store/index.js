import { createContext, useState } from 'react'

const appContext = createContext(null)

const AppContextProvider = (props) => {
  const [rulesModalIsOpen, setRulesModalIsOpen] = useState(false)
  const [score, setScore] = useState(0)
  return (
    <appContext.Provider
      value={{ score, setScore, rulesModalIsOpen, setRulesModalIsOpen }}
    >
      {props.children}
    </appContext.Provider>
  )
}

export { appContext, AppContextProvider }
