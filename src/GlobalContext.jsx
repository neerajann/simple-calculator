import { createContext, useContext, useState, useCallback } from 'react'

const AppContext = createContext()

function GlobalContext({ children }) {
  const [inputBar, setInputBar] = useState([])
  const [prevOutput, setPrevOutput] = useState([])

  const calculateResult = () => {
    const result = eval(inputBar.join(''))
    setPrevOutput([inputBar])
    setInputBar(String(result).split(''))
  }

  return (
    <AppContext.Provider
      value={{
        inputBar,
        setInputBar,
        prevOutput,
        setPrevOutput,
        calculateResult,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default GlobalContext

export function useGlobalContext() {
  return useContext(AppContext)
}
