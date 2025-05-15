// intro.ts
import { functions } from "./funtions";
import { generics } from "./generics";
import { users } from "./users";

// 👉 Basic Types
let username: string = "Joseph";
let age: number = 28;
let isActive: boolean = true;
let hobbies: string[] = ["reading", "coding", "traveling"];



// 👉 Interface example
interface User {
  name: string;
  age: number;
  isActive: boolean;
}

const user1: User = {
  name: "Bob",
  age: 35,
  isActive: false,
};

console.log(users())

functions()
generics()