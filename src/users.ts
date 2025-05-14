export const users = () => {
    interface Person{
        firstName: string,
        lastName: string,
        age: number,
        email: string
    }

    let people: { [key: number]: Person };

    people = {
        1:{
            firstName: "Joseph",
            lastName: "Mwangaza",
            age: 30,
            email: "mwangaza@gmail.com"
        },
        2:{
            firstName: "John",
            lastName: "Doe",
            age: 33,
            email: "john@gmail.com"
        },
        3:{
            firstName: "Jane",
            lastName: "Doe",
            age: 20,
            email: "jane@gmail.com"
        },
    } 

    return people;
}