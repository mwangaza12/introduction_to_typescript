import axios from "axios";

export const asyncProgramming = () => {
    // promises
    // console.log("--------Async Programming-------");

    // const myPromise = new Promise<string>((reject,resolve) => {
    //     setTimeout(() => {
    //         reject("Netwrok error")
    //         // resolve("The promise was resolved")
    //     },2000);
    // });

    // myPromise.then(value => console.log(value)).catch(reason => console.error(reason))

    // async and await

    // async function fetchData(): Promise<string>{
    //     return "Data Fetched";
    // }

    // console.log(fetchData());

    // async function fetchUser(id: number): Promise<string> {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() =>{
    //              if(id === 1){
    //                 resolve("Joseph Mwangaza")
    //              }else{
    //                 reject("User was not found");
    //              }
    //             }, 3000)
    //         }
    //     )
    // }

    // async function getUserData(id:number): Promise<void> {
    //     try{
    //         const user = await fetchUser(id);
    //         console.log(user);
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // getUserData(2);


    const fetchAPI = async(id?: number): Promise<void> => {
        try {
            const url = `https://jsonplaceholder.typicode.com/users/${id}`
            const response = await axios.get(url);  
            const users = await response.data;
            console.log(users)
        } catch (error) {
            console.error(error)
        }
    }

    fetchAPI(6);
}