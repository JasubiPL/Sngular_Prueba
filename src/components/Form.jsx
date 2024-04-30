import { useContext, useState } from "react"
import { ResultContext } from "../context/ResultContext"
import { Calc } from "../helpers/calcResult"

export const Form = () =>{
  const [value, setValue] = useState()

  const { setFinalResult } = useContext(ResultContext)

  const handlerForm = (e) =>{
    e.preventDefault()

    const resolveProblem = new Calc()

    if(value <= 0 ) return alert("No se pueden calcular valores menores a 1") 

    const result = resolveProblem.resolve(parseInt(value))

    setFinalResult( result )
   
  }


  return(
    <form 
      onSubmit={handlerForm}
      className=" flex flex-col gap-2 bg-slate-700 p-6 rounded-md w-[450px]"
    >
      <label className="text-white">Introduce el valor de <span className="italic font-bold">n</span> :</label>
      <input 
        type="number"
        placeholder="Introduce valor"
        className=" outline-none p-2 rounded"
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="bg-green-500 py-1">Calcular Secuencia</button>
    </form>
  )
}