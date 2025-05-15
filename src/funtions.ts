export const functions =() =>  {
   console.log("------functions------");

    //  function funtionName(arg1: dataType, arg2: dataType,): dataType{
    //     return CSSMathValue;
    //  }

    // function sayHello(): void{
    //     console.log("My fist fn in ts")
    // }
    // sayHello()

    //named function
    // function greet(name:string): string{
    //     return "Hello "+ name;
    // }
    
    // console.log(greet("Mwangaza"))

    // Anonymous function
    // const greet = function(name: string){
    //     return "Hello "+ name
    // }
    // console.log(greet("Mwangaza"))

    //Arrow functions

    // const addNumbers = (num1: number, num2:number): number => {
    //    return num1 + num2; 
    // }

    // console.log(addNumbers(12,19));

    // const addNumber = (num1: number, num2: number): number => num1 + num2

    // console.log(addNumber(50,800))


    // default parameters

    // function multiply(a: number, b: number=10): number{
    //     return a *b
    // }

    // console.log(multiply(100,200))


    // rest parameter

    // function sum(...numbers: number[]): number{
    //     return numbers.reduce((acc, number) => acc + number, 0)
    // }

    // console.log(sum(1,3,6))


    // callback funtions

    // function processInput(name:string,callback:(data:string) => void ){
    //     let greeting = `Hello ${name}`
    //     callback(greeting)
    // }

    // processInput("John", (message) => console.log(message));

    function fetchData(callback: (data:string)=>void){
        console.log("Fetching data from a server")
        setTimeout(()=> {
            callback("Data fetched successfully")
        },5000)
    }
    fetchData((data)=> console.log(data))

}