export class Calc {

  fibonacci(value){
    
    let fibonacciList = [0, 1]
    let position = (value - 2) 

    for(let i = 1; i < position; i++ ){
      let nextValue = fibonacciList[fibonacciList.length - 1] + fibonacciList[fibonacciList.length - 2]  

      fibonacciList.push(nextValue)
      console.log(nextValue)
    }

    
    console.log(position)
    console.log(fibonacciList)
    console.log(fibonacciList[position])

    return fibonacciList[position] * 2

  }

  resolve(value){

    let resultFibonacci = this.fibonacci(value)


    return {
      fibonacci: resultFibonacci
    }
  }
}