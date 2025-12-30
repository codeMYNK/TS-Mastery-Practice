//Basic Types
//Primitive Types(Number, String, Boolean)
//Arrays
//Tuples
//Enums
//Any, Unknown, Void, Null, Undefined, Never
//Que: Whta is array in typescript?
//Ans: Array is a collection of elements of the same type. It is a reference type in typescript.
//Example Usage
/*
let arr = [1, 2, 3, "Hello"];
console.log("ARR: ", arr);
*/

//How to declare an array in typescript?
//Ans: Array is a reference type in typescript.

let arr = [1, 2, 3, "Hello"];
console.log("ARR: ", arr);


//How to declare an array with a specific type in typescript?
//Ans: Array is a reference type in typescript.
let arr2: number[] = [1, 2, 3, 4, 5];
console.log("ARR2: ", arr2);


//Que: What is tuple in typescript?
//Ans: Tuple is a collection of elements of different types. It is a reference type in typescript.
//Example Usage
/*
let tuple: [number, string] = [1, "Hello"];
console.log("TUPLE: ", tuple);
*/

//How to declare a tuple with a specific type in typescript?
//Ans: Tuple is a reference type in typescript.
let arrTuple: [number, string] = [1, "Hello"];
console.log("TUPLE: ", arrTuple);


//Que: What is enum in typescript?
//Ans: Enum is a collection of named constants. It is a reference type in typescript.
//Example Usage
/*
enum Color {
    Red,
    Green,
    Blue
}
console.log("COLOR: ", Color.Red);
*/

//How to declare an enum with a specific type in typescript?
//Ans: Enum is a reference type in typescript.
enum Color {
    Red,
    Green,
    Blue
}
console.log("COLOR: ", Color.Red);

enum UserRoles{
    Admin = 'admin',
    User = 'user',
    Guest = 'guest'
}
console.log("USER ROLES: ", UserRoles.Admin);

//Que: What is any in typescript?
//Ans: Any is a type that can be any type. It is a reference type in typescript.
//Example Usage
/*
let any: any = "Hello";
console.log("ANY: ", any);
*/