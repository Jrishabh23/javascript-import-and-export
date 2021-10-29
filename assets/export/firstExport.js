//Export individual feature
export let name1, name2, name3; // Also use const, var
export let n1 = n,
    n2 = nn; // Also use const, var
export function first() {}
export class FirstClass {}

//Export List
export { name1, name2, first };

// Rename export
export { variable1 as name1, variable2 as name2 };

//Export destructured assignment with renaming
export const { name1, name2: bar } = o;

//Default export
export default expression;
export default function () {  } // also class, function*
export default function name1() {  } // also class, function*
export { name1 as default };

// Aggregating modules
// export * from . // does not set the default export
// export * as name1 from …; // Draft ECMAScript® 2O21
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default, … } from …;

//** default export can be imported with any name for example:

// file test.js
let k; export default k = 12;

// some other file
//import m from './test'; // note that we have the freedom to use import m instead of import k, because k was default export
//console.log(m);        // will log 12
//You can also rename named exports to avoid naming conflicts:

export { myFunction as function1,
         myVariable as variable };
