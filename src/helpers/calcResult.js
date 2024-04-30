export class Calc {

  fibonacci(value){

    //2Fibonacci(n - 2)

    if(value <= 1){
      return 0
    }

    let fibonacciList = [0, 1]
    let position = (value - 2) 

    for(let i = 1; i < position; i++ ){
      let nextValue = fibonacciList[fibonacciList.length - 1] + fibonacciList[fibonacciList.length - 2]  

      fibonacciList.push(nextValue)
    }

    return fibonacciList[position] * 2

  }
  
  triangular(value){
    //3 Triangular(n - 2)

    let n = value - 2
    
    if(n <= 0) return 0

    return 3 * ((n * ( n + 1)) / 2)
  }

  esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    for (let i = 2; i * i <= numero; i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

  primo(value){
    //7Primo(n - 1)

    let primosList = []

    for(let a = 1; primosList.length <= value; a++){
      if(this.esPrimo(a)) primosList.push(a)
      console.log(primosList)
    }

    return primosList[value - 2]

    

    console.log(primosList)
  }

  resolve(n){
    console.log(n)

    let resultFibonacci = this.fibonacci(n)
    let resultTriangular = this.triangular(n)
    let resultPrimo = this.primo(n)
    let resultadoFinal = resultFibonacci * resultTriangular + resultPrimo


    return {
      fibonacci: resultFibonacci,
      triangular: resultTriangular,
      primo: resultPrimo,
      result: resultadoFinal
    }
  }
}