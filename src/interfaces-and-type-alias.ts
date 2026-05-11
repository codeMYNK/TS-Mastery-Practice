//Que: What is interface in typescript?
//Ans: Interface is a way to define the shape of an object. It is a feature of typescript that allows the developer to define the shape of an object.
//Example Usage
/*
interface Person {
    name: string;
    age: number;
}
console.log("PERSON: ", Person);
*/

//How to declare an interface in typescript?
//Ans: Interface is a feature of typescript that allows the developer to define the shape of an object.
interface Person { 
    name: string;
    age: number;
}

interface User{
    name: string;
    email: string;
    password: string;
}

function getUserData(obj: User){
    return obj.name + " " + obj.email + " " + obj.password;
}

let user: User = {
    name: "John",
    email: "john@example.com",
    password: "123456"
}

console.log(getUserData(user));