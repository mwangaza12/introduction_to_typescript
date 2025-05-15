export const generics = () => {
    // real worlds applications Generic API, reusable components in React, type safe
    // spread operator, combining the objects

    console.log("***Generics***");

    // function getFirstelement(array: (number | string)[]){
    //     return array[0];
    // }

    // const numbers: number[] = [100,200,300];

    // console.log(getFirstelement(numbers))

    // const strings: string[] = ["Hello","World"];

    // console.log(getFirstelement(strings))

    // const booleans: boolean[] = [true,false]


    // console.log(getFirstelement(booleans))

    //generics

    // function getFirstelement<T>(array: T[]): T{
    //     return array[0];
    // }

    // const numbers: number[] = [100,200,300];
    // console.log(getFirstelement(numbers))

    // const strings: string[] = ["Hello","World"];
    // console.log(getFirstelement(strings))

    // const booleans: boolean[] = [true,false]
    // console.log(getFirstelement(booleans))

    // working with multiple generics
    function createPair<T, U>(firstElement: T, secondElement: U): [T, U ]{
        return [firstElement, secondElement]
    }

    const pair = createPair(10,30)
    const pair2 = createPair("Hello","world")
    const pair3 = createPair(30,"Joseph")
    const pair4 = createPair(true,"30")
    console.log(pair4)

    function addNumbers<T>(array: T[]): [T, T]{
        return [array[0], array[1]]
    }

    const numbers: number[] = [1,2,3,4,5,6]
    console.log(addNumbers(numbers))

    const strings: string[] = ["Hello","Joseph","Mwangaza"]

    console.log(addNumbers(strings))
     

}