import { Form } from "./components/Form"
import { Result } from "./components/Result"

function App() {

  return (
    <main className='flex flex-col bg-slate-900 w-screen h-screen items-center justify-between p-8'>
        <header>
          <h1 className="text-white text-4xl text-center">Ejrersicio a resolver: </h1>
          <p className="mt-3 italic bg-white/20 text-white text-2xl px-4 py-2 rounded-lg ">serie(n) =  2fibonacci(n - 2) • 3triangular(n - 2) + 7primo(n - 1)</p>
        </header>
        <section className="">
          <Form />
          
          <Result />
        </section>
        
        <footer className="text-white">Prueba de Jasubi Piñeyro</footer>


    </main>
  )
}

export default App
