import { createContext, useState } from "react";

export const ResultContext = createContext()

export const ResultProvider = ({ children }) => {

  const [finalResult, setFinalResult] = useState()
  
  return(
    <ResultContext.Provider value={{finalResult, setFinalResult}}>
      { children }
    </ResultContext.Provider>
  )
}