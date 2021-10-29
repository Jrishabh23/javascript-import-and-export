export const sum = (number) => {
    console.log(number);
    return (number / 2) * (1 + number);
};

export const nameAlias = () => "I am export with name alias";

//** Export default
let printString;
//** Export function expression
// export default printString = (n) => "This is default function expression";

//** Export function declaration
// export default function functionName() {
//     return "I am default export function declaration";
// }
//** Export function constructor
let funCons;
export default funCons = new Function("return 'This is function constructor'");
