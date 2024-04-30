import { Calc } from "../../src/helpers/calcResult"
describe("Desarrollar 10 casos de prueba en tota de la serie 'serie(n) =  2fibonacci(n - 2) • 3triangular(n - 2) + 7primo(n - 1)'", () => {

  test("n es igual a 1", () =>{
    const n = 1

    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)

    expect( result.result ).toBe( 0 )
  })

  test("n es igual a 2", () =>{
    const n = 2

    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)

    expect( result.result ).toBe( 14 )
  })

  test("n es igual a 3", () =>{
    const n = 3

    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)

    expect( result.result ).toBe( 27 )
  })

  test("n es igual a 4", () =>{
    const n = 4
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 53 )
  })

  test("n es igual a 5", () =>{
    const n = 5
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 121 )
  })

  test("n es igual a 6", () =>{
    const n = 6
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 257 )
  })

  test("n es igual a 7", () =>{
    const n = 7
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 541 )
  })

  test("n es igual a 8", () =>{
    const n = 8
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 1127 )
  })

  test("n es igual a 9", () =>{
    const n = 9
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 2317 )
  })

  test("n es igual a 10", () =>{
    const n = 10
  
    const resolveProblem = new Calc()
    const result = resolveProblem.resolve(n)
  
    expect( result.result ).toBe( 4697 )
  })
})