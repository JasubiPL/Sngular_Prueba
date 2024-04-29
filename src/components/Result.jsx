import { useContext, useEffect, useState } from "react"
import { ResultContext } from "../context/ResultContext"

export const Result = () =>{
  const { finalResult } = useContext(ResultContext)
  console.log(finalResult)

  useEffect(() => {}, [finalResult])


  return(
    <section className="w-[450px] bg-green-300 p-2 mt-5 rounded-md">
      Resultado: 
      <ul>
        <li>Fibonacci: {finalResult.fibonacci}</li>
      </ul>
    </section>
  )
}