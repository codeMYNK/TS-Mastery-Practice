//Que: Types in Typescript?
//Ans: Types in TypeScript are a way to define the shape and structure of data. They help ensure that variables, function parameters, and return values conform to expected types, which can prevent errors and improve code quality. TypeScript provides several built-in types, as well as the ability to create custom types.

// Basic Types
export type PrimitiveTypes = string | number | boolean | null | undefined | symbol | bigint;

// Array Type
export type NumberArray = number[];

// Tuple Type
export type StringNumberTuple = [string, number];

// Enum Type
enum Color {
    Red,
    Green,
    Blue
}

// Interface Type
export interface Person {
    name: string;
    age: number;
    isEmployed?: boolean; // optional property
}

// Union Type
export type StringOrNumber = string | number;

// Function Type
export type GreetFunction = (name: string) => string;

// Custom Type Alias
export type Point = {
    x: number;
    y: number;
};  

//Any, Unkown, void, null, undefined, never types
export type AnyType = any;
export type UnknownType = unknown;
export type VoidType = void;
export type NeverType = never;  
export type NullType = null;
export type UndefinedType = undefined;


//Primitives and Reference Types
export type Primitives = string | number | boolean | null | undefined;
export type ReferenceTypes = object | Array<any> | Function;

//Type Assertions
export type TypeAssertionString = string & { __type: 'TypeAssertionString' };
export type TypeAssertionNumber = number & { __type: 'TypeAssertionNumber' };

//Literal Types
export type LiteralTypeYes = 'yes';
export type LiteralTypeNo = 'no';   
//Example Usage
/*
let myString: PrimitiveTypes = "Hello, TypeScript!";
let myNumberArray: NumberArray = [1, 2, 3, 4, 5];
let myTuple: StringNumberTuple = ["Age", 30];
let myColor: Color = Color.Green;
let person: Person = { name: "Alice", age: 25 };
let value: StringOrNumber = "A string or a number";
let greet: GreetFunction = (name) => `Hello, ${name}!`;
let point: Point = { x: 10, y: 20 };
*/  

//Functions in typescript?
//Ans: Functions in TypeScript are similar to those in JavaScript but with added type annotations. You can specify the types of parameters and the return type of the function, which helps catch errors during development and improves code readability.

function add(a: number, b: number): number {
    return a + b;
}

function greet(name: string): string {
    return `Hello, ${name}!`;
}

 const multiply = (x: number, y: number): number => {
    return x * y;
};

 function logMessage(message: string): void {
    console.log(message);
}

 function getPersonInfo(person: Person): string {
    return `${person.name} is ${person.age} years old.`;
}

 function isString(value: any): value is string {
    return typeof value === 'string';
}

//Example Usage
/*
let sum: number = add(5, 10);
let greeting: string = greet("Bob");
multiply(3, 4);
logMessage("This is a log message.");
let info: string = getPersonInfo({ name: "Charlie", age: 28 });
if (isString("test")) {
    console.log("It's a string!");
}
*/

//Primitive and refrence
 function demonstrateTypes(): void {
    // Primitive Types
    let str: string = "Hello, World!";
    let num: number = 42;
    let bool: boolean = true;
    let n: null = null;
    let u: undefined = undefined;

    console.log(`String: ${str}, Number: ${num}, Boolean: ${bool}, Null: ${n}, Undefined: ${u}`);

    // Reference Types
    let arr: number[] = [1, 2, 3, 4, 5];
    let obj: { name: string; age: number } = { name: "Alice", age: 30 };
    let func: (x: number) => number = (x) => x * x;

    console.log(`Array: ${arr}`);
    console.log(`Object: Name - ${obj.name}, Age - ${obj.age}`);
    console.log(`Function Result: ${func(5)}`);
}

//Example Usage
/*
demonstrateTypes();
*/  

//how to copy refrence type with making new copy?
function copyReferenceType<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
}

//Example Usage
/*
let original = { name: "Alice", age: 30 };
let copy = copyReferenceType(original);
copy.age = 31;
console.log(original.age); // 30
console.log(copy.age);     // 31
*/

//How to use type assertion in typescript?
function assertType<T>(value: any): T {
    return value as T;
}

//Example Usage
/*
let someValue: any = "This is a string";
let strLength: number = assertType<string>(someValue).length;
console.log(strLength); // 16
*/

//How to use literal type in typescript?
 function respond(answer: 'yes' | 'no'): string {
    if (answer === 'yes') {
        return "You answered yes!";
    } else {
        return "You answered no!";
    }1
}

//Example Usage
/*
console.log(respond('yes')); // You answered yes!
console.log(respond('no'));  // You answered no!
*/


//Que: What is <T> in typescript?
//Ans: <T> is a generic type in typescript. It is a placeholder for a type. It is used to create a function that can work with any type.
//Example Usage
/*
function identity<T>(value: T): T {
    return value;
}
*/

//How to use generic type in typescript?
function identity<T>(value: T): T {
    return value;
}

//Example Usage
/*
let result = identity<string>("Hello");
console.log(result); // Hello
*/

//Que: Any, Unknown, Never, Void, Null, Undefined types in typescript?
//Ans: Any is a type that can be any type. It is a reference type in typescript.
//Example Usage
/*
let any: any = "Hello";
console.log("ANY: ", any);
*/

//How to declare an any with a specific type in typescript?
let any: any = "Hello";
console.log("ANY: ", any);

//Que: What is unknown in typescript?
//Ans: Unknown is a type that can be any type. It is a reference type in typescript.
//Example Usage
/*
let unknown: unknown = "Hello";
console.log("UNKNOWN: ", unknown);
*/

//How to declare an unknown with a specific type in typescript?
let unknown: unknown = "Hello";
console.log("UNKNOWN: ", unknown);

//Que: What is never in typescript?
//Ans: Never is a type that can be never. It is a reference type in typescript.
//Example Usage
/*
let never: never = "Hello";
console.log("NEVER: ", never);
*/

//How to declare an never with a specific type in typescript?
// let neverr: never = "Hello";
// console.log("NEVER: ", neverr);

//Que: What is void in typescript?
//Ans: Void is a type that can be void. It is a reference type in typescript.
//Example Usage
/*
let void: void = "Hello";
console.log("VOID: ", void);
*/

//How to declare an void with a specific type in typescript?
// let void: void = "Hello";
// console.log("VOID: ", void);

//Que: What is null in typescript?
//Ans: Null is a type that can be null. It is a reference type in typescript.
//Example Usage
/*
let null: null = "Hello";
console.log("NULL: ", null);
*/

//How to declare an null with a specific type in typescript?
// let null: null = "Hello";
// console.log("NULL: ", null);

//Que: What is undefined in typescript?
//Ans: Undefined is a type that can be undefined. It is a reference type in typescript.
//Example Usage
/*
let undefined: undefined = "Hello";
console.log("UNDEFINED: ", undefined);
*/

//How to declare an undefined with a specific type in typescript?
// let undefined: undefined = "Hello";
// console.log("UNDEFINED: ", undefined);