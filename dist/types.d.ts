export type PrimitiveTypes = string | number | boolean | null | undefined | symbol | bigint;
export type NumberArray = number[];
export type StringNumberTuple = [string, number];
export interface Person {
    name: string;
    age: number;
    isEmployed?: boolean;
}
export type StringOrNumber = string | number;
export type GreetFunction = (name: string) => string;
export type Point = {
    x: number;
    y: number;
};
export type AnyType = any;
export type UnknownType = unknown;
export type VoidType = void;
export type NeverType = never;
export type NullType = null;
export type UndefinedType = undefined;
export type Primitives = string | number | boolean | null | undefined;
export type ReferenceTypes = object | Array<any> | Function;
export type TypeAssertionString = string & {
    __type: 'TypeAssertionString';
};
export type TypeAssertionNumber = number & {
    __type: 'TypeAssertionNumber';
};
export type LiteralTypeYes = 'yes';
export type LiteralTypeNo = 'no';
//# sourceMappingURL=types.d.ts.map